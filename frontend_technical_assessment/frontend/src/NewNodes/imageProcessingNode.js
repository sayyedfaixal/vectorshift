import { useState } from 'react';
import { BaseNode } from '../Abstract/BaseNode';
import { NodeField } from '../Abstract/NodeField';


export const ImageProcessingNode = ({ id }) => {
  const [resolution, setResolution] = useState('medium');
  const [filter, setFilter] = useState('none');

  return (
    <BaseNode 
      title="Image Processing"
      inputs={[{ id: `${id}-image` }]}
      outputs={[{ id: `${id}-processed` }]}
    >
      <NodeField label="Resolution">
        <select value={resolution} onChange={(e) => setResolution(e.target.value)}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </NodeField>
      <NodeField label="Filter">
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="none">None</option>
          <option value="blur">Blur</option>
          <option value="sharpen">Sharpen</option>
        </select>
      </NodeField>
    </BaseNode>
  );
};