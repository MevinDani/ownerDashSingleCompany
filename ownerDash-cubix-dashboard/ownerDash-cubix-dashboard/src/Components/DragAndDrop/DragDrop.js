import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom';
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
import { height } from '@mui/system';

const DragDrop = () => {

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
    // const [components2, setComponents2] = useState([
    //     { id: 'bankBalance', component: <BankBalance />, text: 'Example Component', noId: 1 },
    //     { id: 'CardThree', component: <CardThree />, text: 'Example Component', noId: 2 },
    //     { id: 'CardFive', component: <CardFive />, text: 'Example Component', noId: 3 },
    //     { id: 'CardFour', component: <CardFour />, text: 'Example Component', noId: 4 },
    //     // { id: 'sales', component: <CardThree />, text: 'Example Component' },
    //     { id: 'CashBalance', component: <CashBalance />, text: 'Example Component', noId: 5 },
    //     { id: 'DepartmentSales', component: <DepartmentSales />, text: 'Example Component', noId: 6 },
    //     { id: 'PaybleCont', component: <PaybleCont />, text: 'Example Component', special: true, noId: 7 },
    //     { id: 'LineGraph', component: <LineGraph />, text: 'Example Component', special: true, noId: 8 },
    //     { id: 'TopCust', component: <TopCust />, text: 'Example Component', special: true, noId: 9 },
    //     { id: 'DoughnutChart', component: <DoughnutChart />, text: 'Example Component', special: true, noId: 10 },
    //     { id: 'TopProductCode', component: <TopProductCode />, text: 'Example Component', special: true, noId: 11 },
    //     { id: 'DebCred', component: <DebCred />, text: 'Example Component', noId: 12 },
    //     { id: 'CredAge', component: <CredAge />, text: 'Example Component', noId: 13 },
    //     { id: 'Notification', component: <Notification />, text: 'Example Component', noId: 14 },
    //     // Add other components with their respective details
    // ]);

    const [components2, setComponents2] = useState([
        { id: 'bankBalance', component: <BankBalance />, text: 'Example Component', noId: 1, special: false, style: {} },
        { id: 'CardThree', component: <CardThree />, text: 'Example Component', noId: 2, special: false, style: {} },
        { id: 'CardFive', component: <CardFive />, text: 'Example Component', noId: 3, special: false, style: {} },
        { id: 'CardFour', component: <CardFour />, text: 'Example Component', noId: 4, special: false, style: {} },
        { id: 'CashBalance', component: <CashBalance />, text: 'Example Component', noId: 5, special: false, style: {} },
        { id: 'DepartmentSales', component: <DepartmentSales />, text: 'Example Component', noId: 6, special: false, style: {} },
        { id: 'PaybleCont', component: <PaybleCont />, text: 'Example Component', special: true, noId: 7 },
        { id: 'LineGraph', component: <LineGraph />, text: 'Example Component', special: true, noId: 8 },
        { id: 'TopCust', component: <TopCust />, text: 'Example Component', special: true, noId: 9 },
        { id: 'DoughnutChart', component: <DoughnutChart />, text: 'Example Component', special: true, noId: 10 },
        { id: 'TopProductCode', component: <TopProductCode />, text: 'Example Component', special: true, noId: 11 },
        { id: 'DebCred', component: <DebCred />, text: 'Example Component', noId: 12, special: false, style: {} },
        { id: 'CredAge', component: <CredAge />, text: 'Example Component', noId: 13, special: false, style: {} },
        { id: 'Notification', component: <Notification />, text: 'Example Component', noId: 14, special: false, style: {} },
        // Add other components with their respective details
    ]);


    const [showComp, setShowComp] = useState(false)
    const [insideDrag, setInsideDrag] = useState(false)

    const handleOnDrag = (e, itemId) => {
        e.dataTransfer.setData('itemId', itemId)
        // console.log('itemIdhandleOnDrag', itemId)
    }

    const handleOnDrop = (e) => {
        console.log('handleOnDrop')
        const itemId = e.dataTransfer.getData('itemId');
        // console.log('itemIdhandleOnDrop', itemId)


        // Check if the drop occurred within the same container
        const isInternalDrop = dropNewContComponents.includes(itemId);
        // console.log(isInternalDrop, 'isInternalDrop')
        if (!isInternalDrop && itemId !== '') {
            // Drop from the components list to the container
            setDropNewContComponents([...dropNewContComponents, itemId]);

            // Remove the dropped item from the components array
            setComponents(prevComponents => prevComponents.filter(item => item.id !== itemId));
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault()
        // console.log("handleDragOver")
    }

    const handleContainerDragStart = (e, itemId) => {
        e.dataTransfer.setData('itemId', itemId);
        // console.log(itemId, 'itemId')
    };

    const handleContainerDrop = (e, targetIndex) => {
        const draggedItemId = e.dataTransfer.getData('itemId');
        const draggedItemIndex = dropNewContComponents.indexOf(draggedItemId);

        if (draggedItemIndex !== -1 && draggedItemIndex !== targetIndex) {
            setDropNewContComponents(prevComponents => {
                let updatedComponents = [...prevComponents];
                // let [draggedItem] = updatedComponents.splice(draggedItemIndex, 1);

                // Swap the elements using array destructuring
                [updatedComponents[targetIndex], updatedComponents[draggedItemIndex]] = [updatedComponents[draggedItemIndex], updatedComponents[targetIndex]];

                const filteredDropComponents = updatedComponents.filter(item => item !== '');

                // console.log(filteredDropComponents, 'filteredDropComponents')
                return filteredDropComponents;
            });
        }
    };

    const handleContainerDropA = (e) => {
        const draggedItemId = e.dataTransfer.getData('itemId');
        const containerElement = e.currentTarget;
        const containerRect = containerElement.getBoundingClientRect();

        // Calculate the position where the item was dropped
        const offsetX = e.clientX - containerRect.left;
        const offsetY = e.clientY - containerRect.top;

        console.log(offsetX, offsetY)

        // Find the dragged item in components2
        const draggedItemIndex = components2.findIndex((item) => item.id === draggedItemId);

        if (draggedItemIndex !== -1) {
            setComponents2((prevComponents) => {
                // Clone the components array to avoid mutating the state directly
                const updatedComponents = [...prevComponents];

                // Update the position of the dragged item
                updatedComponents[draggedItemIndex] = {
                    ...updatedComponents[draggedItemIndex],
                    style: {
                        position: 'absolute',
                        left: `${offsetX}px`,
                        top: `${offsetY}px`,
                    },
                };

                return updatedComponents;
            });
        }
    };

    console.log(components2, 'components2')


    const handleContainerDrop1 = (e, targetIndex) => {
        const draggedItemId = e.dataTransfer.getData('itemId');
        const draggedItemIndex = dropNewContComponents.indexOf(draggedItemId);

        const containerElement = e.currentTarget;
        console.log(containerElement, 'containerElement')
        const containerRect = containerElement.getBoundingClientRect();
        console.log(containerRect.height, 'containerRect')
        const cursorPosition = e.clientY - containerRect.top;
        console.log(cursorPosition, 'cursorPosition')

        const matchedComponent = components2.find(item => item.id === draggedItemId);
        const isSpecial = components2.find((item) => item.id === draggedItemId)?.special;

        console.log(matchedComponent, 'matchedComponent')
        console.log(isSpecial, 'isSpecial')

        if (!isSpecial && containerRect.height > 200) {
            // Check if the container has only 1 child
            const containerChildren = containerElement.childNodes;
            const isDropInnerComp = containerChildren.length < 3;

            console.log(containerChildren, 'containerChildren')
            console.log(isDropInnerComp, 'isDropInnerComp<3')

            if (isDropInnerComp) {
                // Create a new div for the matched component
                const newComponentDiv = document.createElement('div');
                newComponentDiv.style.width = '100%'; // Set width as needed
                newComponentDiv.style.margin = '8px'; // Set margin as needed
                newComponentDiv.draggable = true;

                // Render the matched component into a temporary container
                const tempContainer = document.createElement('div');
                ReactDOM.render(matchedComponent?.component, tempContainer);

                // Append the rendered component to the new div
                newComponentDiv.appendChild(tempContainer?.firstChild);

                // Insert the new div as the next child
                containerElement.insertBefore(newComponentDiv, containerChildren[0].nextSibling);
            }
        }

        if (draggedItemIndex !== -1 && draggedItemIndex !== targetIndex) {
            setDropNewContComponents((prevComponents) => {
                const updatedComponents = [...prevComponents];

                // Swap the elements using array destructuring
                [updatedComponents[targetIndex], updatedComponents[draggedItemIndex]] = [
                    updatedComponents[draggedItemIndex],
                    updatedComponents[targetIndex],
                ];

                // Check if the dragged item is not special
                const draggedItem = updatedComponents[targetIndex];
                console.log(draggedItem, 'draggedItem')
                const isSpecial = components2.find((item) => item.id === draggedItem)?.special;
                console.log(isSpecial, 'isSpecial')

                const containerChildren = updatedComponents.filter(Boolean);
                const isDropInnerComp = containerChildren.length > 0 && !isSpecial;
                const hasSpaceBelow = isDropInnerComp && containerChildren.length <= 2;

                if (!isSpecial && hasSpaceBelow) {
                    // Calculate the target position based on cursor position
                    const targetPosition = Math.floor((cursorPosition / containerRect.height) * containerChildren.length);

                    // Insert the dragged item at the calculated position
                    updatedComponents.splice(targetPosition, 0, draggedItemId);
                }

                const filteredDropComponents = updatedComponents.filter((item) => item !== '');

                // console.log(filteredDropComponents, 'filteredDropComponents');
                return filteredDropComponents;
            });
        }
    };


    const handleOnDrop2 = (e) => {
        const itemId = e.dataTransfer.getData('itemId');

        // Check if the drop occurred within the same container
        const isInternalDrop = dropNewContComponents.includes(itemId);

        if (!isInternalDrop && itemId !== '') {
            // Calculate the available space for the dropped component
            const containerWidth = document.getElementById('drop-container').clientWidth;
            const totalComponents = dropNewContComponents.length;
            const componentWidth = 100 / totalComponents; // Adjust as needed

            // Calculate the target index based on the mouse position
            const mouseX = e.clientX;
            const containerLeft = document.getElementById('drop-container').getBoundingClientRect().left;
            const relativeMouseX = mouseX - containerLeft;
            const targetIndex = Math.floor(relativeMouseX / containerWidth * totalComponents);

            // Insert the dropped item at the calculated position
            setDropNewContComponents((prevComponents) => {
                const updatedComponents = [...prevComponents];
                updatedComponents.splice(targetIndex, 0, itemId);
                return updatedComponents;
            });
        }
    };


    const handleContainerDragOver = (e) => {
        // console.log(e, 'handleContainerDragOver')
        e.preventDefault();
    };

    // useEffect(() => { console.log('dropChnaged', dropNewContComponents) }, [dropNewContComponents])

    // console.log(dropNewContComponents, 'dropcomp')
    return (

        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: "center", overflowY: "scroll", height: '100vh', position: 'relative' }}>
                <h2><div style={{ cursor: 'pointer' }} onClick={() => setShowComp(!showComp)}>Drag and Drop</div></h2>
                <div style={{ position: "fixed", bottom: "24px", right: "24px", backgroundColor: "orange", color: "white", padding: "8px", borderRadius: "4px", cursor: "pointer", zIndex: "1" }} onClick={() => setShowComp(!showComp)}>Components</div>

                {
                    showComp ?
                        <div style={{ display: 'flex', width: "25%", height: '85vh', flexWrap: "wrap", overflowY: "scroll", position: 'fixed', bottom: "80px", right: "0", zIndex: '1', backgroundColor: 'lightgreen', padding: '8px' }}>
                            {
                                components.map((item, index) => (
                                    <div key={index} style={{
                                        width: '100%',
                                        background: 'lightblue',
                                        cursor: 'grab',
                                    }} draggable
                                        onDragStart={(e) => handleOnDrag(e, item.id)}
                                    >
                                        {item.component}
                                    </div>
                                ))
                            }
                        </div> : ""
                }

                <div style={{ backgroundColor: "lightblue", width: "100%" }} onDrop={handleOnDrop} onDragOver={handleDragOver}>
                    DROP HERE!!
                    <div style={{ minHeight: '800px', display: "flex", flexWrap: "wrap", justifyContent: 'center' }} className='DropNewCont'>
                        {dropNewContComponents && dropNewContComponents.map((itemId, index) => {
                            const matchedComponent = components2.find(item => item.id === itemId);
                            // console.log(matchedComponent, 'matchedComponent')
                            const componentWidth = matchedComponent?.special ? "45%" : "30%";
                            // console.log(componentWidth,'componentWidth')
                            // Retrieve styles from the component's style property
                            // const componentStyles = matchedComponent?.style || {};

                            return (
                                <>
                                    <div id="drop-container" key={index} style={{ width: componentWidth, margin: '8px', cursor: 'grab', height: "fit-content" }} className='DropInnerComp' draggable
                                        onDragStart={(e) => handleContainerDragStart(e, itemId)}
                                        onDrop={(e) => handleContainerDrop(e, index)}
                                        onDragOver={handleContainerDragOver}>
                                        {matchedComponent?.component}
                                    </div>

                                    {/* <div className='DropInnerRowCont'>
                                        <div className='DropRow1'>

                                            {
                                                componentWidth === '30%' &&

                                                <div id="drop-container" key={index} style={{ width: componentWidth, margin: '8px', cursor: 'grab' }} className='DropInnerComp' draggable
                                                    onDragStart={(e) => handleContainerDragStart(e, itemId)}
                                                    onDrop={(e) => handleContainerDrop(e, index)}
                                                    onDragOver={handleContainerDragOver}>
                                                    {matchedComponent?.component}
                                                </div>
                                            }
                                        </div>

                                    </div> */}
                                </>
                            );
                        })}
                    </div>

                </div>

            </div>

        </>
    );
}

export default DragDrop