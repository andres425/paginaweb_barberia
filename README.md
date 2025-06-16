# 💈 Proyecto: Página Web para Barbería

Este proyecto consiste en el desarrollo de una página web interactiva para una barbería, que permite a los usuarios reservar citas en línea de forma fácil y rápida. Incluye una interfaz moderna, animaciones, validaciones y funcionalidad completa en el navegador y servidor.

## 🌐 Características principales

* *Página de inicio atractiva* con imagen de fondo inspiradora y temática masculina.
* *Sección de servicios* con opciones de cortes: cabello, barba y rostro.
* *Formulario de reserva interactivo* con validaciones en tiempo real.
* *Selección dinámica* de barberos y tipo de corte a través de listas generadas por JavaScript.
* *Validaciones en tiempo real*: nombre sin caracteres especiales, teléfono válido colombiano (empieza con 3, 10 dígitos), fecha y hora futuras.
* *Restricción de fechas*: no se pueden seleccionar fechas pasadas ni horas previas al momento actual.
* *Servidor Node.js con Express* para guardar reservas de forma local en un archivo JSON.

---

## 🎨 Diseño y estilos visuales

### 🎨 Paleta de Colores

Los colores se definieron en el archivo CSS con variables globales, facilitando su reutilización y consistencia visual:

css
:root {
  --color-principal: #d89925;        /* Dorado fuerte */
  --color-secundario: #222;          /* Gris oscuro */
  --color-fondo: #eee8e8;            /* Fondo claro */
  --color-claro: #f5f5f5;            /* Gris muy claro */
  --color-hover: #ffffff;            /* Blanco */
  --color-oscuro: #2c2c2c;           /* Casi negro */
  --color-texto: #333;               /* Texto principal */
  --color-texto-secundario: #666;    /* Texto más tenue */
  --color-formulario: #d0cccc;       /* Fondo del formulario */
}


### 📐 Tipografía y Estética

* *Fuente principal:* 'Poppins', sans-serif para un diseño moderno y limpio.
* *Sombras suaves:* Aplicadas con box-shadow en encabezados, tarjetas de servicio y formularios.
* *Transiciones suaves:* En botones, enlaces y elementos interactivos (transition).
* *Bordes redondeados:* Aplicados a botones, campos de formulario y tarjetas para un estilo amigable y moderno.
* *Diseño responsive:* Adaptación automática a dispositivos móviles y pantallas pequeñas mediante media queries.

### 🧱 Estructura Visual Destacada

* *Encabezado fijo* con logotipo centrado y navegación a los lados.
* *Sección principal* con imagen de fondo que ocupa todo el alto (100vh) y texto centrado.
* *Tarjetas de servicios* en rejilla responsiva (grid) con imágenes, animación al pasar el cursor y botón flotante.
* *Formulario de reserva* con fondo diferente, validaciones en tiempo real, foco visual mejorado y diseño adaptable.
* *Pie de página* con enlaces y colores invertidos (fondo oscuro, texto claro).

---

## 📁 Estructura del Proyecto


BARBERIA/
│
├── assets/               # Imágenes del sitio web
│   ├── imagen1.png
│   ├── imagen2.png
│   └── ...
│
├── css/
│   └── styles.css        # Estilos personalizados del sitio
│
├── js/
│   └── script.js         # Lógica frontend: validaciones y envío del formulario
│
├── index.html            # Página principal del sitio web
├── server.js             # Servidor Express para manejar reservas
├── reservas.json         # Archivo donde se almacenan las reservas
├── package.json          # Dependencias y configuración del proyecto
├── package-lock.json     # Versión exacta de dependencias
└── README.md             # Descripción del proyecto


---

## ⚙ Tecnologías utilizadas

* *HTML5 / CSS3*: estructura y estilo moderno.
* *JavaScript Vanilla*: validaciones, generación dinámica de contenido.
* *Node.js + Express*: manejo de solicitudes HTTP y almacenamiento de reservas en un archivo local.

---

## 📄 Cómo ejecutar el proyecto

### 1. Clonar el repositorio

bash
git clone https://github.com/tu-usuario/barberia.git
cd barberia


### 2. Instalar dependencias del servidor

bash
npm install


### 3. Ejecutar servidor

bash
node server.js


El servidor escuchará en http://localhost:3000 y estará listo para recibir reservas vía POST.

### 4. Abrir la página

Abre el archivo index.html directamente en tu navegador para visualizar la interfaz.

---

## 🔒 Validaciones implementadas en el formulario

* *Nombre:* solo permite letras y espacios (sin números ni símbolos).
* *Teléfono:* debe comenzar con 3 y tener exactamente 10 dígitos.
* *Fecha:* debe ser hoy o una posterior.
* *Hora:* si es el mismo día, debe ser una hora futura.
* *Campos obligatorios:* todos los campos son requeridos.

---

## 💡 Posibles mejoras futuras

* Conexión con una base de datos (MongoDB, MySQL).
* Panel de administración para ver y gestionar reservas.
* Envío de notificaciones por correo o WhatsApp.
* Autenticación de usuarios para clientes y barberos.
* Calendario visual para seleccionar fechas y disponibilidad.
* Interfaz para ver las reservas almacenadas desde el frontend.

---