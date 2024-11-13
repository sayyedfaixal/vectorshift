// textNode.js

import { useState, useEffect } from 'react';
import { BaseNode } from '../Abstract/BaseNode';
import { Handle, Position } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || '');
  const [variables, setVariables] = useState([]);
  const [nodeWidth, setNodeWidth] = useState(200);
  const [nodeHeight, setNodeHeight] = useState(100);

  // Function to extract variables from text
  const extractVariables = (inputText) => {
    const regex = /{{([^}]+)}}/g;
    const matches = [...inputText.matchAll(regex)];
    return matches.map(match => match[1].trim());
  };

  // Update variables and node size when text changes
  useEffect(() => {
    // Extract variables
    const newVars = extractVariables(text);
    setVariables(newVars);

    // Adjust width based on content but keep it more compact
    const lines = text.split('\n');
    const maxLineLength = Math.max(...lines.map(line => line.length));
    const calculatedWidth = Math.max(200, Math.min(maxLineLength * 7 + 40, 400));
    
    setNodeWidth(calculatedWidth);
    // Height remains fixed for this compact design
  }, [text]);

  return (
    <BaseNode
      title="Text"
      id={id}
      width={nodeWidth}
      height={nodeHeight}
      outputs={[{ id: 'output' }]}
    >
      {/* Variable handles */}
      {variables.map((variable, index) => (
        <Handle
          key={variable}
          type="target"
          position={Position.Left}
          id={variable}
          style={{
            top: `${(index + 1) * (100 / (variables.length + 1))}%`,
            width: '10px',
            height: '10px',
            background: 'linear-gradient(45deg, #8030b0, #4a1a6c)',
            border: 'none',
            opacity: 0.6,
          }}
        />
      ))}

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          width: 'calc(100% - 16px)', // Account for padding
          height: '60px', // Fixed height for textarea
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          border: 'none',
          borderRadius: '4px',
          padding: '8px',
          color: '#a7a7a7', // Lighter gray color for text
          resize: 'none',
          fontFamily: 'monospace',
          fontSize: '12px',
          marginTop: '4px',
          outline: 'none',
          overflowY: 'auto',
          '&::-webkit-scrollbar': {
            width: '6px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'rgba(255, 255, 255, 0.05)',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '3px',
          }
        }}
        placeholder="Enter text here. Use {{variable}} to create input handles."
      />
    </BaseNode>
  );
};
