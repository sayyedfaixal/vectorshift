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
          <option style={{padding:'10px'}} value="add">Add</option>
          <option style={{padding:'10px'}} value="subtract">Subtract</option>
          <option style={{padding:'10px'}} value="multiply">Multiply</option>
          <option style={{padding:'10px'}} value="divide">Divide</option>
        </select>
      </NodeField>
    </BaseNode>
  );
};