import { useState } from "react";
import { BaseNode } from "../../Components/Abstract/BaseNode";
import { NodeField } from "../../Components/Abstract/NodeField";

export const ConditionalNode = ({ id }) => {
  const [condition, setCondition] = useState("equals");

  return (
    <BaseNode
      id={id}
      title="Conditional"
      inputs={[{ id: `${id}-value1` }, { id: `${id}-value2` }]}
      outputs={[{ id: `${id}-true` }, { id: `${id}-false` }]}
    >
      <NodeField label="Condition">
        <select
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
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
          <option value="equals">Equals</option>
          <option value="greater">Greater Than</option>
          <option value="less">Less Than</option>
        </select>
      </NodeField>
    </BaseNode>
  );
};
