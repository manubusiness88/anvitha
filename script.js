// ── LOADER ──
let count = 0;
const countEl = document.getElementById('loaderCount');
const counter = setInterval(() => {
    count += Math.floor(Math.random() * 8) + 3;
    if (count > 100) count = 100;
    countEl.textContent = count + '%';
    if (count >= 100) clearInterval(counter);
}, 50);

window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 2200);
});

// ── NAV SCROLL ──
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ── MOBILE MENU ──
function openMobile() { document.getElementById('mobileMenu').classList.add('open') }
function closeMobile() { document.getElementById('mobileMenu').classList.remove('open') }
document.getElementById('mobileClose').addEventListener('click', closeMobile);

// ── SMOOTH SCROLL ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// ── REVEAL ON SCROLL ──
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── STATS ANIMATE ──
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = parseInt(entry.target.dataset.delay) || 0;
            setTimeout(() => entry.target.classList.add('visible'), delay);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.stat-item').forEach(el => statsObserver.observe(el));

// ── TESTIMONIALS ──
const testimonials = [
    {
        quote: '"We booked an Innova for our Coorg trip and it was the best decision. The car was spotless, the driver was incredibly polite and knew all the best stops. Anvitha made our weekend absolutely perfect."',
        name: 'Priya Sharma',
        role: 'Bangalore → Coorg Trip',
        avatar: 'traveller1'
    },
    {
        quote: '"Took a Tempo Traveller for our family reunion trip to Mysore — 18 people, zero complaints. Spacious, clean, and the driver handled everything flawlessly. Highly recommend!"',
        name: 'Rajesh Kumar',
        role: 'Family Trip to Mysore',
        avatar: 'traveller2'
    },
    {
        quote: '"I\'ve used Anvitha three times now for corporate client pickups. Always on time, always professional. The Innova Crysta is their gem — clients love it."',
        name: 'Anita Desai',
        role: 'Corporate Travel Partner',
        avatar: 'traveller3'
    },
    {
        quote: '"Our Hampi road trip was magical. The driver suggested stops we hadn\'t even considered — a hidden lake, a local restaurant with amazing food. These guys go above and beyond."',
        name: 'Vikram & Meera',
        role: 'Bangalore → Hampi Road Trip',
        avatar: 'traveller4'
    },
];

let currentTestimonial = 0;
function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    const t = testimonials[currentTestimonial];
    const card = document.getElementById('testimonialCard');
    
    card.style.opacity = '0';
    card.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
        document.getElementById('testimonialQuote').textContent = t.quote;
        document.getElementById('testimonialName').textContent = t.name;
        document.getElementById('testimonialRole').textContent = t.role;
        document.getElementById('testimonialAvatar').src = 'https://picsum.photos/seed/' + t.avatar + '/96/96.jpg';
        
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    }, 300);
}

document.getElementById('testimonialCard').style.transition = 'opacity .4s ease, transform .4s ease';

// ── TOAST ──
setTimeout(() => {
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 5000);
}, 4000);
// ── BACK TO TOP BUTTON ──
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    // Show button when user scrolls down 400px
    if (window.scrollY > 400) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});// ── DEVELOPER POPUP ──
function openDevPopup() {
    document.getElementById('devPopup').classList.add('active');
}

function closeDevPopup() {
    document.getElementById('devPopup').classList.remove('active');
}

// Close popup when clicking outside
window.addEventListener('click', (e) => {
    const popup = document.getElementById('devPopup');

    if (e.target === popup) {
        popup.classList.remove('active');
    }
});