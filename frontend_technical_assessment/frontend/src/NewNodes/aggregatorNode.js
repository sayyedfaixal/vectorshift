import { useState } from 'react';
import { BaseNode } from '../Abstract/BaseNode';
import { NodeField } from '../Abstract/NodeField';

export const AggregatorNode = ({ id }) => {
  const [aggregationType, setAggregationType] = useState('array');
  
  return (
    <BaseNode 
      title="Aggregator"
      inputs={[
        { id: `${id}-input1` },
        { id: `${id}-input2` },
        { id: `${id}-input3` }
      ]}
      outputs={[{ id: `${id}-aggregated` }]}
      height={120}
    >
      <NodeField label="Type">
        <select 
          value={aggregationType} 
          onChange={(e) => setAggregationType(e.target.value)}
        >
          <option value="array">Array</option>
          <option value="object">Object</option>
          <option value="string">String</option>
        </select>
      </NodeField>
    </BaseNode>
  );
};