/**
 * geocodeCity
 * Obtiene lat/lon para una ciudad usando Nominatim (OpenStreetMap).
 * @param {string} city
 * @returns {Promise<{lat: string, lon: string}>}
 */
export async function geocodeCity(city) {
  const url = `https://nominatim.openstreetmap.org/search?city=${encodeURIComponent(city)}&format=json&limit=1`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Geo request failed');
  const data = await res.json();
  if (!data || data.length === 0) throw new Error('No se encontró la ciudad ingresada');
  return { lat: data[0].lat, lon: data[0].lon };
}


