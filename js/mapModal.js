let footer__phone_bootom = document.getElementById('map_btn');
let mapModal = document.getElementById('mapModal');
let close_icon = document.querySelector('.close-icon');
footer__phone_bootom.addEventListener('click', function(e) {
    e.preventDefault(); 
    mapModal.classList.toggle('show');
    document.getElementById("mapModal").style.display = "block";
});
close_icon.addEventListener('click', function(e) {
    e.preventDefault(); 
    mapModal.classList.remove('show');
    document.getElementById("mapModal").style.display = "none";
});
