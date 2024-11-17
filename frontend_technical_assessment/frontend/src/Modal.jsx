const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  modal: {
    background: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    width: "400px",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#442476",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "15px",
  },
};

const Modal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>Pipeline Information</h2>
        <p>
          <strong>Number of Nodes:</strong> {data.num_nodes}
        </p>
        <p>
          <strong>Number of Edges:</strong> {data.num_edges}
        </p>
        <p>
          <strong>Is DAG:</strong> {data.is_dag ? "Yes" : "No"}
        </p>
        <button style={styles.button} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
