import React, { useState, useRef, useEffect } from 'react';
import './KanBan.css';

const KanBan2 = ({ kanbanData }) => {

    const [draggedItem, setDraggedItem] = useState(null);
    const [updatedKanData, setupdatedKanData] = useState(kanbanData)

    const kanbanRef = useRef(null);

    const handleDragStart = (e, dataItem) => {
        // console.log(dataItem, 'dataItem')
        setDraggedItem(dataItem);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        handleAutoScroll(e);
    };

    const handleDrop = (e, targetStage) => {
        // console.log(targetStage, 'targetStage')
        e.preventDefault();

        if (draggedItem) {

            if (draggedItem.stage === targetStage) {
                setDraggedItem(null);
                return;
            }
            // Remove the dragged item from its original stage
            const updatedData = updatedKanData.map((item) => ({
                ...item,
                data: item.data.filter((dataItem) => dataItem.id !== draggedItem.id),
            }));

            // Update the stage of the dragged item
            const updatedDraggedItem = { ...draggedItem, stage: targetStage };

            // Find the target stage and prepend the dragged item to its data
            const updatedKanbanData2 = updatedData.map((item) => {
                if (item.stage === targetStage) {
                    return {
                        ...item,
                        data: [updatedDraggedItem, ...item.data],
                    };
                }
                return item;
            });

            // Update the state with the new Kanban data
            // and reset the draggedItem state
            setDraggedItem(null);
            setupdatedKanData(updatedKanbanData2)
            // Reset the styles when dropping

        }

    };

    const handleAutoScroll = (e) => {
        const { clientX, clientY } = e;
        const kanbanContainer = kanbanRef.current;

        if (kanbanContainer) {
            const { left, right, width } = kanbanContainer.getBoundingClientRect();

            const scrollThreshold = 98;

            if (clientX < left + scrollThreshold) {
                // Scroll to the left
                kanbanContainer.scrollLeft -= 15;
            } else if (clientX > right - scrollThreshold) {
                // Scroll to the right
                kanbanContainer.scrollLeft += 15;
            }
        }
    };

    useEffect(() => {
        setupdatedKanData(kanbanData)
    }, [kanbanData])

    console.log(updatedKanData, 'updatedKanData')
    console.log(kanbanData, 'kanbanData')

    return (
        <div className='KanBanWrapper'>
            <div className='KanBanCont scroll' ref={kanbanRef}>
                {updatedKanData.map((item, key) => (
                    <div key={key} className='KanBan' onDragOver={(e) => handleDragOver(e)} onDrop={(e) => handleDrop(e, item.stage)}>
                        <div className={`KanBanHeader ${item.stage.toLowerCase() + 'Head'}`}>{item.stage}</div>
                        {item.data.map((dataItem, dataKey) => (
                            <div
                                key={dataKey}
                                className='card'
                                draggable
                                onDragStart={(e) => handleDragStart(e, dataItem)} style={{ cursor: "grab" }}>
                                <div className='custName'>{dataItem.customerName}</div>
                                <div className='card-body kanBanCardBody'>
                                    <div className='KanBanProb'>
                                        <div> Probability</div>
                                        <span className='KanProbSpan'>{dataItem.probability}%</span>
                                    </div>
                                    <div className='KanBanProb'>
                                        <div>Booked Amount</div>
                                        <span className='KanBKASpan'>{dataItem.bookedAmount || 8000}</span>
                                    </div>
                                    <div className='KanBanProb'>
                                        <div>Follow Up Date</div>
                                        <span className='KanFUDSpan'>{dataItem.nextFollowUpDate}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default KanBan2;
