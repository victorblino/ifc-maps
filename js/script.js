new window.VLibras.Widget('https://vlibras.gov.br/app');


document.addEventListener("DOMContentLoaded", function() {
    var container = document.querySelector('.container');
    var text = document.querySelector('.text');
    var image = document.querySelector('.image');
    
    if (!text || !image) {
        container.classList.add('single');
    }
});

function toggleMenu() {
    var navbarMenu = document.getElementById('navbarMenu');
    navbarMenu.classList.toggle('active');
}
