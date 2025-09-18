/**
 * usePersistentState
 * Estado sincronizado con localStorage.
 *
 * @param {string} key - Clave en localStorage.
 * @param {any} initialValue - Valor inicial si no hay dato persistido.
 * @returns {[any, Function]} value y setValue.
 */
import { useEffect, useState } from 'react';

function usePersistentState(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored !== null ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // ignore
    }
  }, [key, value]);

  return [value, setValue];
}

export default usePersistentState;


