// Konstanta untuk konfigurasi
const CONFIG = {
    animationClass: 'fade-out',
    titleAnimationClass: 'move-up-fast',
    animationDelay: 2000,
    titleDelay: 50,
    nextPageUrl: 'page_1.html',
    elementSelector: '.circle-full-1, .box-title, .circle-grey-1, .circle-grey-2, .description, .tahun',
    special: '.circle-logo',
    titleSelector: '.title'
};

// Fungsi untuk menambahkan kelas animasi ke elemen

// Fungsi untuk menganimasikan elemen-elemen umum
function animateElements(es) {
    let elements = Array.from(es);

    elements.sort((a, b) => {
        const rectA = a.getBoundingClientRect();
        const rectB = b.getBoundingClientRect();
        return rectA.top - rectB.top;
    });
    
    elements.forEach((e, i) => {
        e.classList.add("fade-out")
    });

}

// Fungsi untuk menganimasikan title
function animateTitle(titleElement) {
    const elements = document.querySelectorAll(CONFIG.elementSelector);
    const loadingElements = document.querySelectorAll('.loading-element');
    const circle = document.querySelector(CONFIG.special);
    const logo = document.querySelector(".logo")

    setTimeout(() => {
        titleElement.classList.add("title-move-down");
        setTimeout(() => {
            titleElement.classList.remove("title-move-down");
            animateElements(elements);
            titleElement.classList.add("title-move-up");
            logo.classList.add("logo-start-anim")
            animateElementsOut(loadingElements);
        }, 800);
    }, 200);
}

// Fungsi untuk berpindah ke halaman berikutnya
function navigateToNextPage() {
    const totalElements = document.querySelectorAll(CONFIG.elementSelector).length + 1; // +1 untuk title
    setTimeout(() => {
        window.location.href = CONFIG.nextPageUrl;
    }, CONFIG.animationDelay);
}

document.addEventListener("click", handleClick);

// Fungsi utama yang dipanggil saat terjadi klik
function handleClick() {
    const titleElement = document.querySelector(CONFIG.titleSelector);

    if (titleElement) {
        animateTitle(titleElement);
    }
    
    const loadingElements = document.querySelectorAll('.loading-element');
    const logo = document.querySelector('.logo');

    // Contoh: Mulai animasi keluar setelah 5 detik
    // Anda bisa mengganti ini dengan event lain, seperti klik tombol
    
    navigateToNextPage();
}

// Fungsi untuk memulai animasi kelu

function animateElementsIn(es) {
    let elements = Array.from(es)

    elements.sort((a, b) => {
        const rectA = a.getBoundingClientRect();
        const rectB = b.getBoundingClientRect();
        return rectA.top - rectB.top;
    });
    
    elements.forEach((e, i) => {
        setTimeout(() => {
            e.classList.add('fade-in');
        }, i * 100);
    });
}

function animateElementsOut(es) {
    let elements = Array.from(es);

    elements.sort((a, b) => {
        const rectA = a.getBoundingClientRect();
        const rectB = b.getBoundingClientRect();
        return rectA.top - rectB.top;
    });
    
    elements.forEach((e) => {
        e.classList.add('fade-out');
    });

    // Mulai animasi untuk semua elemen secara bersamaan
    requestAnimationFrame(() => {
        elements.forEach((e) => {
            e.style.animationPlayState = 'running';
        });
    });
}

// Panggil fungsi ini setelah DOM selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    const loadingElements = document.querySelectorAll('.loading-element');
    animateElementsIn(loadingElements);

    // Contoh: Mulai animasi keluar setelah 5 detik
    // Anda bisa mengganti ini dengan event lain, seperti klik tombol
});
