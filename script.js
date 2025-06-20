document.addEventListener('DOMContentLoaded', function () {
  const beasiswaModal = document.getElementById('beasiswaModal');
  if (!beasiswaModal) return;

  beasiswaModal.addEventListener('show.bs.modal', function (event) {
    const button = event.relatedTarget;
    const jenisBeasiswa = button.getAttribute('data-jenis');
    const judulModal = beasiswaModal.querySelector('#judulModal');
    const isiModal = beasiswaModal.querySelector('#isiModal');

    if (!judulModal || !isiModal) return;

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
    } else if (jenisBeasiswa === 'fulbright') {
      judulModal.textContent = 'Detail Beasiswa Fulbright';
      isiModal.innerHTML = `
        <h6>Tentang Fulbright:</h6>
        <p>Program beasiswa internasional yang mendanai studi, penelitian, dan pertukaran budaya di Amerika Serikat.</p>
        <h6>Yang Didapat:</h6>
        <ul>
          <li>Biaya kuliah penuh</li>
          <li>Gaji bulanan</li>
          <li>Tiket pesawat</li>
          <li>Asuransi kesehatan</li>
          <li>Kesempatan jaringan global</li>
        </ul>
        <h6>Persyaratan Lengkap:</h6>
        <ul>
          <li>WNI dengan gelar S1/S2</li>
          <li>Memiliki pengalaman kerja</li>
          <li>TOEFL iBT minimal 90 / IELTS 6.5</li>
          <li>Rekomendasi akademik/profesional</li>
          <li>Proposal penelitian/studi</li>
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
    }
  });
});