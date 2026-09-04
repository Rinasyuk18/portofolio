// ==============================
// LOADING SCREEN
// ==============================
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.opacity = "0";
        setTimeout(() => loader.style.display = "none", 500);
    }
});


// ==============================
// NAVBAR ACTIVE ON SCROLL
// ==============================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});


// ==============================
// SPARKLE CURSOR TRAIL
// ==============================
document.addEventListener("mousemove", function(e) {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");

    sparkle.style.left = e.pageX + "px";
    sparkle.style.top = e.pageY + "px";

    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 700);

    
});

const dokumenData = [
    {
        img: "images/slider/beasiswa.png.jpeg",
        judul: "Beasiswa yang diterima",
        tahun: "2024",
        kategori: "Pendidikan",
        deskripsi: "Dokumentasi penerimaan beasiswa dan pencapaian akademik."
    },
    {
        img: "images/slider/organisasi.png",
        judul: "Kegiatan Organisasi",
        tahun: "2023",
        kategori: "Organisasi",
        deskripsi: "Aktivitas kepengurusan dan kegiatan sosial."
    },
    {
        img: "images/slider/sertifikat.png",
        judul: "Sertifikat Keahlian",
        tahun: "2022",
        kategori: "Pelatihan",
        deskripsi: "Portofolio sertifikat hasil pelatihan dan workshop."
    }
];

function gantiDokumen(i) {
    document.getElementById("dokumen-img").src = dokumenData[i].img;
    document.getElementById("dokumen-judul").innerText = dokumenData[i].judul;
    document.getElementById("dokumen-tahun").innerText = dokumenData[i].tahun;
    document.getElementById("dokumen-kategori").innerText = dokumenData[i].kategori;
    document.getElementById("dokumen-deskripsi").innerText = dokumenData[i].deskripsi;
}