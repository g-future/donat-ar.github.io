// Fungsi untuk menampilkan teks secara bertahap
function animatedText(element, text, speed) {
    let i = 0;
    element.innerHTML = "";
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

// Menampilkan teks animasi untuk judul
const titleElement = document.getElementById("title");
const titleText = "Kursus Stir di LPK Arum Kota Tegal";
animatedText(titleElement, titleText, 100);

// Menambahkan efek hover untuk tombol
const button = document.querySelector(".button");
button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "#45a049";
});
button.addEventListener("mouseout", () => {
    button.style.backgroundColor = "#4CAF50";
});

// Efek scroll untuk elemen ketika terlihat di layar
const infoBox = document.querySelector(".info-box");
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.5 });

observer.observe(infoBox);

// Fungsi untuk memberikan efek pop-up setelah 5 detik
function showAlert() {
    setTimeout(() => {
        alert("🚗 **Dapatkan Penawaran Khusus!** Daftar sekarang untuk diskon spesial!");
    }, 5000);
}

// Menjalankan alert setelah halaman dimuat
window.onload = showAlert;
