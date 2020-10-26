# fancy-todo

Buatlah aplikasi Todo menggunakan Client-server model dengan spesifikasi sebagai berikut:
- API Documentation yang meliputi : URLs, HTTP method, request, response (success dan error case)
- Membuat routes sesuai standar REST API
- CRUD endpoints untuk Todo, minimal ada:
    - title
    - description
    - status
    - due_date (validasi, user tidak bisa menginput tanggal yg sudah lewat dari hari ini)
- Register
Model user di validasi. Email harus unique, harus type email, password juga di validasi misalnya minimal 6 karakter
- Login menggunakan email & password
- Membuat authentication dan authorization sehingga user hanya bisa melakukan CRUD terhadap todo-nya sendiri
- Make it fancy! Tambahkan 1 fitur atau lebih menggunakan 3rd party API apapun yang akan menjadikan aplikasi todo kamu menjadi unik dan berbeda dari aplikasi todo biasa. Misal, saat menambahkan Todo , user akan mendapatkan emai mengenai Todo yg dia buat.
- Social Login (Google/Twitter/Facebook/GitHub)
- NO alert(); please!


## Rocket 🚀
Challengenya masih kurang? Coba kerjain ini!
- Authenticated user bisa membuat project dan invite/add member ke project tersebut.
- Todo yang ada di suatu project hanya bisa di read/write (CRUD) oleh project members.
- 3rd Party API

## Requirement Porto Fancy Todo

### Kompetensi Backend
- REST API
- API Documentation
- Authentication & Authorization
- PostgreSQL + Sequelize

### Kompetensi Client
- jQuery
- SPA (Single Page Application)


## Deadline
- Week 1 - Sabtu 18:00

## Submission
Fork dari organization, lalu open pull request dengan title NAMA LENGKAP KAMU (ex: Dimitri Wahyudiputra) dan assign ke buddy kamu. Tambahkan comment yang berisi environment variables yang dipakai (beserta valuenya), link deploy (jika ada), fitur tambahannya apa dan kendala saat mengerjakan.