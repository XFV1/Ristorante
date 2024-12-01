const buttons = document.querySelectorAll('.hover-button');

buttons.forEach(button => {
    switch (button.textContent) {
        case 'Impressionen':
            button.addEventListener('click', function() {
                window.location.href = '../Impressionen/Impressionen.html';
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
                window.location.href = 'Speisekarte.html';
            });
            break;
    }
});



let currentSlide = 0; // Index des aktuellen Bildes in der Slideshow
const images = [
    "../Bilder/Speisekarte1.png",
    "../Bilder/Speisekarte2.png",
    "../Bilder/Speisekarte3.png",
    "../Bilder/Speisekarte4.png",
    "../Bilder/Speisekarte5.png",
    "../Bilder/Speisekarte6.png",
    "../Bilder/Speisekarte7.png",
    "../Bilder/Speisekarte8.png",
    "../Bilder/Speisekarte9.png",
    "../Bilder/Speisekarte10.png"
];

// Funktion, um das Slideshow Modal zu öffnen und das Bild zu setzen
function openSlideShow(index) {
    currentSlide = index;
    const modal = document.getElementById("slideshowModal");
    const modalImage = document.getElementById("modal-image");
    modal.style.display = "block"; // Zeige das Modal an
    modalImage.src = images[currentSlide]; // Setze das Bild in die Slideshow
}

// Funktion zum Schließen des Modals
function closeSlideShow() {
    const modal = document.getElementById("slideshowModal");
    modal.style.display = "none"; // Verstecke das Modal
}

// Funktion zum Wechseln der Bilder (Vorwärts / Rückwärts)
function changeSlide(direction) {
    currentSlide += direction;

    // Wenn der Index über die Grenzen hinausgeht, zurücksetzen
    if (currentSlide >= images.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = images.length - 1;
    }

    const modalImage = document.getElementById("modal-image");
    modalImage.src = images[currentSlide]; // Setze das Bild in die Slideshow
}



// Öffnen des Modal-Bildes
function openSlideShow(index) {
    // Zeige das Modal an
    document.getElementById("slideshowModal").style.display = "block";
    
    // Setze das Modal-Bild
    document.getElementById("modal-image").src = document.querySelectorAll('.menu-image')[index].src;

    // Füge die Klasse 'modal-open' hinzu, um den z-index der Solid-Line und der Hover-Buttons zu verändern
    document.body.classList.add('modal-open');
}

// Schließen des Modal-Bildes
function closeSlideShow() {
    // Verstecke das Modal
    document.getElementById("slideshowModal").style.display = "none";

    // Entferne die Klasse 'modal-open' vom Body
    document.body.classList.remove('modal-open');
}