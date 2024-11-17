import { Handle, Position } from "reactflow";
import { useStore } from "../../store";
import { shallow } from "zustand/shallow";

export const BaseNode = ({
  title,
  width = 200,
  height = 80,
  children,
  inputs = [],
  outputs = [],
  id,
}) => {
  const deleteNode = useStore((state) => state.deleteNode, shallow);

  const handleDelete = (event) => {
    event.preventDefault();
    event.stopPropagation();
    // console.log(`Deleting node with ID:`, id);

    deleteNode(id);
  };

  return (
    <div
      style={{
        width,
        height,
        background: "linear-gradient(45deg, #4a1a6c, #8030b0)",
        borderRadius: "8px",
        padding: "12px",
        color: "white",
        fontFamily: "Arial, sans-serif",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        border: "none",
        position: "relative",
      }}
    >
      <button
        onClick={handleDelete}
        style={{
          position: "absolute",
          top: "-10px",
          right: "-10px",
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          background: "#ff4444",
          color: "white",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "12px",
          padding: 0,
          zIndex: 10,
        }}
      >
        x
      </button>

      {inputs.map((input) => (
        <Handle
          key={input.id}
          type="target"
          position={Position.Left}
          id={input.id}
          style={{
            width: "12px",
            height: "12px",
            background: "linear-gradient(45deg, #8030b0, #4a1a6c)",
            border: "none",
            opacity: 0.6,
            transition: "all 0.3s ease",
          }}
        />
      ))}

      <div
        style={{
          marginBottom: "8px",
          fontSize: "20px",
          fontWeight: "500",
        }}
      >
        {title}
      </div>

      {children}

      {outputs.map((output) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={output.id}
          style={{
            width: "12px",
            height: "12px",
            background: "linear-gradient(45deg, #8030b0, #4a1a6c)",
            border: "none",
            opacity: 0.6,
            transition: "all 0.3s ease",
          }}
        />
      ))}
    </div>
  );
};
