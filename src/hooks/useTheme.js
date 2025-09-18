/**
 * useTheme
 * Maneja el estado de tema claro/oscuro con persistencia y sincroniza clases del body.
 *
 * @param {boolean} initialIsLight - Valor inicial del tema (true = claro).
 * @returns {{ isLight: boolean, toggle: () => void }}
 */
import { useEffect } from 'react';
import usePersistentState from './usePersistentState';

function useTheme(initialIsLight = true) {
  const [isLight, setIsLight] = usePersistentState('theme:isLight', initialIsLight);

  useEffect(() => {
    document.body.classList.toggle('tema-Claro', isLight);
    document.body.classList.toggle('tema-Oscuro', !isLight);
  }, [isLight]);

  const toggle = () => setIsLight((v) => !v);

  return { isLight, toggle };
}

export default useTheme;


