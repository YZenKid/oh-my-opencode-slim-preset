# Skill Creator Summary

Ringkasan praktis dari pola `skill-creator`:

- Mulai dari intent yang jelas dan spesifik.
- Kumpulkan evidence sebelum menulis instruksi baru.
- Tulis `SKILL.md` sesingkat mungkin, lalu pindahkan detail ke references bila perlu.
- Gunakan contoh nyata dan eval prompt kecil untuk memverifikasi perubahan.
- Bandingkan baseline vs with-skill agar dampak prompt terlihat.
- Perbaiki trigger description supaya skill dipanggil hanya ketika memang bernilai.
- Jaga safety gate: no secrets, no blind updates, no prompt bloat, no instruction conflict.
