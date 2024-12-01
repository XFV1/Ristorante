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
                window.location.href = 'Impressum.html';
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
