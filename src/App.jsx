import { useState, useEffect, useRef } from "react";
import './App.css'
import ThemeToggle from './components/ThemeToggle.jsx'
import SearchBar from './components/SearchBar.jsx'
import WeatherInfo from './components/WeatherInfo.jsx'
import Status from './components/Status.jsx'
import useTheme from './hooks/useTheme'
import usePersistentState from './hooks/usePersistentState'
import useWeather from './hooks/useWeather'


function App() {
  const [ciudad, setCiudad] = usePersistentState("ciudad", "");
  const { isLight: claro, toggle: toggleTheme } = useTheme(true);
  const API_KEY = import.meta.env.VITE_METEOBLUE_API_KEY;
  const { loading: cargando, error, data: clima, getWeatherForCity } = useWeather(API_KEY);
  const inputRef = useRef(null);

  useEffect(() => {
    document.body.classList.toggle('tema-Claro', claro);
    document.body.classList.toggle('tema-Oscuro', !claro);
  }, [claro]);

  useEffect(() => {
    if (clima) document.title = `Weather App - ${ciudad}`;
    else if (error) document.title = `Weather App - ${error}`;
    else if (cargando) document.title = `Weather App - Cargando...`;
    else document.title = `Weather App`;
  }, [ciudad, clima, error, cargando]);

  const handleSearch = async () => {
    await getWeatherForCity(ciudad);
  };
      

  return (
    <>
      <ThemeToggle claro={claro} onToggle={toggleTheme} />
      <div className={`Aplicacion ${claro ? "tema-Claro" : "tema-Oscuro"}`}>
      <h1>Weather App</h1>

      <SearchBar
        ciudad={ciudad}
        onChange={(e) => setCiudad(e.target.value)}
        onSearch={handleSearch}
        ref={inputRef}
      />

      <Status cargando={cargando} error={error} />

      <WeatherInfo
        ciudad={ciudad}
        clima={clima}
        onClear={() => { /* reset view */ getWeatherForCity(''); inputRef.current && inputRef.current.focus(); }}
      />
      </div>
    </>
  );
}

export default App;
  