// outputNode.js

import { useState } from "react";
import { BaseNode } from "../Abstract/BaseNode";
import { Handle, Position } from "reactflow";

export const OutputNode = ({ id, data }) => {
  const [outputName, setOutputName] = useState(
    data?.outputName || `output_${id.replace("customOutput-", "")}`
  );
  const [outputType, setOutputType] = useState(data?.outputType || "Text");

  // Handles changes to output name
  const handleOutputNameChange = (e) => {
    setOutputName(e.target.value);
  };

  // Handles changes to output type
  const handleOutputTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <BaseNode id={id} title="Output" width={200} height={120} outputs={[]}>
      {/* Target handle for connecting inputs */}
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-value`}
        style={{
          top: "50%",
          width: "10px",
          height: "10px",
          background: "linear-gradient(45deg, #8030b0, #4a1a6c)",
          border: "none",
          opacity: 0.6,
        }}
      />

      {/* Output name input */}
      <label
        style={{
          display: "block",
          fontSize: "12px",
          color: "#a7a7a7",
          marginBottom: "4px",
        }}
      >
        Name:
        <input
          type="text"
          value={outputName}
          onChange={handleOutputNameChange}
          style={{
            width: "calc(100% - 10px)",
            border: "1px solid white",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            borderRadius: "4px",
            padding: "4px",
            color: "#a7a7a7",
            fontSize: "12px",
            outline: "none",
            marginTop: "4px",
          }}
        />
      </label>

      {/* Output type dropdown */}
      <label
        style={{
          display: "block",
          fontSize: "12px",
          color: "#a7a7a7",
        }}
      >
        Type:
        <select
          value={outputType}
          onChange={handleOutputTypeChange}
          style={{
            width: "calc(100% - 10px)",
            border: "1px solid white",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            borderRadius: "4px",
            padding: "4px",
            color: "#a7a7a7",
            fontSize: "12px",
            outline: "none",
            marginTop: "4px",
          }}
        >
          <option value="Text">Text</option>
          <option value="File">Image</option>
        </select>
      </label>
    </BaseNode>
  );
};
