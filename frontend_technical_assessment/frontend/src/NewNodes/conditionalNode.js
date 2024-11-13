import { useState } from 'react';
import { BaseNode } from '../Abstract/BaseNode';
import { NodeField } from '../Abstract/NodeField';


export const ConditionalNode = ({ id }) => {
  const [condition, setCondition] = useState('equals');
  
  return (
    <BaseNode 
      title="Conditional"
      inputs={[
        { id: `${id}-value1` },
        { id: `${id}-value2` }
      ]}
      outputs={[
        { id: `${id}-true` },
        { id: `${id}-false` }
      ]}
    >
      <NodeField label="Condition">
        <select value={condition} onChange={(e) => setCondition(e.target.value)}>
          <option value="equals">Equals</option>
          <option value="greater">Greater Than</option>
          <option value="less">Less Than</option>
        </select>
      </NodeField>
    </BaseNode>
  );
};