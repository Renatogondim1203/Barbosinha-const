

const slides = document.querySelectorAll('.carrossel .slide_um, .carrossel .slide_dois, .carrossel .slide_tres');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

let currentSlide = 0;

function showSlide(index) {
    const totalSlides = slides.length;
    currentSlide = (index + totalSlides) % totalSlides; // Mantém o índice entre 0 e totalSlides - 1
    
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${currentSlide * 100}%)`;
    });
}

// Eventos para navegação
btnNext.addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

btnPrev.addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

// Exibe o primeiro slide com um pequeno delay
setTimeout(() => showSlide(currentSlide), 100);




// Selecionando o ícone do menu hamburguer e o menu de navegação
const menuHamburguer = document.getElementById('menu-hamburguer');
const menu = document.getElementById('menu');

// Função para alternar o menu ao clicar no ícone
menuHamburguer.addEventListener('click', function() {
    menu.classList.toggle('ativo'); // Adiciona ou remove a classe "ativo"
});
