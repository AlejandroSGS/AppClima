Una simple App de Climas utilizando React+JS, posteriormente se ira mejorando.

## Arquitectura

- Componentes (`src/components`)
  - `ThemeToggle.jsx`: Alterna tema claro/oscuro.
  - `SearchBar.jsx`: Input controlado y botón de búsqueda.
  - `Status.jsx`: Mensajes de carga y error.
  - `WeatherInfo.jsx`: Muestra datos del clima y botón de limpiar.

- Hooks (`src/hooks`)
  - `usePersistentState.js`: Estado persistente con localStorage.
  - `useTheme.js`: Manejo de tema + sincronización de clases en `body`.
  - `useWeather.js`: Orquesta geocoding y petición a meteoblue; expone `loading`, `error`, `data` y `getWeatherForCity`.

- Servicios (`src/services`)
  - `geocoding.js`: `geocodeCity(city)` vía Nominatim (OpenStreetMap).
  - `weather.js`: `fetchWeather(apiKey, lat, lon)` vía meteoblue.

- Estilos
  - `src/App.css`: Layout del contenedor, botones e inputs, responsive básico con `clamp()`.
  - `src/main.css`: Estilos globales de tema aplicados al `body` y botón flotante.

## Variables de Entorno

Crear `AppClima/.env` (no se sube a Git) con:

```
VITE_METEOBLUE_API_KEY=TU_API_KEY_AQUI
```

Ejemplo compartible: `AppClima/.env` con la clave vacía.

## Scripts

- Desarrollo: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`
