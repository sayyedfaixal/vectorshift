// BaseNode.js
import { Handle, Position } from 'reactflow';

export const BaseNode = ({ id, label, description, handles }) => {
  return (
    <div style={{ width: 200, height: 80, border: '1px solid black', padding: '8px' }}>
      {handles.map((handle, index) => (
        <Handle
          key={index}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`}
          style={handle.style}
        />
      ))}
      <div>
        <span>{label}</span>
      </div>
      <div>
        <span>{description}</span>
      </div>
    </div>
  );
};
