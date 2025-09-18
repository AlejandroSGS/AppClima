/**
 * ThemeToggle
 * Botón para alternar entre tema claro y oscuro.
 *
 * @param {Object} props
 * @param {boolean} props.claro - Estado actual del tema (true = claro).
 * @param {() => void} props.onToggle - Handler para alternar el tema.
 */
function ThemeToggle({ claro, onToggle }) {
  return (
    <button className="theme-toggle" onClick={onToggle}>
      {claro ? "🌙 Oscuro" : "☀️ Claro"}
    </button>
  );
}

export default ThemeToggle;


