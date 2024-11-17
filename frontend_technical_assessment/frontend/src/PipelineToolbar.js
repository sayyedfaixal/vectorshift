// toolbar.js

import { useState } from "react";
import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  const [isToolbarVisible, setToolbarVisible] = useState(true);

  const toggleToolbar = () => {
    setToolbarVisible((prev) => !prev);
  };

  return (
    <div style={{ padding: "10px" }}>
      <button
        onClick={toggleToolbar}
        style={{
          marginBottom: "10px",
          padding: "8px 12px",
          backgroundColor: "#4a1a6c",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        {isToolbarVisible ? "Hide Toolbar" : "Show Toolbar"}
      </button>

      {isToolbarVisible && (
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <DraggableNode type="customInput" label="Input" />
          {/* <DraggableNode type="llm" label="LLM" /> */}
          <DraggableNode type="customOutput" label="Output" />
          <DraggableNode type="text" label="Text" />
          <DraggableNode type="aggregator" label="Aggregator" />
          <DraggableNode type="conditional" label="Condition" />
          <DraggableNode type="math" label="Math" />
          <DraggableNode type="imageProcessing" label="Image Processing" />
          <DraggableNode type="delay" label="Delay" />
        </div>
      )}
    </div>
  );
};
