/**
 * fetchWeather
 * Llama al endpoint de meteoblue para obtener datos básicos 1h.
 * @param {string} apiKey
 * @param {string|number} lat
 * @param {string|number} lon
 * @returns {Promise<any>}
 */
export async function fetchWeather(apiKey, lat, lon) {
  const url = `https://my.meteoblue.com/packages/basic-1h?apikey=${apiKey}&lat=${lat}&lon=${lon}&format=json`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Weather request failed');
  return res.json();
}


