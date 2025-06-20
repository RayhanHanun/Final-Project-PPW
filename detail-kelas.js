document.addEventListener('DOMContentLoaded', function () {
      const kelasModal = document.getElementById('kelasModal');
      if (!kelasModal) return;

      kelasModal.addEventListener('show.bs.modal', function (event) {
        const button = event.relatedTarget; // Tombol yang memicu modal
        const jenisKelas = button.getAttribute('data-jenis'); // Ambil nilai dari data-jenis
        const judulModal = kelasModal.querySelector('#judulModal');
        const isiModal = kelasModal.querySelector('#isiModal');
        if (!judulModal || !isiModal) return;

        // Isi konten modal sesuai jenis kelas
        switch (jenisKelas) {
          case 'jepang':
            judulModal.textContent = 'Detail Kelas Bahasa Jepang';
            isiModal.innerHTML = `
              <h6>Tentang Kelas Bahasa Jepang:</h6>
              <p>Kelas ini dirancang untuk membantu Anda belajar bahasa Jepang dari dasar hingga mahir.</p>
              <h6>Fokus Pembelajaran:</h6>
              <ul>
                <li>Hiragana dan Katakana</li>
                <li>Tata Bahasa Dasar</li>
                <li>Percakapan Sehari-hari</li>
                <li>Kanji untuk Pemula</li>
                <li>Latihan Listening dan Speaking</li>
              </ul>
              <h6>Keunggulan:</h6>
              <ul>
                <li>Pelatih Native Speaker</li>
                <li>Metode Interaktif</li>
                <li>Bahan Belajar Terstruktur</li>
                <li>Sertifikat Kelulusan</li>
              </ul>
            `;
            break;

          case 'korea':
            judulModal.textContent = 'Detail Kelas Bahasa Korea';
            isiModal.innerHTML = `
              <h6>Tentang Kelas Bahasa Korea:</h6>
              <p>Kelas ini cocok untuk pemula yang ingin belajar bahasa Korea dari awal.</p>
              <h6>Fokus Pembelajaran:</h6>
              <ul>
                <li>Hangeul (Alfabet Korea)</li>
                <li>Tata Bahasa Dasar</li>
                <li>Percakapan Sehari-hari</li>
                <li>Kosa Kata Populer</li>
                <li>Latihan Listening dan Speaking</li>
              </ul>
              <h6>Keunggulan:</h6>
              <ul>
                <li>Pelatih Berpengalaman</li>
                <li>Materi Terbaru</li>
                <li>Kelas Online dan Offline</li>
                <li>Sertifikat Kelulusan</li>
              </ul>
            `;
            break;

          case 'arab':
            judulModal.textContent = 'Detail Kelas Bahasa Arab';
            isiModal.innerHTML = `
              <h6>Tentang Kelas Bahasa Arab:</h6>
              <p>Kelas ini dirancang untuk membantu Anda belajar bahasa Arab dengan pendekatan praktis.</p>
              <h6>Fokus Pembelajaran:</h6>
              <ul>
                <li>Tulisan Arab (Abjad dan Harakat)</li>
                <li>Tata Bahasa Dasar</li>
                <li>Percakapan Sehari-hari</li>
                <li>Kosa Kata Islami</li>
                <li>Latihan Reading dan Writing</li>
              </ul>
              <h6>Keunggulan:</h6>
              <ul>
                <li>Pelatih Native Speaker</li>
                <li>Metode Praktis</li>
                <li>Kelas Fleksibel</li>
                <li>Sertifikat Kelulusan</li>
              </ul>
            `;
            break;

          case 'prancis':
            judulModal.textContent = 'Detail Kelas Bahasa Prancis';
            isiModal.innerHTML = `
              <h6>Tentang Kelas Bahasa Prancis:</h6>
              <p>Kelas ini membantu Anda belajar bahasa Prancis dengan pendekatan modern.</p>
              <h6>Fokus Pembelajaran:</h6>
              <ul>
                <li>Pengucapan Dasar</li>
                <li>Tata Bahasa Prancis</li>
                <li>Percakapan Sehari-hari</li>
                <li>Kosa Kata Umum</li>
                <li>Latihan Listening dan Speaking</li>
              </ul>
              <h6>Keunggulan:</h6>
              <ul>
                <li>Pelatih Berpengalaman</li>
                <li>Bahan Belajar Interaktif</li>
                <li>Kelas Online dan Offline</li>
                <li>Sertifikat Kelulusan</li>
              </ul>
            `;
            break;

          case 'mandarin':
            judulModal.textContent = 'Detail Kelas Bahasa Mandarin';
            isiModal.innerHTML = `
              <h6>Tentang Kelas Bahasa Mandarin:</h6>
              <p>Kelas ini dirancang untuk membantu Anda belajar bahasa Mandarin dengan pendekatan praktis.</p>
              <h6>Fokus Pembelajaran:</h6>
              <ul>
                <li>Pinyin (Sistem Penulisan Fonetik)</li>
                <li>Tata Bahasa Dasar</li>
                <li>Percakapan Sehari-hari</li>
                <li>Kosa Kata Bisnis</li>
                <li>Latihan Listening dan Speaking</li>
              </ul>
              <h6>Keunggulan:</h6>
              <ul>
                <li>Pelatih Native Speaker</li>
                <li>Metode Praktis</li>
                <li>Kelas Fleksibel</li>
                <li>Sertifikat Kelulusan</li>
              </ul>
            `;
            break;

          case 'jerman':
            judulModal.textContent = 'Detail Kelas Bahasa Jerman';
            isiModal.innerHTML = `
              <h6>Tentang Kelas Bahasa Jerman:</h6>
              <p>Kelas ini dirancang untuk membantu Anda belajar bahasa Jerman sesuai standar Eropa.</p>
              <h6>Fokus Pembelajaran:</h6>
              <ul>
                <li>Alfabet Jerman</li>
                <li>Tata Bahasa Dasar</li>
                <li>Percakapan Sehari-hari</li>
                <li>Kosa Kata Umum</li>
                <li>Latihan Listening dan Speaking</li>
              </ul>
              <h6>Keunggulan:</h6>
              <ul>
                <li>Pelatih Berpengalaman</li>
                <li>Bahan Belajar Terstruktur</li>
                <li>Kelas Online dan Offline</li>
                <li>Sertifikat Kelulusan</li>
              </ul>
            `;
            break;

          default:
            judulModal.textContent = 'Detail Tidak Ditemukan';
            isiModal.innerHTML = `<p>Data tidak tersedia.</p>`;
        }
      });
    });