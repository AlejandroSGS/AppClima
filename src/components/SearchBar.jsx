import { forwardRef } from 'react';
/**
 * SearchBar
 * Componente controlado con input de ciudad y botón de búsqueda.
 *
 * @param {Object} props
 * @param {string} props.ciudad - Valor actual del input.
 * @param {(e: React.ChangeEvent<HTMLInputElement>) => void} props.onChange - Handler de cambio.
 * @param {() => void} props.onSearch - Acción para iniciar búsqueda.
 */
const SearchBar = forwardRef(function SearchBar({ ciudad, onChange, onSearch }, ref) {
  return (
    <div className="search-bar">
      <input
        ref={ref}
        type="text"
        value={ciudad}
        onChange={onChange}
        placeholder="Ingresa una ciudad"
      />
      <button onClick={onSearch} id="BUSCAR">Buscar</button>
    </div>
  );
});

export default SearchBar;


