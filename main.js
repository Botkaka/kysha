console.log('Hello World!');
let currentPage = 0;
const pages = document.querySelectorAll('.page');

function showPage(index) {
    pages.forEach((page, i) => {
        page.style.display = (i === index) ? 'block' : 'none';
    });
}

function nextPage() {
    currentPage = (currentPage + 1) % pages.length;
    showPage(currentPage);
}

// Tampilkan halaman pertama saat dimuat
showPage(currentPage);
let currentPage = 0;
const pages = document.querySelectorAll('.page');
const scrollSpeed = 50; // Kecepatan gulir (ms)
let scrollInterval;

// Fungsi untuk menampilkan halaman berdasarkan indeks
function showPage(index) {
    pages.forEach((page, i) => {
        page.style.display = (i === index) ? 'block' : 'none';
    });
    startScrolling(index);
}

// Fungsi untuk menggulir teks secara otomatis
function startScrolling(index) {
    const page = pages[index];
    const paragraphs = page.querySelectorAll('p');
    let scrollPosition = 0;

    // Hentikan gulir sebelumnya jika ada
    clearInterval(scrollInterval);

    // Gulir setiap paragraf
    scrollInterval = setInterval(() => {
        if (scrollPosition < paragraphs.length) {
            paragraphs[scrollPosition].scrollIntoView({ behavior: 'smooth', block: 'start' });
            scrollPosition++;
        } else {
            clearInterval(scrollInterval);
        }
    }, scrollSpeed * paragraphs.length);
}

// Fungsi untuk melanjutkan ke halaman berikutnya
function nextPage() {
    currentPage = (currentPage + 1) % pages.length;
    showPage(currentPage);
}

// Fungsi untuk kembali ke halaman sebelumnya
function previousPage() {
    currentPage = (currentPage - 1 + pages.length) % pages.length;
    showPage(currentPage);
}

// Tampilkan halaman pertama saat dimuat
showPage(currentPage);