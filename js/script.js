// 1. Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 2. Reveal Elements on Scroll
const revealElements = () => {
    const sections = document.querySelectorAll('section');
    const triggerBottom = window.innerHeight / 5 * 4;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < triggerBottom) {
            section.classList.add('show');
        } else {
            section.classList.remove('show');
        }
    });
};

window.addEventListener('scroll', revealElements);

// 3. Navigation Background Change on Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(10, 10, 10, 0.95)';
        header.style.borderBottom = '1px solid #333';
    } else {
        header.style.background = 'rgba(10, 10, 10, 0.8)';
        header.style.borderBottom = 'none';
    }
});

// 4. Console Log "Easter Egg" for Tech Portfolios
console.log("%c Interested in Cybersecurity? ", "color: #0070f3; font-size: 20px; font-weight: bold;");
console.log("Welcome to Lehigh's Portfolio!");