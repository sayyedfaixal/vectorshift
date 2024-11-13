import { useState, useCallback } from 'react';
import ReactFlow, { 
  Background, 
  Controls, 
  addEdge, 
  applyEdgeChanges, 
  applyNodeChanges 
} from 'reactflow';
import 'reactflow/dist/style.css';

// Import all the nodes
import { ImageProcessingNode } from '../src/NewNodes/imageProcessingNode';
import { MathNode } from '../src/NewNodes/mathNode';
import { ConditionalNode } from '../src/NewNodes/conditionalNode';
import { DelayNode } from '../src/NewNodes/delayNode';
import { AggregatorNode } from '../src/NewNodes/aggregatorNode';

// Node type registration
const nodeTypes = {
  imageProcessing: ImageProcessingNode,
  math: MathNode,
  conditional: ConditionalNode,
  delay: DelayNode,
  aggregator: AggregatorNode,
};

// Initial nodes setup
const initialNodes = [
  {
    id: '1',
    type: 'imageProcessing',
    position: { x: 100, y: 50 },
    data: {},
  },
  {
    id: '2',
    type: 'math',
    position: { x: 100, y: 200 },
    data: {},
  },
  {
    id: '3',
    type: 'conditional',
    position: { x: 400, y: 50 },
    data: {},
  },
  {
    id: '4',
    type: 'delay',
    position: { x: 400, y: 200 },
    data: {},
  },
  {
    id: '5',
    type: 'aggregator',
    position: { x: 700, y: 125 },
    data: {},
  },
];

export const NodeTestPage = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState([]);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};