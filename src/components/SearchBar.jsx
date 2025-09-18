/**
 * SearchBar
 * Componente controlado con input de ciudad y botón de búsqueda.
 *
 * @param {Object} props
 * @param {string} props.ciudad - Valor actual del input.
 * @param {(e: React.ChangeEvent<HTMLInputElement>) => void} props.onChange - Handler de cambio.
 * @param {() => void} props.onSearch - Acción para iniciar búsqueda.
 */
function SearchBar({ ciudad, onChange, onSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={ciudad}
        onChange={onChange}
        placeholder="Ingresa una ciudad"
      />
      <button onClick={onSearch} id="BUSCAR">Buscar</button>
    </div>
  );
}

export default SearchBar;


