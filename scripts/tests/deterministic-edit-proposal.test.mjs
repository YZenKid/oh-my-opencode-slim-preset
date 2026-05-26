#!/usr/bin/env node

import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { createHash } from "node:crypto";

const root = resolve(import.meta.dirname, "..", "..");
const scriptPath = resolve(root, "scripts", "deterministic-edit-proposal.mjs");
const samplePath = "scripts/tests/fixtures/deterministic-edit/sample.txt";
const absSamplePath = resolve(root, samplePath);

const sampleContent = readFileSync(absSamplePath, "utf8");
const sampleSha = createHash("sha256").update(sampleContent).digest("hex");

const EXIT = {
  OK: 0,
  STALE_HASH: 10,
  ANCHOR_NOT_FOUND: 11,
  AMBIGUOUS_ANCHOR: 12,
  NO_CHANGE: 13,
  PATH_OUT_OF_SCOPE: 14,
  UNSUPPORTED_FILE: 15,
  WRITE_FORBIDDEN: 16,
  INVALID_INPUT: 17,
};

let passedCount = 0;
let failedCount = 0;

function runTestCase(name, payload, expectedExitCode, expectedReason = null) {
  const payloadStr = JSON.stringify(payload);
  console.log(`[TEST] Running: ${name}`);
  try {
    const stdout = execSync(`node "${scriptPath}" ${JSON.stringify(payloadStr)}`, {
      cwd: root,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    });
    
    // If it succeeded and we expected non-zero, fail
    if (expectedExitCode !== EXIT.OK) {
      console.error(`  FAIL: Expected exit code ${expectedExitCode}, but got 0`);
      failedCount++;
      return;
    }
    
    const parsed = JSON.parse(stdout);
    if (parsed.ok !== true || parsed.code !== EXIT.OK || !parsed.diff) {
      console.error(`  FAIL: Output does not look like success. Got:`, parsed);
      failedCount++;
      return;
    }
    
    console.log(`  PASS: Completed successfully with diff`);
    passedCount++;
  } catch (err) {
    const actualStatus = err.status;
    if (actualStatus !== expectedExitCode) {
      console.error(`  FAIL: Expected exit code ${expectedExitCode}, but got ${actualStatus}. Output: ${err.stdout} ${err.stderr}`);
      failedCount++;
      return;
    }
    
    if (expectedReason) {
      try {
        const parsed = JSON.parse(err.stdout);
        if (parsed.reason !== expectedReason) {
          console.error(`  FAIL: Expected reason ${expectedReason}, but got ${parsed.reason}`);
          failedCount++;
          return;
        }
      } catch (e) {
        console.error(`  FAIL: Could not parse output JSON. Stdout: ${err.stdout}`);
        failedCount++;
        return;
      }
    }
    
    console.log(`  PASS: Correctly failed with exit code ${actualStatus} and reason ${expectedReason ?? "any"}`);
    passedCount++;
  }
}

// 1. Success case
runTestCase("Success case (proposal only)", {
  path: samplePath,
  expected_sha256: sampleSha,
  old_block: "This is line 3.",
  new_block: "This is edited line 3."
}, EXIT.OK);

// 2. Stale hash case
runTestCase("Stale hash", {
  path: samplePath,
  expected_sha256: "incorrect_sha_here",
  old_block: "This is line 3.",
  new_block: "This is edited line 3."
}, EXIT.STALE_HASH, "stale-hash");

// 3. Anchor not found
runTestCase("Anchor not found", {
  path: samplePath,
  expected_sha256: sampleSha,
  old_block: "This block does not exist in sample.txt.",
  new_block: "This is edited line 3."
}, EXIT.ANCHOR_NOT_FOUND, "anchor-not-found");

// 4. Ambiguous anchor
runTestCase("Ambiguous anchor", {
  path: samplePath,
  expected_sha256: sampleSha,
  old_block: "Duplicate line.",
  new_block: "No longer duplicate line."
}, EXIT.AMBIGUOUS_ANCHOR, "ambiguous-anchor");

// 5. No change
runTestCase("No change", {
  path: samplePath,
  expected_sha256: sampleSha,
  old_block: "This is line 3.",
  new_block: "This is line 3."
}, EXIT.NO_CHANGE, "no-change");

// 6. Path out of scope (absolute)
runTestCase("Path out of scope (absolute)", {
  path: "/etc/passwd",
  expected_sha256: sampleSha,
  old_block: "This is line 3.",
  new_block: "This is edited line 3."
}, EXIT.PATH_OUT_OF_SCOPE, "path-out-of-scope");

// 7. Path out of scope (relative traversal)
runTestCase("Path out of scope (traversal)", {
  path: "scripts/../../etc/passwd",
  expected_sha256: sampleSha,
  old_block: "This is line 3.",
  new_block: "This is edited line 3."
}, EXIT.PATH_OUT_OF_SCOPE, "path-out-of-scope");

// 8. Unsupported file extension
runTestCase("Unsupported extension", {
  path: "assets/maneki-neko-icon.png",
  expected_sha256: sampleSha,
  old_block: "a",
  new_block: "b"
}, EXIT.UNSUPPORTED_FILE, "unsupported-file");

// 9. Write forbidden (apply: true)
runTestCase("Write forbidden (apply: true)", {
  path: samplePath,
  expected_sha256: sampleSha,
  old_block: "This is line 3.",
  new_block: "This is edited line 3.",
  apply: true
}, EXIT.WRITE_FORBIDDEN, "write-forbidden");

// 10. Write forbidden (mode: "apply")
runTestCase("Write forbidden (mode: 'apply')", {
  path: samplePath,
  expected_sha256: sampleSha,
  old_block: "This is line 3.",
  new_block: "This is edited line 3.",
  mode: "apply"
}, EXIT.WRITE_FORBIDDEN, "write-forbidden");

console.log(`\n=== TEST SUMMARY ===`);
console.log(`Passed: ${passedCount}`);
console.log(`Failed: ${failedCount}`);

if (failedCount > 0) {
  process.exit(1);
} else {
  console.log("All tests passed successfully.");
  process.exit(0);
}
