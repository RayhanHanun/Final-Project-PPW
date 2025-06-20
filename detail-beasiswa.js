document.addEventListener('DOMContentLoaded', function () {
  const beasiswaModal = document.getElementById('beasiswaModal');
  beasiswaModal.addEventListener('show.bs.modal', function (event) {
    const button = event.relatedTarget; // Tombol yang memicu modal
    const jenisBeasiswa = button.getAttribute('data-jenis'); // Ambil nilai dari data-jenis
    const judulModal = beasiswaModal.querySelector('#judulModal');
    const isiModal = beasiswaModal.querySelector('#isiModal');

    // Konten modal berdasarkan jenis beasiswa
    if (jenisBeasiswa === 'lpdp') {
      judulModal.textContent = 'Detail Beasiswa LPDP';
      isiModal.innerHTML = `
        <h6>Tentang LPDP:</h6>
        <p>Beasiswa penuh dari pemerintah Indonesia untuk studi S2 dan S3 di universitas terkemuka di dalam dan luar negeri.</p>
        <h6>Yang Didapat:</h6>
        <ul>
          <li>Biaya kuliah penuh</li>
          <li>Tunjangan hidup bulanan</li>
          <li>Tiket pesawat PP</li>
          <li>Tunjangan buku dan penelitian</li>
          <li>Asuransi kesehatan</li>
        </ul>
        <h6>Persyaratan Lengkap:</h6>
        <ul>
          <li>Warga Negara Indonesia</li>
          <li>Usia maksimal (bervariasi)</li>
          <li>IPK minimal (bervariasi)</li>
          <li>TOEFL/IELTS sesuai ketentuan</li>
          <li>LoA Unconditional dari universitas tujuan</li>
          <li>Surat rekomendasi</li>
          <li>Esai/Rencana studi</li>
        </ul>
      `;
    } else if (jenisBeasiswa === 'chevening') {
      judulModal.textContent = 'Detail Beasiswa Chevening';
      isiModal.innerHTML = `
        <h6>Tentang Chevening:</h6>
        <p>Beasiswa penuh dari pemerintah Inggris untuk studi pascasarjana satu tahun di universitas Inggris.</p>
        <h6>Yang Didapat:</h6>
        <ul>
          <li>Biaya kuliah penuh</li>
          <li>Tunjangan hidup bulanan</li>
          <li>Tiket pesawat PP</li>
          <li>Biaya visa</li>
          <li>Biaya perjalanan ke acara Chevening</li>
        </ul>
        <h6>Persyaratan Lengkap:</h6>
        <ul>
          <li>Warga Negara Indonesia</li>
          <li>Memiliki pengalaman kerja minimal 2 tahun</li>
          <li>Memiliki gelar sarjana</li>
          <li>IELTS minimal 6.5 atau TOEFL iBT minimal 79</li>
          <li>Komitmen untuk kembali ke Indonesia</li>
        </ul>
      `;
    } else if (jenisBeasiswa === 'erasmus') {
      judulModal.textContent = 'Detail Beasiswa Erasmus+';
      isiModal.innerHTML = `
        <h6>Tentang Erasmus+:</h6>
        <p>Program pertukaran studi atau gelar penuh di negara-negara Eropa, didanai oleh Uni Eropa.</p>
        <h6>Yang Didapat:</h6>
        <ul>
          <li>Biaya kuliah (sebagian atau penuh tergantung program)</li>
          <li>Tunjangan hidup</li>
          <li>Pengalaman budaya Eropa</li>
          <li>Biaya perjalanan</li>
        </ul>
        <h6>Persyaratan Lengkap:</h6>
        <ul>
          <li>Mahasiswa aktif atau lulusan</li>
          <li>IELTS minimal 6.0 (tergantung universitas)</li>
          <li>Motivasi yang kuat</li>
          <li>Rencana studi yang jelas</li>
        </ul>
      `;
    } else if (jenisBeasiswa === 'bca') {
      judulModal.textContent = 'Detail Beasiswa BCA';
      isiModal.innerHTML = `
        <h6>Tentang Beasiswa BCA:</h6>
        <p>Bantuan pendidikan dari Bank BCA untuk mahasiswa berprestasi yang memiliki kesulitan finansial.</p>
        <h6>Yang Didapat:</h6>
        <ul>
          <li>Bantuan biaya kuliah</li>
          <li>Uang saku bulanan</li>
          <li>Kesempatan magang</li>
          <li>Pengembangan diri</li>
        </ul>
        <h6>Persyaratan Lengkap:</h6>
        <ul>
          <li>Mahasiswa aktif semester 2-6</li>
          <li>IPK minimal 3.00</li>
          <li>Kondisi ekonomi kurang mampu</li>
          <li>Aktif berorganisasi</li>
          <li>Tidak sedang menerima beasiswa lain</li>
        </ul>
      `;
    } else if (jenisBeasiswa === 'prestasi') {
      judulModal.textContent = 'Detail Beasiswa Prestasi';
      isiModal.innerHTML = `
        <h6>Tentang Beasiswa Prestasi:</h6>
        <p>Beasiswa dari Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi untuk meningkatkan kualitas sumber daya manusia Indonesia.</p>
        <h6>Yang Didapat:</h6>
        <ul>
          <li>Biaya Pendidikan</li>
          <li>Biaya Hidup</li>
          <li>Biaya Buku</li>
        </ul>
        <h6>Persyaratan Lengkap:</h6>
        <ul>
          <li>Warga Negara Indonesia</li>
          <li>Usia maksimal (bervariasi)</li>
          <li>Memiliki kemampuan bahasa Indonesia dan bahasa asing</li>
          <li>Memiliki prestasi akademik/non-akademik</li>
          <li>Surat pernyataan tidak menerima beasiswa lain</li>
        </ul>
      `;
    } else if (jenisBeasiswa === 'tanoto') {
      judulModal.textContent = 'Detail Beasiswa Tanoto Foundation';
      isiModal.innerHTML = `
        <h6>Tentang Beasiswa Tanoto Foundation:</h6>
        <p>Program beasiswa dan pengembangan kepemimpinan untuk mahasiswa S1 berprestasi dari berbagai disiplin ilmu.</p>
        <h6>Yang Didapat:</h6>
        <ul>
          <li>Biaya kuliah penuh</li>
          <li>Tunjangan hidup bulanan</li>
          <li>Program pengembangan kepemimpinan (Leadership Development Program)</li>
          <li>Kesempatan magang di Tanoto Foundation atau mitra</li>
        </ul>
        <h6>Persyaratan Lengkap:</h6>
        <ul>
          <li>Warga Negara Indonesia</li>
          <li>Mahasiswa semester 1 atau 2 dari universitas mitra</li>
          <li>Memiliki potensi kepemimpinan dan aktif berorganisasi</li>
          <li>IPK minimal 3.00</li>
          <li>Bersedia mengikuti program pengembangan</li>
        </ul>
      `;
    }
  });
});