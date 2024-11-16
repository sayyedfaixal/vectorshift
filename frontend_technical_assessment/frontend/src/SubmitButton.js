import { useStore } from "./store";

export const SubmitButton = () => {
  const { nodes, edges } = useStore((state) => ({
    nodes: state.nodes,
    edges: state.edges,
  }));

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/pipelines/parse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nodes, edges }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(`====================DATA==========================`, data);

      // Display the alert with the response data
      console.log(`
        Number of Nodes: ${data.num_nodes}
        Number of Edges: ${data.num_edges}
        Is DAG: ${data.is_dag ? "Yes" : "No"}
      `);
    } catch (error) {
      console.error("Error submitting pipeline:", error);
      alert(
        "An error occurred while submitting the pipeline. Please check the console for details."
      );
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button
        type="submit"
        style={{
          background: "linear-gradient(to right, #331B6B, #212D7A, #1565AA)",
          border: "none",
          borderRadius: "20px",
          color: "white",
          padding: "10px 20px",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
          transition: "transform 0.2s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.025)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.95)")}
        onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};
