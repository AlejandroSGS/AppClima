/**
 * useWeather
 * Hook para obtener clima a partir de una ciudad: geocoding + petición a meteoblue.
 * Maneja loading/error/data y expone un método para disparar la búsqueda.
 *
 * @param {string} apiKey - Clave de API (VITE_METEOBLUE_API_KEY).
 * @returns {{loading: boolean, error: string, data: any, getWeatherForCity: (city: string) => Promise<void>}}
 */
import { useState } from 'react';
import { geocodeCity } from '../services/geocoding';
import { fetchWeather } from '../services/weather';

function useWeather(apiKey) {
  const [state, setState] = useState({ loading: false, error: '', data: null });

  const getWeatherForCity = async (city) => {
    if (!apiKey) {
      setState({ loading: false, error: 'Falta la API key (VITE_METEOBLUE_API_KEY)', data: null });
      return;
    }
    if (!city || city.trim() === '') {
      setState({ loading: false, error: 'Por favor ingresa una ciudad', data: null });
      return;
    }
    setState({ loading: true, error: '', data: null });
    try {
      const { lat, lon } = await geocodeCity(city);
      const data = await fetchWeather(apiKey, lat, lon);
      setState({ loading: false, error: '', data });
    } catch (err) {
      const message = err?.message || 'Error al obtener datos del clima';
      setState({ loading: false, error: message, data: null });
    }
  };

  return { ...state, getWeatherForCity };
}

export default useWeather;


