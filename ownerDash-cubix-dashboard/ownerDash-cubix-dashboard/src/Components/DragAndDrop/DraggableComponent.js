// DraggableComponent.js
import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableComponent = ({ id, component: Component, text }) => {
    const [{ isDragging }, drag] = useDrag({
        type: 'COMPONENT',
        item: { id, text },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });

    return (
        <div
            ref={drag}
            style={{
                opacity: isDragging ? 0.5 : 1,
                cursor: 'move',
                border: '1px solid #ccc',
                padding: '8px',
                marginBottom: '8px',
            }}
        >
            <Component />
        </div>
    );
};

export default DraggableComponent;
