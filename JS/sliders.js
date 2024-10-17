// slider.js

document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.swiper-container', {
        loop: true, // Permite el desplazamiento continuo del slider
        autoplay: {
            delay: 5000, // Cambia automáticamente los slides cada 5 segundos
        },
        grabCursor: true, // Cambia el cursor a una mano cuando se puede arrastrar el slider
        effect: 'cube', // Efecto de transición
        cubeEffect: {
            slideShadows: true, // Muestra las sombras del slide
            shadow: true, // Muestra una sombra en los bordes del slider
            shadowOffset: 20, // Ajusta el tamaño de la sombra
            shadowScale: 0.94, // Ajusta la intensidad de la sombra
        },
    });
});
