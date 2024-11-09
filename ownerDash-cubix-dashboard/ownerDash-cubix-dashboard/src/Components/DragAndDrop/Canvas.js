// Canvas.js
import React, { useEffect, useRef, useState } from 'react';
import DraggableComponent from './DraggableComponent';
import DroppableContainer from './DroppableContainer';
import BankBalance from '../reusables/BankBalance';
import CardThree from '../Home/CardThree';
import DepartmentSales from '../reusables/DepartmentSales';
import PaybleCont from '../Home/CardTwo';
import TopCustomers from '../reusables/TopCustomers';
import LineGraph from '../reusables/LineGraph';
import DoughnutChart from '../reusables/Doughnut';
import TopProductCode from '../reusables/TopProductsCode';
import DebCred from '../Home/DebCred';
import CredAge from '../Home/CredAgeing';
import Notification from '../reusables/Notification';
import CardFive from '../Home/CardFive';
import CardFour from '../Home/CardFour';
import TopCust from '../Home/TopCust';
import CashBalance from '../reusables/CashBalance';
import DoughTc from '../Home/DoughTc';
import './Canvas.css'
// import Draggable from 'react-draggable';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import { GridContextProvider, GridDropZone, GridItem, swap } from 'react-grid-dnd'

const Canvas = () => {
    const [canvasItems, setCanvasItems] = useState([]);

    const [showComp, setShowComp] = useState(false)


    const droppableContainerRef = useRef(null);

    const special = 'special'

    const [dropNewContComponents, setDropNewContComponents] = useState([]);
    const [components, setComponents] = useState([
        { id: 'bankBalance', component: <BankBalance />, text: 'Example Component', noId: 1 },
        { id: 'CardThree', component: <CardThree />, text: 'Example Component', noId: 2 },
        { id: 'CardFive', component: <CardFive />, text: 'Example Component', noId: 3 },
        { id: 'CardFour', component: <CardFour />, text: 'Example Component', noId: 4 },
        // { id: 'sales', component: <CardThree />, text: 'Example Component' },
        { id: 'CashBalance', component: <CashBalance />, text: 'Example Component', noId: 5 },
        { id: 'DepartmentSales', component: <DepartmentSales />, text: 'Example Component', noId: 6 },
        { id: 'PaybleCont', component: <PaybleCont />, text: 'Example Component', special: true, noId: 7 },
        { id: 'LineGraph', component: <LineGraph />, text: 'Example Component', special: true, noId: 8 },
        { id: 'TopCust', component: <TopCust />, text: 'Example Component', special: true, noId: 9 },
        { id: 'DoughnutChart', component: <DoughnutChart />, text: 'Example Component', special: true, noId: 10 },
        { id: 'TopProductCode', component: <TopProductCode />, text: 'Example Component', special: true, noId: 11 },
        { id: 'DebCred', component: <DebCred />, text: 'Example Component', noId: 12 },
        { id: 'CredAge', component: <CredAge />, text: 'Example Component', noId: 13 },
        { id: 'Notification', component: <Notification />, text: 'Example Component', noId: 14 },
        // Add other components with their respective details
    ]);

    const handleOnDragEnd1 = (result) => {

        console.log(result)
        if (!result.destination) return;

        const sourceIndex = result.source.index;
        const destinationIndex = result.destination.index;

        // Determine the dragged item based on the source droppableId
        const draggedItem = components[sourceIndex];

        // Check the destination droppableId
        if (result.destination.droppableId === 'DropNewCont') {
            // Remove the item from the source list
            const updatedComponents = [...components];
            updatedComponents.splice(sourceIndex, 1);

            // Add the item to the bottom of the destination list
            const updatedDropNewContComponents = [...dropNewContComponents];
            updatedDropNewContComponents.push(draggedItem);

            // Update the state
            setComponents(updatedComponents);
            setDropNewContComponents(updatedDropNewContComponents);
        } else if (result.destination.droppableId === 'DragComps') {
            // Handle logic for DragComps if needed
            // For example, reordering items in DragComps
            const updatedComponents = [...components];
            updatedComponents.splice(sourceIndex, 1);
            updatedComponents.splice(destinationIndex, 0, draggedItem);

            // Update the state
            setComponents(updatedComponents);
        }
    };

    const handleOnDragEnd = (result) => {
        console.log(result, 'result')
        console.log("Before Dragging", components, dropNewContComponents);
        if (!result.destination) return;

        const sourceIndex = result.source.index;
        const destinationIndex = result.destination.index;
        const draggedItem = components[sourceIndex];

        console.log(sourceIndex, destinationIndex)

        // console.log(draggedItem, 'draggedItem')

        if (result.source.droppableId === 'DropNewCont' && result.destination.droppableId === 'DropNewCont') {

            console.log(result, "after Dragging")
            // console.log(dropNewContComponents, 'inside loop first')


            // console.log(dropNewContComponents, "Before Dragging")
            const updatedDropNewContComponents = Array.from(dropNewContComponents);

            // Get the dragged item directly from the result object
            const draggedItem2 = updatedDropNewContComponents[sourceIndex];

            console.log(draggedItem2, 'draggedItem2')

            // Remove the item from the source index and insert it at the destination index
            updatedDropNewContComponents.splice(sourceIndex, 1);
            updatedDropNewContComponents.splice(destinationIndex, 0, draggedItem2);

            setDropNewContComponents(updatedDropNewContComponents);
            console.log(dropNewContComponents, 'inside loop')
            // return
        } else if (result.source.droppableId === 'DragComps' && result.destination.droppableId === 'DropNewCont') {
            // Remove the item from the source list
            const updatedComponents = [...components];
            updatedComponents.splice(sourceIndex, 1);

            // Add the item to the bottom of the destination list
            const updatedDropNewContComponents = [...dropNewContComponents];
            updatedDropNewContComponents.push(draggedItem);

            // Update the state
            setComponents(updatedComponents);
            setDropNewContComponents(updatedDropNewContComponents);
        } else if (result.source.droppableId === 'DragComps' && result.destination.droppableId === 'DragComps') {
            // Reorder within DragComps
            const updatedComponents = Array.from(components);
            updatedComponents.splice(sourceIndex, 1);
            updatedComponents.splice(destinationIndex, 0, draggedItem);
            setComponents(updatedComponents);
        }
    };

    const handleOnDragEnd2 = (result) => {
        if (!result.destination) return;

        let draggedItem; // Declare draggedItem outside the conditionals

        const sourceIndex = result.source.index;
        const destinationIndex = result.destination.index;

        if (result.source.droppableId === 'DropNewCont' && result.destination.droppableId === 'DropNewCont') {
            const updatedDropNewContComponents = Array.from(dropNewContComponents);

            console.log(updatedDropNewContComponents, 'updatedDropNewContComponents1')


            // Reorder within DropNewCont
            [draggedItem] = updatedDropNewContComponents.splice(sourceIndex, 1);
            updatedDropNewContComponents.splice(destinationIndex, 0, draggedItem);

            console.log(draggedItem, sourceIndex, destinationIndex)
            console.log(updatedDropNewContComponents, 'updatedDropNewContComponents2')

            setDropNewContComponents(updatedDropNewContComponents);
        } else if (result.source.droppableId === 'DragComps' && result.destination.droppableId === 'DropNewCont') {
            // Remove the item from DragComps
            const updatedComponents = [...components];
            [draggedItem] = updatedComponents.splice(sourceIndex, 1);

            // Add the item to the bottom of DropNewCont
            const updatedDropNewContComponents = [...dropNewContComponents];
            updatedDropNewContComponents.splice(destinationIndex, 0, draggedItem);

            setComponents(updatedComponents);
            setDropNewContComponents(updatedDropNewContComponents);
        } else if (result.source.droppableId === 'DragComps' && result.destination.droppableId === 'DragComps') {
            // Reorder within DragComps
            const updatedComponents = Array.from(components);
            updatedComponents.splice(sourceIndex, 1);
            updatedComponents.splice(destinationIndex, 0, draggedItem);
            setComponents(updatedComponents);
        }
    };



    // console.log(dropNewContComponents)

    const componentMappings = {
        bankBalance: <BankBalance />,
        sales: <CardThree />,
        DepartmentSales: <DepartmentSales />,
        PaybleCont: <PaybleCont type={special} />,
        TopCustomers: <TopCustomers type={special} />,
        LineGraph: <LineGraph type={special} />,
        DoughnutChart: <DoughnutChart type={special} />,
        TopProductCode: <TopProductCode type={special} />,
        DebCred: <DebCred />,
        CredAge: <CredAge />,
        Notification: <Notification />,
        CardFive: <CardFive />,
        CardFour: <CardFour />,
        TopCust: <TopCust type={special} />,
        CashBalance: <CashBalance />,
        DoughTc: <DoughTc />

        // Add more mappings as needed
    };

    // Load saved layout from local storage on component mount
    useEffect(() => {
        const storedLayout = getLayoutFromLocalStorage();
        if (storedLayout.length > 0) {
            // Reconstruct the canvasItems state
            const reconstructedCanvasItems = storedLayout.map((item) => ({
                id: item.id,
                position: item.position,
                component: componentMappings[item.id],
            }));
            setCanvasItems(reconstructedCanvasItems);
        }
    }, []);

    const handleDrop = (item, monitor) => {
        const dropPosition = monitor.getClientOffset();

        const newComponent = componentMappings[item.id];

        if (dropPosition && droppableContainerRef.current) {
            const containerRect = droppableContainerRef.current.getBoundingClientRect();
            const gridX = Math.floor((dropPosition.x - containerRect.left) / (containerRect.width / 3));
            const gridY = Math.floor((dropPosition.y - containerRect.top) / (containerRect.height / 3));

            const canvasPosition = {
                x: (gridX * containerRect.width) / 3,
                y: (gridY * containerRect.height) / 3,
            };

            // setCanvasItems((prevItems) => [
            //     ...prevItems,
            //     { ...item, position: canvasPosition, component: newComponent },
            // ]);

            // Handle the drop event, add the dropped item to the canvas
            setCanvasItems((prevItems) => [
                ...prevItems,
                { ...item, position: canvasPosition, component: componentMappings[item.id] },
            ]);
        }
    };

    const handleSaveButtonClick = () => {
        // Save the current layout to local storage
        saveLayoutToLocalStorage(canvasItems);
    };

    const handleRemoveLayoutClick = () => {
        // Remove the saved layout from local storage
        removeLayoutFromLocalStorage();
        // Clear the canvasItems state
        setCanvasItems([]);
    };

    // Button style
    const buttonStyle = {
        backgroundColor: '#4CAF50', // Green background color
        color: 'white', // White text color
        padding: '10px 15px', // Padding
        margin: '5px', // Margin
        cursor: 'pointer', // Cursor on hover
        border: 'none', // No border
        borderRadius: '5px', // Rounded corners
    };
    const RbuttonStyle = {
        backgroundColor: '#ff5a5f', // Green background color
        color: 'white', // White text color
        padding: '10px 15px', // Padding
        margin: '5px', // Margin
        cursor: 'pointer', // Cursor on hover
        border: 'none', // No border
        borderRadius: '5px', // Rounded corners
    };

    // Media queries for responsive design
    const mediaQueries = {
        tablet: '@media only screen and (max-width: 768px)',
        mobile: '@media only screen and (max-width: 480px)',
    };

    // Responsive styles for grid items
    const responsiveStyles = {
        [mediaQueries.tablet]: {
            // Styles for tablets
            div: {
                flex: '1 1 50%', // Example: Set the width of each grid item to 50% on tablets
            },
        },
        [mediaQueries.mobile]: {
            // Styles for mobile devices
            div: {
                flex: '1 1 100%', // Set the width of each grid item to 100% on mobile
            },
        },
    };

    // console.log('canvas Item', canvasItems)
    const [dummystate, setdummystate] = useState(true)

    useEffect(() => {
        setdummystate(!dummystate)
        // console.log(dropNewContComponents)
    }, [dropNewContComponents])

    // const GridDndOnchange = (sourceId, sourceIndex, targetIndex) => {
    //     console.log(sourceId, sourceIndex, targetIndex)
    //     console.log('gridonchnage called')
    //     const nextState = swap(dropNewContComponents, sourceIndex, targetIndex)
    //     console.log(nextState, 'nextState')
    //     setDropNewContComponents(nextState)
    // }

    // function onChange(sourceId, sourceIndex, targetIndex) {
    //     console.log(sourceId, sourceIndex, targetIndex)
    //     console.log('gridonchnage called')
    //     const nextState = swap(components, sourceIndex, targetIndex)
    //     console.log(nextState, 'nextState')
    //     setComponents(nextState)
    //     // setDropNewContComponents(nextState)
    // }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: "center", overflowY: "scroll", height: '100vh', position: 'relative' }}>
            <h2><div style={{ cursor: 'pointer' }} onClick={() => setShowComp(!showComp)}>Drag and Drop</div></h2>
            <div style={{ position: "fixed", bottom: "24px", right: "24px", backgroundColor: "orange", color: "white", padding: "8px", borderRadius: "4px", cursor: "pointer", zIndex: "1" }} onClick={() => setShowComp(!showComp)}>Components</div>
            {/* {
                showComp ?

                    <div style={{ display: 'flex', width: "25%", height: '85vh', flexWrap: "wrap", overflowY: "scroll", position: 'fixed', bottom: "80px", right: "0", zIndex: '1', backgroundColor: 'lightblue', padding: '8px' }}>
                        <div style={{ flex: '1' }}><DraggableComponent id="bankBalance" component={BankBalance} text="Example Component" /></div>
                        <div style={{ flex: '1' }}><DraggableComponent id="CardFive" component={CardFive} text="Example Component" /></div>
                        <div style={{ flex: '1' }}><DraggableComponent id="CardFour" component={CardFour} text="Example Component" /></div>
                        <div style={{ flex: '1' }}><DraggableComponent id="sales" component={CardThree} text="Example Component" /></div>
                        <div style={{ flex: '1' }}><DraggableComponent id="CashBalance" component={CashBalance} text="Example Component" /></div>
                        <div style={{ flex: '1' }}><DraggableComponent id="DepartmentSales" component={DepartmentSales} text="Example Component" /></div>
                        <div style={{ flex: '1' }}><DraggableComponent id="PaybleCont" component={PaybleCont} text="Example Component" /></div>
                        <div style={{ flex: '1' }}><DraggableComponent id="LineGraph" component={LineGraph} text="special" /></div>
                        <div style={{ width: '95%' }}><DraggableComponent id="TopCust" component={TopCust} text="special" /></div>
                        <div style={{ flex: '1' }}><DraggableComponent id="DoughnutChart" component={DoughnutChart} text="special" /></div>
                        <div style={{ flex: '1' }}><DraggableComponent id="TopProductCode" component={TopProductCode} text="special" /></div>
                        <div style={{ flex: '1' }}><DraggableComponent id="DebCred" component={DebCred} text="Example Component" /></div>
                        <div style={{ flex: '1' }}><DraggableComponent id="CredAge" component={CredAge} text="Example Component" /></div>
                        <div style={{ flex: '1' }}><DraggableComponent id="Notification" component={Notification} text="Example Component" /></div>
                    </div> : ""
            } */}

            {/* drag and drop dnd new */}

            <DragDropContext onDragEnd={handleOnDragEnd}>
                {
                    showComp ?
                        <div style={{ display: 'flex', width: "25%", height: '85vh', flexWrap: "wrap", overflowY: "scroll", position: 'fixed', bottom: "80px", right: "0", zIndex: '1', backgroundColor: 'lightgreen', padding: '8px' }}>
                            <Droppable droppableId='DragComps'>
                                {
                                    (provided) => (
                                        <div style={{ width: "100%" }} className='DragComponets' {...provided.droppableProps} ref={provided.innerRef}>

                                            {components.map((item, index) => (
                                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                                    {(provided) => (
                                                        <div style={{ width: "100%" }}
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                        >
                                                            {item.component}
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </div>
                                    )
                                }
                            </Droppable>
                        </div> : ""
                }

                <div style={{ backgroundColor: "lightblue", width: "100%" }}>
                    <Droppable droppableId='DropNewCont'>
                        {(provided) => (
                            <div style={{ minHeight: '100px', display: "flex", flexWrap: "wrap", justifyContent: 'center' }} {...provided.droppableProps} ref={provided.innerRef} className='DropNewCont'>
                                {dropNewContComponents && dropNewContComponents.map((item, index) => (
                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                isDragging={snapshot.isDragging}
                                                style={{
                                                    marginBottom: '8px',
                                                    padding: '8px',
                                                    border: '1px solid #ccc',
                                                    width: item?.special ? 'calc(50% - 16px)' : 'calc(33.33% - 16px)',
                                                    boxSizing: 'border-box',
                                                    transition: 'transform 0.2s ease-in-out', // CSS transition for smooth animation
                                                    transform: snapshot.isDragging ? 'scale(1.1)' : 'scale(1)', // Apply scale during dragging
                                                }}
                                            >
                                                {item.component}
                                            </div>
                                            // <div
                                            //     ref={provided.innerRef}
                                            //     {...provided.draggableProps}
                                            //     {...provided.dragHandleProps}
                                            //     style={{
                                            //         marginBottom: '8px',
                                            //         padding: '8px',
                                            //         border: '1px solid #ccc',
                                            //         width: item?.special ? 'calc(50% - 16px)' : 'calc(33.33% - 16px)',
                                            //         boxSizing: 'border-box',
                                            //         // display: "none"
                                            //     }}
                                            // >
                                            //     {item.component}
                                            // </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </div>


            </DragDropContext >

            {/* <div className='griddndCont' style={{ width: '100%' }}>
                <GridContextProvider onChange={onChange}>
                    <GridDropZone
                        id='gridItems'
                        boxesPerRow={3}
                    >
                        <div style={{ minHeight: '100px', display: "flex", flexWrap: "wrap", justifyContent: "space-between", width: "100%" }}>
                            {components && components.map((item, index) => (
                                <GridItem key={item.noId} className='custom-grid-item' id={item.noId.toString()}>
                                    <div

                                        style={{
                                            marginBottom: '8px',
                                            padding: '8px',
                                            border: '1px solid #ccc',
                                            boxSizing: 'border-box',
                                            width: "100%",
                                            cursor: "-webkit-grab"
                                        }}
                                    >
                                        {item.component}
            
                                    </div>
                                </GridItem>
    
                            ))}

                        </div>
                    </GridDropZone>
                </GridContextProvider>
            </div> */}

            {/* <div className='DrpCont' style={{ width: "85%" }}>

                <DroppableContainer ref={droppableContainerRef} onDrop={handleDrop} style={{}}>

                    {canvasItems.map((item) => (
                        <div
                            className={`${item.id}-Cont`}
                            key={item.id}
                            style={{
                                ...responsiveStyles.div,
                                padding: '8px',
                                cursor: 'move',
                                boxSizing: 'border-box',
                                marginBottom: '16px',
                            }}
                        >
                            {item.component}

                        </div>
                    ))}
                </DroppableContainer>

                {
                    canvasItems.length > 0 ?
                        <div style={{ display: "flex", width: '100%', justifyContent: 'space-evenly', marginTop: '12px' }}>
                            <button style={buttonStyle} onClick={handleSaveButtonClick}>Save Layout</button>
                            <button style={RbuttonStyle} onClick={handleRemoveLayoutClick}>Remove Layout</button>
                        </div> : ""
                }


            </div> */}
        </div >
    );
};

// Save layout to local storage
const saveLayoutToLocalStorage = (layout) => {
    const serializedLayout = layout.map((item) => ({
        id: item.id,
        position: item.position,
    }));
    localStorage.setItem('canvasLayout', JSON.stringify(serializedLayout));
};

// Retrieve layout from local storage
const getLayoutFromLocalStorage = () => {
    const storedLayout = localStorage.getItem('canvasLayout');
    return storedLayout ? JSON.parse(storedLayout) : [];
};

// Remove layout from local storage
const removeLayoutFromLocalStorage = () => {
    localStorage.removeItem('canvasLayout');
};


export default Canvas;
