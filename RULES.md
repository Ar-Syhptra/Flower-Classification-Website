# Coding Style

## Nama Variable & Fungsi
- ✅ Bahasa Indonesia  
- ✅ `camelCase` untuk web development  
- ✅ `snake_case` untuk machine learning & nama database  

## Komen
- ✅ Setiap fungsi wajib memiliki komentar berbahasa Indonesia  
- ✅ Opsional untuk bagian kode yang rumit  

---  

# Git

## Atribut Config
- ✅ Pastikan atribut config sudah benar  
- ✅ Pastikan `core.autocrlf = true`  

## Aturan Commit
- ✅ Pastikan setiap perubahan dibuat dalam commit yang berbeda  

### Aturan Pesan Commit
Gunakan format berikut:
```bash
<tipe>: <pesan commit>

[opsional deskripsi]
```
Tipe yang digunakan:
- 🔹 `fix` → Memperbaiki bug/kesalahan  
- 🔹 `feat` → Penambahan fitur baru  
- 🔹 `refactor` → Mengubah struktur kode tanpa mengubah fungsionalitas  
- 🔹 `style` → Perubahan yang tidak mempengaruhi kode (contoh: tab/komen)  
- 🔹 `build` → Perubahan pada library/framework  
- 🔹 `chore` → Perubahan file yang tidak terkait dengan aplikasi (contoh: `README.md`, `.gitignore`)  

## Branch
Gunakan branch sesuai fungsinya:
- 🔹 `main` → Hanya untuk kode stabil & siap produksi  
- 🔹 `dev` → Tempat pengembangan sebelum masuk `main`  
- 🔹 `feat/<nama-fitur>` → Branch untuk fitur spesifik (contoh: `feat/fitur-login`)  

### Cara buat branch fitur dari `dev`
```bash
git checkout dev  # Pindah ke branch dev
git checkout -b feat/nama-fitur  # Buat branch baru dari dev  
```

### Setelah selesai, merge ke `dev`
```bash
git checkout dev  # Pindah ke branch dev
git merge feat/nama-fitur  # Gabungkan branch fitur ke dev
git push origin dev  # Push perubahan ke repository online  
```

---  

# Github

## Push
- ❌ Hindari `--force` saat push  
- ✅ Pastikan commit sudah benar agar tidak perlu reset atau force push  

## Pull / Fetch
- ✅ Biasakan melakukan `git pull` atau `git fetch` sebelum mulai ngoding  

## Pull Request
- ✅ Gunakan pull request untuk merge ke `main`
