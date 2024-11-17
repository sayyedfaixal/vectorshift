import { useState, useRef, useCallback, useEffect } from "react";
import ReactFlow, { Controls, Background, MiniMap } from "reactflow";
import { useStore } from "./store";
import { shallow } from "zustand/shallow";

// import { LLMNode } from "./nodes/llmNode";
import { InputNode } from "./Components/nodes/inputNode";
import { OutputNode } from "./Components/nodes/outputNode";
import { TextNode } from "./Components/nodes/textNode";
import { AggregatorNode } from "./Components/NewNodes/aggregatorNode";
import { ImageProcessingNode } from "./Components/NewNodes/imageProcessingNode";
import { MathNode } from "./Components/NewNodes/mathNode";
import { ConditionalNode } from "./Components/NewNodes/conditionalNode";
import { DelayNode } from "./Components/NewNodes/delayNode";

import "reactflow/dist/style.css";

const gridSize = 20;
const proOptions = { hideAttribution: true };
const nodeTypes = {
  customInput: InputNode,
  // llm: LLMNode,
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
  deleteNode: state.deleteNode,
});

export const PipelineUI = () => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const {
    nodes,
    edges,
    getNodeID,
    addNode,
    onNodesChange,
    onEdgesChange,
    onConnect,
    deleteNode,
  } = useStore(selector, shallow);

  const getInitNodeData = (nodeID, type) => {
    let nodeData = { id: nodeID, nodeType: `${type}` };
    return nodeData;
  };

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      if (event?.dataTransfer?.getData("application/reactflow")) {
        const appData = JSON.parse(
          event.dataTransfer.getData("application/reactflow")
        );
        const type = appData?.nodeType;

        if (typeof type === "undefined" || !type) {
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
    [reactFlowInstance, addNode, getNodeID]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  /*
  useEffect(() => {
    console.log("Nodes updated:", nodes);
  }, [nodes]);
  */
  const flowStyles = {
    background: "#f8f8f8",
  };

  const controlsStyles = {
    button: {
      backgroundColor: "#333",
      color: "#fff",
      border: "1px solid #444",
    },
  };

  const minimapStyles = {
    backgroundColor: "#ccc",
    maskColor: "rgba(0, 0, 0, 0.4)",
    borderColor: "#444",
  };

  return (
    <>
      <div ref={reactFlowWrapper} style={{ width: "100wv", height: "70vh" }}>
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
          connectionLineType="smoothstep"
          defaultEdgeOptions={{
            style: {
              stroke: "#666",
              strokeWidth: 2,
            },
          }}
        >
          <Background color="#333" gap={gridSize} size={1} />
          <Controls style={controlsStyles} />
          <MiniMap style={minimapStyles} nodeColor="#666" />
        </ReactFlow>
      </div>
    </>
  );
};
