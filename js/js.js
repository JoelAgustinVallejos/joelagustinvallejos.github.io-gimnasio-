let texto = document.getElementById('texto');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    texto.style.marginTop = value * 2.5 + 'px';
})