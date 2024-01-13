//Conectarse a la API Advice Slip API
const options = {
    method: 'GET',
    url : 'https://api.adviceslip.com/advice'
};


// Función para obtener y mostrar un consejo
function obtenerYMostrarConsejo() {
    fetch(options.url, options)
        .then(response => response.json())
        .then(data => {
            const adviceId = data.slip.id;
            const spanIdAdvice = document.querySelector('.advice-id');
            spanIdAdvice.innerHTML = adviceId;
            const spanText = document.getElementById('text');
            spanText.innerHTML = data.slip.advice;
        })
        .catch(error => console.log(error));
}

// Llamar a la función al cargar la página
document.addEventListener('DOMContentLoaded', obtenerYMostrarConsejo);

// Ahora cuando se le da click al botón, se llama a la función para obtener y mostrar un nuevo consejo
const adviceButton = document.getElementById('change-advice');
adviceButton.addEventListener('click', obtenerYMostrarConsejo);
