
        // Función para obtener la fecha actual en formato YYYY-MM-DD
        function obtenerFechaActual() {
            const ahora = new Date();
            const año = ahora.getFullYear();
            const mes = (ahora.getMonth() + 1).toString().padStart(2, '0');
            const dia = ahora.getDate().toString().padStart(2, '0');
            return `${año}-${mes}-${dia}`;
        }

        // Función para obtener la hora actual en formato HH:mm
        function obtenerHoraActual() {
            const ahora = new Date();
            const horas = ahora.getHours().toString().padStart(2, '0');
            const minutos = ahora.getMinutes().toString().padStart(2, '0');
            return `${horas}:${minutos}`;
        }

        // Función para llenar la factura con los datos
        function llenarFactura() {
            const urlParams = new URLSearchParams(window.location.search);
            const nombreCliente = urlParams.get('nombreCliente');
            const nombreAdministrador = urlParams.get('nombreAdministrador');
            const placaVehiculo = urlParams.get('placaVehiculo');

            document.getElementById('nombreCliente').textContent = nombreCliente;
            document.getElementById('nombreAdministrador').textContent = nombreAdministrador;
            document.getElementById('placaVehiculo').textContent = placaVehiculo;
            document.getElementById('fechaIngreso').textContent = obtenerFechaActual();
            document.getElementById('horaIngreso').textContent = obtenerHoraActual();

            
            const tiempoEstacionamiento = 3;
            const precioHora = 10;
            const total = tiempoEstacionamiento * precioHora;
            document.getElementById('tiempoEstacionamiento').textContent = tiempoEstacionamiento;
            document.getElementById('total').textContent = total;
        }

        // Llama a la función para llenar la factura
        llenarFactura();