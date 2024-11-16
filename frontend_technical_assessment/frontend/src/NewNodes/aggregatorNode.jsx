import { useState } from "react";
import { BaseNode } from "../Abstract/BaseNode";
import { NodeField } from "../Abstract/NodeField";

export const AggregatorNode = ({ id }) => {
  const [aggregationType, setAggregationType] = useState("array");

  return (
    <BaseNode
      id={id}
      title="Aggregator"
      inputs={[
        { id: `${id}-input1` },
        { id: `${id}-input2` },
        { id: `${id}-input3` },
      ]}
      outputs={[{ id: `${id}-aggregated` }]}
      height={120}
    >
      <NodeField label="Type">
        <select
          value={aggregationType}
          onChange={(e) => setAggregationType(e.target.value)}
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
          <option value="array">Array</option>
          <option value="object">Object</option>
          <option value="string">String</option>
        </select>
      </NodeField>
    </BaseNode>
  );
};
