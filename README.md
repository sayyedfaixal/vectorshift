# Project Overview 🚀

This project involves building a frontend and backend system that handles nodes and edges in a graphical pipeline. The frontend allows users to create different types of nodes, style them, and interact with them. The backend is a simple Python/FastAPI server that validates the pipeline, checks if it forms a Directed Acyclic Graph (DAG), and provides necessary metadata.

## Table of Contents 📚

1. [Node Abstraction](#node-abstraction)
2. [Styling](#styling)
3. [Text Node Logic](#text-node-logic)
4. [Backend Integration](#backend-integration)
5. [Running the Application](#running-the-application)

## Node Abstraction 🧩

In the `/frontend/src/nodes` directory, there are JavaScript files for four types of nodes: inputs, outputs, LLMs, and text. These nodes contain different types of content and input/output connections, called "Handles." However, there is significant overlap in the code between nodes, which makes it difficult to scale the creation of new nodes.

### Task:

- Create an abstraction for these nodes to simplify the creation of new ones and allow future styling to be applied easily across all nodes.
- After creating the abstraction, demonstrate it by building five new nodes of your choosing. These nodes should showcase the flexibility and efficiency of your new node abstraction, rather than focusing on the actual functionality of the nodes.

## Styling 🎨

The initial frontend files provided lack any significant styling. Your task is to apply a unified, appealing design across the components.

### Task:

- Style the nodes and their components in a cohesive design.
- You can either use existing styles from VectorShift as inspiration or create a completely new design from scratch.
- Feel free to use any React libraries or packages you prefer to achieve the desired look.

## Text Node Logic ✍️

The Text node in `/frontend/src/nodes` currently has a simple text input field. Your goal is to improve the functionality of this text input in the following ways:

### Task:

1. **Dynamic Sizing:** The width and height of the Text node should adjust based on the content entered by the user, making the text input more visible as more text is typed.
2. **Variable Parsing:** Users should be able to define variables in their text input. Any valid JavaScript variable name surrounded by double curly brackets (e.g., `{{input}}`) should automatically create a new Handle on the left side of the Text node corresponding to the variable.

For examples of what this should look like, refer to the VectorShift Text node or watch the tutorials for the VectorShift Text node.

## Backend Integration 🔌

The backend for this project is a simple Python/FastAPI server located in the `/backend` directory. Your task is to connect the frontend and backend by integrating the pipeline data with the backend for validation.

### Task:

1. **Frontend Changes:**
   - Update the `submit.js` file in `/frontend/src` to send the nodes and edges of the pipeline to the `/pipelines/parse` endpoint in the backend when the user clicks the submit button.
2. **Backend Changes:**
   - Update the `/pipelines/parse` endpoint in `/backend/main.py` to calculate the number of nodes and edges in the pipeline.
   - Check whether the pipeline forms a Directed Acyclic Graph (DAG). The response should return the following data:
     ```json
     {
       "num_nodes": int,
       "num_edges": int,
       "is_dag": bool
     }
     ```
3. **Frontend Alert:**
   - Once the frontend receives a response from the backend, display an alert with the values of `num_nodes`, `num_edges`, and `is_dag` in a user-friendly manner.

### Final Outcome:

- The user will be able to create a pipeline, click the submit button, and receive an alert displaying the number of nodes and edges, as well as whether the pipeline forms a DAG.

## Running the Application 🏃‍♂️

To run the frontend and backend, follow these steps:

### Frontend:

1. Navigate to the `/frontend` directory.
2. Install the dependencies by running:
3. Start the frontend server with:
   ```bash
   npm i
   npm start
   ```

### Backend:

1. Navigate to the /backend directory.
2. Run the backend server with

   ```bash
   uvicorn main:app --reload
   ```

# Contributing 🤝

Feel free to fork the repository, submit pull requests, and suggest improvements!

License 📝
This project is licensed under the MIT License - see the LICENSE file for details.

```
This is a complete `README.md` file formatted with emojis to make it engaging and visually appealing.
```
