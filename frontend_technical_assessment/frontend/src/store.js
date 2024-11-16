// store.js

import { create } from "zustand";
import {
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  MarkerType,
} from "reactflow";

export const useStore = create((set, get) => ({
  nodes: [],
  edges: [],
  getNodeID: (type) => {
    const newIDs = { ...get().nodeIDs };
    if (newIDs[type] === undefined) {
      newIDs[type] = 0;
    }
    newIDs[type] += 1;
    set({ nodeIDs: newIDs });
    return `${type}-${newIDs[type]}`;
  },
  addNode: (node) => {
    set({
      nodes: [...get().nodes, node],
    });
  },
  onNodesChange: (changes) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  onEdgesChange: (changes) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  onConnect: (connection) => {
    set({
      edges: addEdge(
        {
          ...connection,
          type: "smoothstep",
          animated: true,
          markerEnd: { type: MarkerType.Arrow, height: "20px", width: "20px" },
        },
        get().edges
      ),
    });
  },
  updateNodeField: (nodeId, fieldName, fieldValue) => {
    set({
      nodes: get().nodes.map((node) => {
        if (node.id === nodeId) {
          node.data = { ...node.data, [fieldName]: fieldValue };
        }

        return node;
      }),
    });
  },
  deleteNode: (id) => {
    set((state) => {
      console.group("Node Deletion");
      console.log("Attempting to delete node:", id);
      console.log("Current nodes:", state.nodes);
      console.log("Current edges:", state.edges);

      const nodeToDelete = state.nodes.find((node) => node.id === id);
      console.log("Node to delete:", nodeToDelete);

      const newNodes = state.nodes.filter((node) => node.id !== id);
      console.log("STORE DATA ===> ", state);

      const newEdges = state.edges.filter(
        (edge) => edge.source !== id && edge.target !== id
      );

      console.log("Remaining nodes:", newNodes);
      console.log("Remaining edges:", newEdges);
      console.groupEnd();

      return {
        nodes: newNodes,
        edges: newEdges,
      };
    });
  },
}));
