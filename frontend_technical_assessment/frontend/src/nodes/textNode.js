// TextNode.js

import { useState, useEffect, useRef } from "react";
import { BaseNode } from "../Abstract/BaseNode";
import { Handle, Position } from "reactflow";

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || "");
  const [variables, setVariables] = useState([]);
  const [nodeWidth, setNodeWidth] = useState(200);
  const [nodeHeight, setNodeHeight] = useState(100);
  const textAreaRef = useRef(null);

  // Function to extract variables from text
  const extractVariables = (inputText) => {
    const regex = /{{([^}]+)}}/g;
    const matches = [...inputText.matchAll(regex)];
    return matches.map((match) => match[1].trim());
  };

  // Adjust variables and node size when text changes
  useEffect(() => {
    const newVars = extractVariables(text);
    setVariables(newVars);

    // Dynamically adjust width and height based on text content
    const lines = text.split("\n");
    const maxLineLength = Math.max(...lines.map((line) => line.length));
    const calculatedWidth = Math.max(
      200,
      Math.min(maxLineLength * 7 + 40, 400)
    );
    const calculatedHeight = Math.min(
      Math.max(100, lines.length * 20 + 60),
      300
    );

    setNodeWidth(calculatedWidth);
    setNodeHeight(calculatedHeight);
  }, [text]);

  return (
    <BaseNode
      title="Text"
      id={id}
      width={nodeWidth}
      height={nodeHeight}
      outputs={[{ id: "output" }]}
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
            width: "10px",
            height: "10px",
            background: "linear-gradient(45deg, #8030b0, #4a1a6c)",
            border: "none",
            opacity: 0.6,
          }}
        />
      ))}

      <textarea
        ref={textAreaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          width: "calc(100% - 16px)", // Account for padding
          height: `${nodeHeight - 40}px`, // Adjust textarea height within node
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          border: "none",
          borderRadius: "4px",
          padding: "8px",
          color: "#a7a7a7",
          resize: "none",
          fontFamily: "monospace",
          fontSize: "12px",
          marginTop: "4px",
          outline: "none",
          overflowY: "auto",
        }}
        placeholder="Enter text here. Use {{variable}} to create input handles."
      />
    </BaseNode>
  );
};
