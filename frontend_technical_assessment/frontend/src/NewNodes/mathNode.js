import { useState } from 'react';
import { BaseNode } from '../Abstract/BaseNode';
import { NodeField } from '../Abstract/NodeField';

export const MathNode = ({ id }) => {
  const [operation, setOperation] = useState('add');

  return (
    <BaseNode 
      title="Math"
      inputs={[
        { id: `${id}-input1` },
        { id: `${id}-input2` }
      ]}
      outputs={[{ id: `${id}-result` }]}
    >
      <NodeField label="Operation">
        <select value={operation} onChange={(e) => setOperation(e.target.value)}>
          <option value="add">Add</option>
          <option value="subtract">Subtract</option>
          <option value="multiply">Multiply</option>
          <option value="divide">Divide</option>
        </select>
      </NodeField>
    </BaseNode>
  );
};