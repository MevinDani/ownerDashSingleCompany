import React, { useState } from 'react'
import './KanBan.css'
import { useRef } from 'react';

const KanBan = ({ kanbanData }) => {

    // console.log(kanbanData, 'kanbanData')
    const [draggedItem, setDraggedItem] = useState(null);
    const kanbanRef = useRef(null);
    const scrollRef = useRef(null);

    const handleDragStart = (e, dataItem) => {
        console.log(dataItem, 'dataItem')
        setDraggedItem(dataItem);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e, targetStage) => {
        e.preventDefault();
        console.log(targetStage, 'target')
        // if (draggedItem) {
        //     // Update the stage of the dragged item
        //     updateKanbanData((prevData) => {
        //         const updatedData = [...prevData];
        //         const sourceStage = draggedItem.stage;

        //         // Remove the item from the source stage
        //         const sourceIndex = updatedData.findIndex((item) => item.stage === sourceStage);
        //         const draggedItemIndex = updatedData[sourceIndex].data.findIndex(
        //             (item) => item === draggedItem
        //         );
        //         updatedData[sourceIndex].data.splice(draggedItemIndex, 1);

        //         // Add the item to the target stage
        //         const targetIndex = updatedData.findIndex((item) => item.stage === targetStage);
        //         updatedData[targetIndex].data.push(draggedItem);

        //         return updatedData;
        //     });

        //     setDraggedItem(null);
        // }
    };

    const handleAutoScroll = (e) => {
        const { clientX, clientY } = e;
        const scrollContainer = scrollRef.current;

        if (kanbanRef.current && scrollContainer) {
            const { left, right } = kanbanRef.current.getBoundingClientRect();

            if (clientX < left + 30) {
                // Scroll to the left
                scrollContainer.scrollLeft -= 10;
            } else if (clientX > right - 30) {
                // Scroll to the right
                scrollContainer.scrollLeft += 10;
            }
        }
    };

    const stages = ['Negotiation', 'Proposal', 'Demo', 'Lead', 'Prospecting', 'Opportunity Won'];


    return (
        <div className='KanBanWrapper'>

            <div className='KanBanCont' ref={kanbanRef}>

                {/* <div className='KanBan'>
                    {kanbanData.map((item, key) => (
                        item.stage === 'Prospecting' && (
                            <div key={key}>
                                <div className='KanBanHeader'>{item.stage}</div>
                                {item.data.map((dataItem, dataKey) => (
                                    <div key={dataKey} className="card">
                                        <div className="custName">
                                            {dataItem.customerName}
                                        </div>
                                        <div className="card-body kanBanCardBody">
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
                        )
                    ))}
                </div> */}

                <div className='KanBan' onDragOver={(e) => handleDragOver(e)}
                    onDrop={(e) => handleDrop(e, 'Negotiation')}>
                    <div className='KanBanHeader negotiationHead'>Negotiation</div>
                    {
                        kanbanData.map((item, key) => (
                            item.stage === 'Negotiation' && (
                                item.data.map((dataItem, dataKey) => (
                                    <div key={dataKey} className="card" draggable
                                        onDragStart={(e) => handleDragStart(e, dataItem)} >
                                        <div className="custName">
                                            {dataItem.customerName}
                                        </div>
                                        <div className="card-body kanBanCardBody">
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
                                ))
                            )
                        ))
                    }
                </div>
                <div className='KanBan' onDragOver={(e) => handleDragOver(e)}
                    onDrop={(e) => handleDrop(e, 'Proposal')}>
                    <div className='KanBanHeader proposalHead'>Proposal</div>
                    {
                        kanbanData.map((item, key) => (
                            item.stage === 'Proposal' && (
                                item.data.map((dataItem, dataKey) => (
                                    <div key={dataKey} className="card" draggable
                                        onDragStart={(e) => handleDragStart(e, dataItem)} >
                                        <div className="custName">
                                            {dataItem.customerName}
                                        </div>
                                        <div className="card-body kanBanCardBody">
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
                                ))
                            )
                        ))
                    }
                </div>
                <div className='KanBan' onDragOver={(e) => handleDragOver(e)}
                    onDrop={(e) => handleDrop(e, 'Demo')}>
                    <div className='KanBanHeader demoHead'>Demo</div>
                    {
                        kanbanData.map((item, key) => (
                            item.stage === 'Demo' && (
                                item.data.map((dataItem, dataKey) => (
                                    <div key={dataKey} className="card" draggable
                                        onDragStart={(e) => handleDragStart(e, dataItem)} >
                                        <div className="custName">
                                            {dataItem.customerName}
                                        </div>
                                        <div className="card-body kanBanCardBody">
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
                                ))
                            )
                        ))
                    }
                </div>
                <div className='KanBan' onDragOver={(e) => handleDragOver(e)}
                    onDrop={(e) => handleDrop(e, 'Lead Qualification')}>
                    <div className='KanBanHeader leadHead'>Lead</div>
                    {
                        kanbanData.map((item, key) => (
                            item.stage === 'Lead Qualification' && (
                                item.data.map((dataItem, dataKey) => (
                                    <div key={dataKey} className="card" draggable
                                        onDragStart={(e) => handleDragStart(e, dataItem)} >
                                        <div className="custName">
                                            {dataItem.customerName}
                                        </div>
                                        <div className="card-body kanBanCardBody">
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
                                ))
                            )
                        ))
                    }
                </div>
                <div className='KanBan' onDragOver={(e) => handleDragOver(e)}
                    onDrop={(e) => handleDrop(e, 'Prospecting')}>
                    <div className='KanBanHeader'>Prospecting</div>
                    {
                        kanbanData.map((item, key) => (
                            item.stage === 'Prospecting' && (
                                item.data.map((dataItem, dataKey) => (
                                    <div key={dataKey} className="card" draggable
                                        onDragStart={(e) => handleDragStart(e, dataItem)} >
                                        <div className="custName">
                                            {dataItem.customerName}
                                        </div>
                                        <div className="card-body kanBanCardBody">
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
                                ))
                            )
                        ))
                    }
                </div>
                <div className='KanBan' onDragOver={(e) => handleDragOver(e)}
                    onDrop={(e) => handleDrop(e, 'Opportunity Won')}>
                    <div className='KanBanHeader oppWonHead'>Won</div>
                    {
                        kanbanData.map((item, key) => (
                            item.stage === 'Opportunity Won' && (
                                item.data.map((dataItem, dataKey) => (
                                    <div key={dataKey} className="card" draggable
                                        onDragStart={(e) => handleDragStart(e, dataItem)} >
                                        <div className="custName">
                                            {dataItem.customerName}
                                        </div>
                                        <div className="card-body kanBanCardBody">
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
                                ))
                            )
                        ))
                    }
                </div>

            </div>
        </div >
    )
}

export default KanBan