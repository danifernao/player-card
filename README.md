# Tarjetas para compartir UID de videjuegos

Un proyecto personal que elaboré en React para compartir en un solo lugar mis UID (identificación de usuario) de los videojuegos multijugador en línea que juego.

![Captura de pantalla del proyecto](/screenshot.png)

### Instalación

1. Asegúrate de tener instalado Node.js y NPM.
2. Descarga o clona este repositorio e ingresa a él.
3. Abre el terminal en dicha ubicación y ejecuta lo siguiente para instalar las dependencias:

```
npm install
```

### Visualización

Ubícate en la raíz del proyecto, abre el terminal en dicha ubicación y ejecuta lo siguiente para iniciar el entorno de desarrollo y visualizarlo en el explorador web:

```
npm run dev
```

### Edición

- El contenido se edita en el archivo `src/assets/data.json`.
- Los nombres de las imágenes, junto con sus extensiones, hacen referencia a los archivos agregados en `public/images/`.
- Disponibles en dos temas: `light` y `dark` (por defecto).
- Los campos de texto (INPUT) tienen autocopiado.

### Producción

Ubícate en la raíz del proyecto, abre el terminal en dicha ubicación y ejecuta lo siguiente para generar los archivos destinados a un entorno de producción:

```
npm run build
```

Estos se guardarán en una nueva carpeta llamada `dist`.

### Consideraciones

Si el proyecto en producción no se va a servir desde el directorio raíz, reemplaza el valor de la constante `dir`, ubicado en el archivo `src/main.jsx`, por la ruta del proyecto. Tomemos como ejemplo mi caso, en donde el proyecto está dentro de una carpeta llamada `player-card` en mi sito web en Netlify:

```
const dir = "player-card";
```

En caso contrario, puedes dejarlo intacto o, mejor aun, reemplazarlo por una cadena de texto vacía:

```
const dir = "";
```
