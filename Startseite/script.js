


// Event-Listener für Scrollen hinzufügen
window.addEventListener('scroll', function() {
    // Berechne, wie weit nach unten gescrollt wurde
    let scrollPosition = window.scrollY;

    // Maximaler Scroll-Wert, bei dem die Bewegung stoppt
    let maxScroll = 850; // Zum Beispiel: Bewegung stoppt nach 500px

    // Liste aller Bilder, die bewegt werden sollen
    let items = [
        'pizza1', 'tomate', 'tomate2', 'gewürz', 'gewürz2', 'blatt', 'blatt2', 'blatt3',
        'pilz', 'pilz2', 'echtgewürz', 'echtgewürz2', 'echtgewürz3'
    ];

    // Schleife über jedes Element und wende eine Transformation an
    items.forEach(function(itemId) {
        let element = document.getElementById(itemId);

        // Falls das Element existiert, wende eine Transformation an
        if (element) {
            // Berechne translateX und translateY basierend auf Scroll-Position
            let offsetX = Math.round(scrollPosition * -1); // Beispiel: -1 für X-Achse
            let offsetY = Math.round(scrollPosition * 1.15);  // Beispiel: 1.15 für Y-Achse

            // Überprüfe, ob die Scroll-Position die maximale Grenze überschreitet
            if (scrollPosition > maxScroll) {
                // Falls die Grenze überschritten wird, setze die Position auf die maxScroll-Position
                offsetX = Math.round(maxScroll * -1);
                offsetY = Math.round(maxScroll * 1.15);
            }

            // Verwende 'vw' und 'vh', damit die Position auch bei verschiedenen Fenstergrößen angepasst wird
            let translateX = (offsetX / window.innerWidth) * 100; // % der Fensterbreite
            let translateY = (offsetY / window.innerHeight) * 100; // % der Fensterhöhe

            // Wende die Transformation mit 'vw' und 'vh' Einheiten an
            element.style.transform = `translateX(${translateX}vw) translateY(${translateY}vh)`;
        }
    });
});

// Event-Listener für Fenstergröße (resize) hinzufügen
window.addEventListener('resize', function() {
    // Wenn die Fenstergröße verändert wird, wird die Position neu berechnet
    // Dies passiert automatisch durch den Scroll-Ereignis-Listener
});





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
                window.location.href = 'Index.html';
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






