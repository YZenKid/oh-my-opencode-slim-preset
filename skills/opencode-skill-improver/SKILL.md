---
name: opencode-skill-improver
description: Skill improvement workflow for OpenCode agents and skills. Use after non-trivial tasks, repeated failures, policy gaps, or explicit user request to capture evidence, refine prompts, and validate bounded improvements without bloat or secret access.
---

# OpenCode Skill Improver

Gunakan skill ini untuk perbaikan kecil dan berbasis evidence pada agent, skill, routing, dan eval.

## Workflow progresif

1. **Capture intent** — ringkas tugas terakhir, masalah yang muncul, dan peluang perbaikan paling kecil yang bernilai.
2. **Research / interview** — baca file lokal yang relevan, tanyakan hanya bila konteks belum cukup, dan kumpulkan evidence yang bisa diverifikasi.
3. **Draft update** — usulkan perubahan minimum pada `SKILL.md`, agent routing, references, atau evals.
4. **Validate with-skill vs baseline** — bandingkan perilaku lama dan baru lewat 2–3 prompt evaluasi yang realistis.
5. **Feedback loop** — bila hasilnya belum stabil, revisi sekali lagi dengan fokus pada instruksi yang paling ambigu atau paling sering gagal.
6. **Trigger description optimization** — perjelas kapan skill ini harus dipanggil, tetapi jangan membuat trigger terlalu agresif atau mengulang aturan yang sudah ada.
7. **Post-task improvement checkpoint** — setelah tugas non-trivial, cek apakah ada pola berulang, bug prompt, gap kebijakan, atau instruksi yang bisa diringkas.

The trigger description optimization step should stay conservative and evidence-based.

Referensi pendek: `skill-creator` dipakai sebagai pola kerja, bukan source of truth yang harus di-install ulang.

## Safety gates

- Jangan membaca atau menulis `.env`, secret, token, atau credential.
- Jangan melakukan update eksternal secara buta; update `skills.sh` atau registry eksternal hanya jika diminta eksplisit dan disertai konteks.
- Jangan melakukan blind external updates tanpa approval.
- Jangan menambah prompt bloat; pilih replace atau consolidate, bukan append tanpa akhir.
- Jangan membuat instruksi yang konflik dengan `AGENTS.md`, agent file, atau skill lain; jika konflik muncul, catat dan eskalasi.
- Jangan biarkan instruction conflicts tersembunyi di frontmatter, references, atau evals.
- Simpan post-task improvement checkpoint sebagai langkah eksplisit, bukan asumsi tersembunyi.
- Jangan memperluas izin akses di luar kebutuhan bounded improvement.
- Jangan mengubah banyak file sekaligus jika satu perubahan kecil sudah menyelesaikan masalah.
- Jangan mengasumsikan semua task perlu perbaikan; skip untuk task trivial.

## Bounded update rules

- Evidence harus berasal dari task terakhir, eval prompt, atau file konfigurasi yang relevan.
- Perubahan harus spesifik, dapat diuji, dan mudah di-rollback.
- Jika perlu rewrite besar, buat proposal singkat dulu dan minta persetujuan.
- Prioritaskan reuse of existing local patterns dan references sebelum membuat instruksi baru.
- Simpan detail panjang di references, bukan di frontmatter atau body utama.

## Eval contract

- Siapkan 2–3 prompt yang meniru kasus nyata: improvement setelah bug fix, update skill eksternal dengan izin, dan penolakan perubahan berisiko tanpa evidence.
- Jalankan baseline terlebih dulu, lalu with-skill evaluation.
- Catat perbedaan yang terlihat: kualitas, safety, ketepatan routing, dan risiko bloat.
- Jika hasil memburuk, kembalikan perubahan atau sempitkan instruksi.

## References usage

- Gunakan `references/skill-creator.md` untuk detail tambahan yang tidak muat di body utama.
- Jaga agar body utama tetap ringkas, actionable, dan mudah dipindai.

## Output

Berikan ringkasan singkat: intent, evidence, file yang berubah/proposed, hasil evaluasi baseline vs with-skill, dan follow-up yang masih dibutuhkan.
