import { useState } from "react";
import { BaseNode } from "../Abstract/BaseNode";
import { NodeField } from "../Abstract/NodeField";

export const MathNode = ({ id }) => {
  const [operation, setOperation] = useState("add");

  return (
    <BaseNode
      id={id}
      title="Math"
      inputs={[{ id: `${id}-input1` }, { id: `${id}-input2` }]}
      outputs={[{ id: `${id}-result` }]}
    >
      <NodeField label="Operation">
        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            border: "1px solid white",
            borderRadius: "4px",
            padding: "2px",
            marginLeft: "2px",
            color: "#ccc",
            resize: "none",
            fontFamily: "monospace",
            fontSize: "12px",
          }}
        >
          <option style={{ padding: "10px" }} value="add">
            Add
          </option>
          <option style={{ padding: "10px" }} value="subtract">
            Subtract
          </option>
          <option style={{ padding: "10px" }} value="multiply">
            Multiply
          </option>
          <option style={{ padding: "10px" }} value="divide">
            Divide
          </option>
        </select>
      </NodeField>
    </BaseNode>
  );
};
