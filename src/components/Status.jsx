/**
 * Status
 * Renderiza mensajes de carga y error.
 *
 * @param {Object} props
 * @param {boolean} props.cargando - Estado de carga.
 * @param {string} props.error - Mensaje de error.
 */
function Status({ cargando, error }) {
  return (
    <>
      {cargando && <p>Cargando...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}

export default Status;


