/**
 * WeatherInfo
 * Muestra los datos del clima y un botón para limpiar la información.
 *
 * @param {Object} props
 * @param {string} props.ciudad - Nombre de la ciudad.
 * @param {any} props.clima - Respuesta del API meteoblue (espera data_1h).
 * @param {() => void} props.onClear - Acción al limpiar.
 */
function WeatherInfo({ ciudad, clima, onClear }) {
  if (!clima || !clima.data_1h) return null;
  return (
    <div>
      <h2>Datos del clima en {ciudad}</h2>
      <p>Hora: {clima.data_1h.time[0]}</p>
      <p>Temperatura: {clima.data_1h.temperature[0]} °C</p>
      <p>Humedad: {clima.data_1h.relativehumidity[0]} %</p>
      <p>Precipitación: {clima.data_1h.precipitation[0]} mm</p>
      <button onClick={onClear} id="LIMPIAR">LIMPIAR INFOMRACION</button>
    </div>
  );
}

export default WeatherInfo;


