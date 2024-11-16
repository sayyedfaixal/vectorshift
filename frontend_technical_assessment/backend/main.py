from fastapi import FastAPI, Body
from typing import Dict
from fastapi.middleware.cors import CORSMiddleware  # Import CORSMiddleware

app = FastAPI()

# Add CORS middleware to allow requests from all origins (or specific origins)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins; change "*" to specific URLs to restrict
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allows all headers
)

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: Dict = Body(...)):
    nodes = pipeline['nodes']
    edges = pipeline['edges']

    num_nodes = len(nodes)
    num_edges = len(edges)

    # Check if the pipeline is a directed acyclic graph (DAG)
    is_dag = is_directed_acyclic_graph(nodes, edges)

    return {'num_nodes': num_nodes, 'num_edges': num_edges, 'is_dag': is_dag}

def is_directed_acyclic_graph(nodes, edges):
    # Initialize an adjacency list
    adjacency_list = {node['id']: [] for node in nodes}
    

    # Build the adjacency list from the edges
    for edge in edges:
        source = edge['source']
        target = edge['target']
        adjacency_list[source].append(target)

    print(' ================================================================= ')
    print('AD IS',adjacency_list)
    print(' ================================================================= ')

    # Now you can proceed with detecting cycles, for example using DFS
    def has_cycle(node, visited, rec_stack):
        visited[node] = True
        rec_stack[node] = True

        for neighbor in adjacency_list[node]:
            if not visited[neighbor]:
                if has_cycle(neighbor, visited, rec_stack):
                    return True
            elif rec_stack[neighbor]:
                return True

        rec_stack[node] = False
        return False

    # Detect cycles for each node
    visited = {node['id']: False for node in nodes}
    rec_stack = {node['id']: False for node in nodes}

    for node in nodes:
        if not visited[node['id']]:
            if has_cycle(node['id'], visited, rec_stack):
                return False  # There's a cycle

    return True  # No cycles, it's a DAG
