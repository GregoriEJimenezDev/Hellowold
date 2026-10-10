# Hellowold — ¡Hola, Mundo!

Página estática moderna en **HTML + CSS + JavaScript vanilla**, desplegada automáticamente en **GitHub Pages** con **GitHub Actions** cada vez que haces un `push` a `main`.

> Sitio en vivo: https://gregoriejimenezdev.github.io/Hellowold/

## Estructura del proyecto

```
hola-mundo/
├── .github/
│   └── workflows/
│       └── deploy.yml      # CI/CD → GitHub Pages
├── css/
│   └── styles.css          # Design tokens, tema claro/oscuro, responsive
├── js/
│   ├── main.js             # Punto de entrada (saludo, año, orquestación)
│   └── theme.js            # Lógica del toggle de tema (Single Responsibility)
├── index.html              # HTML semántico
├── .gitignore
└── README.md
```

**Principios aplicados:** HTML semántico (estructura), CSS con custom properties (presentación), JS modular con ES modules (comportamiento). Sin frameworks, sin dependencias, sin build step (KISS/YAGNI).

## Ejecutar en local

No hay build: abre `index.html` en el navegador, o sirve la carpeta:

```bash
# Opción 1: VS Code con la extensión "Live Server"
# Opción 2: Python
python -m http.server 8080
```

Luego visita http://localhost:8080.

## Despliegue automático (GitHub Pages + Actions)

El workflow [.github/workflows/deploy.yml](.github/workflows/deploy.yml) se dispara con cada `push` a `main` y publica el sitio. No necesita instalación de dependencias: solo sube el artefacto estático y lo despliega.

### 1. Configurar el repositorio (solo la primera vez)

1. Ve a tu repo en GitHub → **Settings** → **Pages**.
2. En **Build and deployment**, elige:
   - **Source:** `GitHub Actions`
3. Guarda. A partir de ahí, cada push a `main` redespliega el sitio.

### 2. Desarrollo diario

```bash
git add .
git commit -m "feat: descripción del cambio"
git push origin main
```

El workflow **Deploy to GitHub Pages** se ejecuta automáticamente. El estado se ve en la pestaña **Actions** del repo.

### 3. Rama principal

El workflow escucha `main` **y** `master` (líneas 4–5 del YAML), así que funciona con el nombre de rama principal que uses.

## URL del sitio

`https://gregoriejimenezdev.github.io/Hellowold/`

## Licencia

MIT — siéntete libre de usarlo.
