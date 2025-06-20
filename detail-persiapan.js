document.addEventListener('DOMContentLoaded', function () {
  const tesModal = document.getElementById('tesModal');
  if (!tesModal) return;

  tesModal.addEventListener('show.bs.modal', function (event) {
    const button = event.relatedTarget;
    const jenisTes = button.getAttribute('data-jenis');
    const judulModal = tesModal.querySelector('#judulModal');
    const isiModal = tesModal.querySelector('#isiModal');
    if (!judulModal || !isiModal) return;

    // Isi konten modal sesuai jenis tes
    switch (jenisTes) {
      case 'gmat':
        judulModal.textContent = 'Detail GMAT';
        isiModal.innerHTML = `
          <h6>Apa itu GMAT?</h6>
          <p>Graduate Management Admission Test adalah tes standar untuk program bisnis dan manajemen.</p>
          <h6>Fokus Materi:</h6>
          <ul>
            <li>Analytical Writing Assessment</li>
            <li>Integrated Reasoning</li>
            <li>Quantitative Reasoning</li>
            <li>Verbal Reasoning</li>
          </ul>
        `;
        break;

      case 'toefl_ibt':
        judulModal.textContent = 'Detail TOEFL IBT';
        isiModal.innerHTML = `
          <h6>Apa itu TOEFL IBT?</h6>
          <p>Tes kemampuan berbahasa Inggris secara online untuk tujuan akademik.</p>
          <h6>Komponen Ujian:</h6>
          <ul>
            <li>Reading</li>
            <li>Listening</li>
            <li>Speaking</li>
            <li>Writing</li>
          </ul>
        `;
        break;

      case 'toeic':
        judulModal.textContent = 'Detail TOEIC';
        isiModal.innerHTML = `
          <h6>Apa itu TOEIC?</h6>
          <p>Test of English for International Communication adalah tes kemampuan bahasa Inggris untuk kebutuhan profesional di dunia kerja.</p>
          <h6>Komponen Ujian:</h6>
          <ul>
            <li>Listening Comprehension</li>
            <li>Reading Comprehension</li>
            <li>Speaking and Writing (opsional)</li>
          </ul>
        `;
        break;

      case 'gre':
        judulModal.textContent = 'Detail GRE';
        isiModal.innerHTML = `
          <h6>Apa itu GRE?</h6>
          <p>Graduate Record Examination adalah tes masuk untuk program pascasarjana di universitas internasional.</p>
          <h6>Fokus Materi:</h6>
          <ul>
            <li>Analytical Writing</li>
            <li>Verbal Reasoning</li>
            <li>Quantitative Reasoning</li>
          </ul>
        `;
        break;

      case 'alevel':
        judulModal.textContent = 'Detail A Level';
        isiModal.innerHTML = `
          <h6>Apa itu A Level?</h6>
          <p>General Certificate of Education Advanced Level adalah ujian akhir sekolah menengah untuk masuk universitas di Inggris dan negara lainnya.</p>
          <h6>Mata Pelajaran Umum:</h6>
          <ul>
            <li>Matematika</li>
            <li>Fisika</li>
            <li>Kimia</li>
            <li>Biologi</li>
            <li>Ekonomi</li>
          </ul>
        `;
        break;

      case 'sat':
        judulModal.textContent = 'Detail SAT';
        isiModal.innerHTML = `
          <h6>Apa itu SAT?</h6>
          <p>Scholastic Assessment Test adalah tes masuk perguruan tinggi di Amerika Serikat dan beberapa negara lainnya.</p>
          <h6>Komponen Ujian:</h6>
          <ul>
            <li>Reading Test</li>
            <li>Writing and Language Test</li>
            <li>Math Test</li>
          </ul>
        `;
        break;

      case 'ielts':
        judulModal.textContent = 'Detail IELTS';
        isiModal.innerHTML = `
          <h6>Apa itu IELTS?</h6>
          <p>International English Language Testing System adalah tes kemampuan bahasa Inggris untuk tujuan akademik atau imigrasi.</p>
          <h6>Komponen Ujian:</h6>
          <ul>
            <li>Listening</li>
            <li>Reading</li>
            <li>Writing</li>
            <li>Speaking</li>
          </ul>
        `;
        break;

      case 'toefl_itp':
        judulModal.textContent = 'Detail TOEFL ITP';
        isiModal.innerHTML = `
          <h6>Apa itu TOEFL ITP?</h6>
          <p>Institutional Testing Program adalah tes TOEFL untuk keperluan internal, seperti seleksi universitas atau lembaga pendidikan.</p>
          <h6>Komponen Ujian:</h6>
          <ul>
            <li>Listening Comprehension</li>
            <li>Structure and Written Expression</li>
            <li>Reading Comprehension</li>
          </ul>
        `;
        break;

      case 'act':
        judulModal.textContent = 'Detail ACT';
        isiModal.innerHTML = `
          <h6>Apa itu ACT?</h6>
          <p>American College Testing adalah tes masuk perguruan tinggi di Amerika Serikat dengan materi komprehensif.</p>
          <h6>Komponen Ujian:</h6>
          <ul>
            <li>English</li>
            <li>Mathematics</li>
            <li>Reading</li>
            <li>Science</li>
            <li>Optional Writing Test</li>
          </ul>
        `;
        break;

      default:
        judulModal.textContent = 'Detail Tidak Ditemukan';
        isiModal.innerHTML = `<p>Data tidak tersedia.</p>`;
    }
  });
});