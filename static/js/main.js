(function() {

// open/close mobile menu

var btn = document.getElementById('open-menu');
var menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('active')
})

})();