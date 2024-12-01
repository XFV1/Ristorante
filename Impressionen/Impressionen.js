const buttons = document.querySelectorAll('.hover-button');

buttons.forEach(button => {
    switch (button.textContent) {
        case 'Impressionen':
            button.addEventListener('click', function() {
                window.location.href = 'Impressionen.html';
            });
            break;
        case 'Startseite':
            button.addEventListener('click', function() {
                window.location.href = '../Startseite/Index.html';
            });
            break;
        case 'Impressum':
            button.addEventListener('click', function() {
                window.location.href = '../Impressum/Impressum.html';
            });
            break;
        case 'Anfahrt':
            button.addEventListener('click', function() {
                window.location.href = '../Anfahrt/Anfahrt.html';
            });
            break;
        case 'Datenschutz':
            button.addEventListener('click', function() {
                window.location.href = '../Datenschutz/Datenschutz.html';
            });
            break;
        case 'Speisekarte':
            button.addEventListener('click', function() {
                window.location.href = '../Speisekarte/Speisekarte.html';
            });
            break;
    }
});





let currentImageIndex = 0;
const images = [
    "../Bilder/Bild1.png",
    "../Bilder/Bild2.png",
    "../Bilder/Bild3.png",
    "../Bilder/Bild4.png",
    "../Bilder/Bild5.png",
    "../Bilder/Bild6.png",
    "../Bilder/Bild7.png",
    "../Bilder/Bild8.png"
];

function openModal(index) {
    currentImageIndex = index;
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImage.src = images[currentImageIndex];
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    const modalImage = document.getElementById("modalImage");
    modalImage.src = images[currentImageIndex];
}