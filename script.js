
// Seleção de elementos
const mobileMenu = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.nav-links');

// Menu Mobile Toggle
mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Adicione animação ao ícone se desejar
});

// Mudar estilo do header ao rolar
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = '0.5rem 0';
        header.style.backgroundColor = '#ffffff';
    } else {
        header.style.padding = '1rem 0';
    }
});

// Fechar menu ao clicar em um link (para mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});
