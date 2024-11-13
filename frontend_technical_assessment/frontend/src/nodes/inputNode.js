// inputNode.js
import { BaseNode } from '../Abstract/BaseNode';
import { Position } from 'reactflow';

export const InputNode = ({ id }) => {
  const handles = [
    { type: 'source', position: Position.Right, id: 'output' }
  ];

  return (
    <BaseNode 
      id={id}
      label="Input"
      description="This is an input node."
      handles={handles}
    />
  );
};
