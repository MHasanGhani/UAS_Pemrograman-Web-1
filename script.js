// 1. Smooth Scrolling untuk Navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 2. Form Handling (Simulasi Alert)
const contactForm = document.getElementById('contactForm');
if(contactForm){
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Ambil nilai input jika perlu
        const nama = this.querySelector('input[type="text"]').value;
        alert(`Terima kasih, ${nama}! Pesan Anda telah terkirim (Simulasi).`);
        this.reset();
    });
}

// 3. Simple Animation on Scroll (Optional agar lebih mewah)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

// Terapkan animasi ke kartu proyek dan pricing
const hiddenElements = document.querySelectorAll('.project-card, .price-card, .profile-card');
hiddenElements.forEach((el) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.8s ease-out';
    observer.observe(el);
});