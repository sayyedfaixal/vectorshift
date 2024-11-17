import { useState } from "react";
import { BaseNode } from "../Abstract/BaseNode";
import { NodeField } from "../Abstract/NodeField";

export const DelayNode = ({ id }) => {
  const [delay, setDelay] = useState(1000);

  return (
    <BaseNode
      id={id}
      title="Delay"
      inputs={[{ id: `${id}-input` }]}
      outputs={[{ id: `${id}-output` }]}
      height={60}
    >
      <NodeField label="Delay (ms)">
        <input
          type="number"
          value={delay}
          onChange={(e) => setDelay(parseInt(e.target.value))}
          min="0"
          style={{
            width: "100px",
            marginLeft: "4px",
          }}
        />
      </NodeField>
    </BaseNode>
  );
};
