// inputNode.js
import { useState } from "react";
import { Handle, Position } from "reactflow";
import { BaseNode } from "../Abstract/BaseNode";

export const InputNode = ({ id, data, setValue }) => {
  const [inputValue, setInputValue] = useState(0);

  const handleInputChange = (e) => {
    const value = parseFloat(e.target.value);
    setInputValue(value);
    if (setValue) setValue(id, value); // Pass value to Math Node
  };

  return (
    <BaseNode id={id} title="Input" width={200} height={100}>
      {/* Output Handle */}
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        style={{
          width: "10px",
          height: "10px",
          background: "linear-gradient(45deg, #8030b0, #4a1a6c)",
          border: "none",
          opacity: 0.6,
        }}
      />

      {/* Input Field */}
      <div style={{ marginTop: "10px" }}>
        <label
          style={{
            fontSize: "15px",
            color: "#a7a7a7",
          }}
        >
          Value:
        </label>
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          style={{
            width: "100%",
            paddingTop: "10px",
            marginTop: "8px",
            marginRight: "8px",
            border: "1px solid white",
            borderRadius: "4px",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            color: "#a7a7a7",
            fontSize: "15px",
            outline: "none",
          }}
        />
      </div>
    </BaseNode>
  );
};
