import { useState, useEffect, useRef } from "react";
import './App.css'


function App() {
  const [ciudad, setCiudad] = useState("");
  const [clima, setClima] = useState(null);
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);
  const [claro, setClaro] = useState(true); // true = claro, false = oscuro
  const inputRef = useRef(null);

  useEffect(() => {
    document.body.classList.toggle('tema-Claro', claro);
    document.body.classList.toggle('tema-Oscuro', !claro);
  }, [claro]);

  useEffect(() => {
    if (clima) {
      document.title = `Weather App - ${ciudad}`;
    }
    if (error) {
      document.title = `Weather App - ${error}`;
    }
    if (cargando) {
      document.title = `Weather App - Cargando...`;
    }
  }, [ciudad, clima, error, cargando]);

  useEffect(() => {
    const ciudadGuardada = localStorage.getItem("ciudad");
    if (ciudadGuardada) {
      setCiudad(ciudadGuardada);
    }
  }, []);

  useEffect(() => {
    if (ciudad) {
      localStorage.setItem("ciudad", ciudad);
    }
  }, [ciudad]);
  
  

  const API_KEY = import.meta.env.VITE_METEOBLUE_API_KEY;

  const handleSearch = async () => {
    if (!API_KEY) {
      setError("Falta la API key (VITE_METEOBLUE_API_KEY)");
      return;
    }
    if (ciudad.trim() === "") {
      setError("Por favor ingresa una ciudad");
      return;
    }

    setCargando(true);
    setError("");
    setClima(null);

    try {
      const geoResponse = await fetch(
        `https://nominatim.openstreetmap.org/search?city=${encodeURIComponent(
          ciudad
        )}&format=json&limit=1`
      );
      const geoData = await geoResponse.json();

      if (!geoData || geoData.length === 0) {
        setError("No se encontró la ciudad ingresada");
        setCargando(false);
        return;
      }

      const lat = geoData[0].lat;
      const lon = geoData[0].lon;

      const url = `https://my.meteoblue.com/packages/basic-1h?apikey=${API_KEY}&lat=${lat}&lon=${lon}&format=json`;
      const climaResponse = await fetch(url);
      const data = await climaResponse.json();

      setClima(data);
    } catch (err) {
      setError("Error al obtener datos del clima");
    } finally {
      setCargando(false);
    }
  };
      

  return (
    <>
      <button className="theme-toggle" onClick={() => setClaro(!claro)}>
        {claro ? "🌙 Oscuro" : "☀️ Claro"}
      </button>
      <div className={`Aplicacion ${claro ? "tema-Claro" : "tema-Oscuro"}`}>
      <h1>Weather App</h1>

      <input
        type="text"
        value={ciudad}
        onChange={(e) => setCiudad(e.target.value)}
        placeholder="Ingresa una ciudad"
        ref={inputRef}
      />
      <button onClick={handleSearch} id="BUSCAR">Buscar</button>

      {cargando && <p>Cargando...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {clima && clima.data_1h && (
        <div>
          <h2>Datos del clima en {ciudad}</h2>
          <p>Hora: {clima.data_1h.time[0]}</p>
          <p>Temperatura: {clima.data_1h.temperature[0]} °C</p>
          <p>Humedad: {clima.data_1h.relativehumidity[0]} %</p>
          <p>Precipitación: {clima.data_1h.precipitation[0]} mm</p>
          <button onClick={() => { 
            setClima(null);
            inputRef.current.focus(); // focus() es un metodo que se usa para poner el cursor en el input sin tener que dar clic
          }} id="LIMPIAR">LIMPIAR INFOMRACION</button>
        </div>
      )}
      </div>
    </>
  );
}

export default App;
  