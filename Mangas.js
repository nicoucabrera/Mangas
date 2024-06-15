document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.style.borderColor = getRandomColor();
    });
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.getElementById('toggle-dark-mode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        this.textContent = 'Light Mode';
    } else {
        this.textContent = 'Dark Mode';
    }
});


document.getElementById('search-button').addEventListener('click', function() {
    performSearch();
});

document.getElementById('search-bar').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
});

function performSearch() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const buttons = document.querySelectorAll('.btn-wrapper');
    let found = false; // Variable para verificar si se encontró una coincidencia

    buttons.forEach(button => {
        const title = button.querySelector('.btn-title').textContent.toLowerCase();
        if (title.includes(query)) {
            button.style.display = 'block';
            found = true; // Se encontró al menos una coincidencia
        } else {
            button.style.display = 'none';
        }
    });

    document.getElementById('clear-button').addEventListener('click', function() {
        // Limpia el campo de búsqueda
        document.getElementById('search-bar').value = '';
    
        // Muestra todos los botones
        let buttons = document.querySelectorAll('.btn-wrapper');
        buttons.forEach(button => {
            button.style.display = 'block';
        });
        document.getElementById('search-message').textContent = '';
    });

    // Mostrar el mensaje si no se encontró ninguna coincidencia
    const messageContainer = document.getElementById('search-message');
    if (!found) {
        messageContainer.textContent = 'No se ha encontrado ningún título con ese nombre, por favor intente de nuevo.';
    } else {
        messageContainer.textContent = '';
    }
    messageContainer.classList.toggle('dark-mode-text', document.body.classList.contains('dark-mode'));
}



