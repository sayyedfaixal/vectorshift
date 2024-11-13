// ui.js
// Displays the drag-and-drop UI
// --------------------------------------------------

import { useState, useRef, useCallback } from 'react';
import ReactFlow, { Controls, Background, MiniMap } from 'reactflow';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';
import { InputNode } from './nodes/inputNode';
import { LLMNode } from './nodes/llmNode';
import { OutputNode } from './nodes/outputNode';
import { TextNode } from './nodes/textNode';
import {AggregatorNode} from "./NewNodes/aggregatorNode"
import { ImageProcessingNode } from '../src/NewNodes/imageProcessingNode';
import { MathNode } from '../src/NewNodes/mathNode';
import { ConditionalNode } from '../src/NewNodes/conditionalNode';
import { DelayNode } from '../src/NewNodes/delayNode';
// import { useTheme } from './ThemeToggle/ThemeContext';

import 'reactflow/dist/style.css';

const gridSize = 20;
const proOptions = { hideAttribution: true };
const nodeTypes = {
  customInput: InputNode,
  llm: LLMNode,
  customOutput: OutputNode,
  text: TextNode,
  aggregator: AggregatorNode,
  imageProcessing: ImageProcessingNode,
  math: MathNode,
  conditional: ConditionalNode,
  delay: DelayNode,
};

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  getNodeID: state.getNodeID,
  addNode: state.addNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

export const PipelineUI = () => {
    // const { isDark } = useTheme();
    const reactFlowWrapper = useRef(null);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);
    const {
      nodes,
      edges,
      getNodeID,
      addNode,
      onNodesChange,
      onEdgesChange,
      onConnect
    } = useStore(selector, shallow);

    const getInitNodeData = (nodeID, type) => {
      let nodeData = { id: nodeID, nodeType: `${type}` };
      return nodeData;
    }

    const onDrop = useCallback(
        (event) => {
          event.preventDefault();
    
          const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
          if (event?.dataTransfer?.getData('application/reactflow')) {
            const appData = JSON.parse(event.dataTransfer.getData('application/reactflow'));
            const type = appData?.nodeType;
      
            // check if the dropped element is valid
            if (typeof type === 'undefined' || !type) {
              return;
            }
      
            const position = reactFlowInstance.project({
              x: event.clientX - reactFlowBounds.left,
              y: event.clientY - reactFlowBounds.top,
            });

            const nodeID = getNodeID(type);
            const newNode = {
              id: nodeID,
              type,
              position,
              data: getInitNodeData(nodeID, type),
            };
      
            addNode(newNode);
          }
        },
        [reactFlowInstance]
    );

    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    // Define theme-based styles
    const flowStyles = {
        background: '#f8f8f8',  // Using light theme color as default
    };

    const controlsStyles = {
        button: {
            backgroundColor: '#333',
            color: '#fff',
            border: '1px solid #444',
        }
    };

    const minimapStyles = {
        backgroundColor: '#ccc',
        maskColor: 'rgba(0, 0, 0, 0.4)',
        borderColor: '#444',
    };

    return (
        <>
        <div ref={reactFlowWrapper} style={{width: '100wv', height: '70vh'}}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onDrop={onDrop}
                onDragOver={onDragOver}
                onInit={setReactFlowInstance}
                nodeTypes={nodeTypes}
                proOptions={proOptions}
                snapGrid={[gridSize, gridSize]}
                style={flowStyles}
                connectionLineType='smoothstep'
                defaultEdgeOptions={{
                  style: {
                      stroke: '#666',
                      strokeWidth: 2,
                  }
              }}
            >
                <Background 
        color="#333"
        gap={gridSize}
        size={1}
    />
    <Controls style={controlsStyles} />
    <MiniMap 
        style={minimapStyles}
        nodeColor="#666"
    />
            </ReactFlow>
        </div>
        </>
    )
}
