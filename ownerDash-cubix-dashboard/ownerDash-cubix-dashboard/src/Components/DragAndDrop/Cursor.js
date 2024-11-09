import React, { useState } from 'react';

const Cursor = () => {
    const [dragging, setDragging] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleDragStart = (e) => {
        setDragging(true);
        setPosition({
            x: e.clientX,
            y: e.clientY,
        });
    };

    const handleDragEnd = () => {
        setDragging(false);
    };

    const handleDrag = (e) => {
        if (dragging) {
            const deltaX = e.clientX - position.x;
            const deltaY = e.clientY - position.y;

            setPosition({
                x: deltaX,
                y: deltaY,
            });

            // Update your state or perform any other actions based on the drag movement
            // For example, you can update the position of a draggable element in the state
        }
    };

    return (
        <div
            draggable
            style={{
                width: '200px',
                height: '200px',
                background: 'lightblue',
                position: 'absolute',
                left: `${position.x}px`,
                top: `${position.y}px`,
                cursor: dragging ? 'grabbing' : 'grab',
            }}
            onDragStart={handleDragStart}
            onDrop={handleDragEnd}
            onDragOver={handleDrag}
        >
            Drag me!
        </div>
    );
}

export default Cursor