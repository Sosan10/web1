$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
            window.location.hash = hash;
            });
        }
    });
});
document.getElementById('menu-toggle').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
});

console.log("Clic en:", target.dataset.target);
console.log("Contenidos activos:", content);