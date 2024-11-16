import { useState } from "react";
import { BaseNode } from "../Abstract/BaseNode";
import { NodeField } from "../Abstract/NodeField";

export const ImageProcessingNode = ({ id }) => {
  const [resolution, setResolution] = useState("medium");
  const [filter, setFilter] = useState("none");

  const nodeStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    border: "1px solid white",
    borderRadius: "4px",
    padding: "2px",
    marginLeft: "2px",
    color: "#ccc",
    resize: "none",
    fontFamily: "monospace",
    fontSize: "12px",
  };

  return (
    <BaseNode
      id={id}
      title="Image Processing"
      inputs={[{ id: `${id}-image` }]}
      outputs={[{ id: `${id}-processed` }]}
    >
      <NodeField label="Resolution">
        <select
          value={resolution}
          onChange={(e) => setResolution(e.target.value)}
          style={nodeStyle}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </NodeField>
      <NodeField label="Filter">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={nodeStyle}
        >
          <option value="none">None</option>
          <option value="blur">Blur</option>
          <option value="sharpen">Sharpen</option>
        </select>
      </NodeField>
    </BaseNode>
  );
};
