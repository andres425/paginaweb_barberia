document.addEventListener('DOMContentLoaded', () => {
    // Datos dinámicos
    const barberos = ['Juan', 'Pedro', 'Carlos'];
    const tiposCorte = ['cabello', 'barba', 'rostro'];

    const selectBarbero = document.getElementById('barbero');
    const selectTipoCorte = document.getElementById('tipoCorte');
    const fechaInput = document.getElementById('fecha');
    const horaInput = document.getElementById('hora');
    const telefonoInput = document.getElementById('telefono');
    const form = document.querySelector('form');

    const nombreInput = document.getElementById('nombre');

    nombreInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
    });


    // Llenar selects
    barberos.forEach(barbero => {
        const option = document.createElement('option');
        option.value = barbero.toLowerCase();
        option.textContent = barbero;
        selectBarbero.appendChild(option);
    });

    tiposCorte.forEach(tipo => {
        const option = document.createElement('option');
        option.value = tipo.toLowerCase().replace(/\s+/g, '-');
        option.textContent = tipo;
        selectTipoCorte.appendChild(option);
    });

    // Establecer fecha mínima: hoy
    const hoy = new Date();
    const año = hoy.getFullYear();
    const mes = String(hoy.getMonth() + 1).padStart(2, '0');
    const dia = String(hoy.getDate()).padStart(2, '0');
    const fechaMinima = `${año}-${mes}-${dia}`;
    fechaInput.min = fechaMinima;

    // Solo permitir números en el teléfono
    telefonoInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
    });

    // Envío del formulario con fetch
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el envío tradicional

        const valorFecha = fechaInput.value;
        const valorHora = horaInput.value;
        const telefono = telefonoInput.value.trim();

        // Validación del teléfono
        const telefonoValido = /^3\d{9}$/.test(telefono);
        if (!telefonoValido) {
            alert('El número de teléfono debe tener 10 dígitos, comenzar con 3 y contener solo números.');
            telefonoInput.focus();
            return;
        }

        if (!valorFecha) {
            alert('Por favor, selecciona una fecha.');
            fechaInput.focus();
            return;
        }

        if (!valorHora) {
            alert('Por favor, selecciona una hora.');
            horaInput.focus();
            return;
        }

        const [anioSel, mesSel, diaSel] = valorFecha.split('-').map(Number);
        const fechaSeleccionada = new Date(anioSel, mesSel - 1, diaSel);
        const ahora = new Date();
        const fechaHoy = new Date(ahora.getFullYear(), ahora.getMonth(), ahora.getDate());

        if (fechaSeleccionada < fechaHoy) {
            alert('Por favor, selecciona una fecha igual o posterior al día de hoy.');
            fechaInput.focus();
            return;
        }

        if (fechaSeleccionada.getTime() === fechaHoy.getTime()) {
            const [horaSel, minutoSel] = valorHora.split(':').map(Number);
            const horaSeleccionada = new Date();
            horaSeleccionada.setHours(horaSel, minutoSel, 0, 0);

            if (horaSeleccionada <= ahora) {
                alert('Por favor, selecciona una hora futura.');
                horaInput.focus();
                return;
            }
        }

        // Construcción del objeto a enviar
        const reserva = {
            nombre: document.getElementById('nombre').value,
            email: document.getElementById('email').value,
            telefono,
            barbero: selectBarbero.value,
            tipoCorte: selectTipoCorte.value,
            fecha: valorFecha,
            hora: valorHora
        };

        // Envío al servidor
        fetch('/reservar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reserva)
        })
            .then(response => {
                if (response.ok) {
                    alert('¡Reserva realizada con éxito!');
                    form.reset();
                } else {
                    alert('Error al guardar la reserva.');
                }
            })
            .catch(error => {
                console.error('Error en el envío:', error);
                alert('No se pudo conectar con el servidor.');
            });
    });
});
