// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='aggregator' label='AggregatorNode' />
                <DraggableNode type='conditional' label='ConditionalNode' />
                <DraggableNode type='math' label='MathNode' />
                <DraggableNode type='imageProcessing' label='ImageProcessingNode' />
                <DraggableNode type='delay' label='DelayNode' />
            </div>
        </div>
    );
};
