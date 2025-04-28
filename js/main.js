function cambiarIdioma(idioma) {
    const elementos = document.querySelectorAll('[data-es]');
    elementos.forEach(el => {
        el.innerHTML = el.dataset[idioma];
    });
}
