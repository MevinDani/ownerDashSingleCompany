// DroppableContainer.js
import React, { forwardRef } from 'react';
import { useDrop } from 'react-dnd';
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
import './Drop.css'
import Draggable from 'react-draggable';

const DroppableContainer = forwardRef(({ onDrop, children, style }, ref) => {
    const [{ isOver }, drop] = useDrop({
        accept: 'COMPONENT',
        drop: onDrop,
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    });

    const special = 'special'

    const componentMappings = {
        BankBalance: <BankBalance />,
        CardThree: <CardThree />,
        DepartmentSales: <DepartmentSales type={special} />,
        PaybleCont: <PaybleCont />,
        TopCustomers: <TopCustomers type={special} />,
        LineGraph: <LineGraph type={special} />,
        DoughnutChart: <DoughnutChart type={special} />,
        TopProductCode: <TopProductCode type={special} />,
        DebCred: <DebCred type={special} />,
        CredAge: <CredAge type={special} />,
        Notification: <Notification type={special} />,
        CardFive: <CardFive />,
        CardFour: <CardFour />,
        TopCust: <TopCust type={special} />,
        CashBalance: <CashBalance />,
        DoughTc: <DoughTc />
    };

    const createRows1 = (renderedComponents) => {
        const rows = [];
        const numColumns = 3; // Adjust as needed
        let isPreviousSpecial = false;

        for (let i = 0; i < renderedComponents.length; i += numColumns) {
            const rowComponents = renderedComponents.slice(i, i + numColumns);

            // Determine if the row contains a special component
            const isCurrentRowSpecial = rowComponents.some(
                (component) => component.props.children.props.type === 'special'
            );

            // Determine the class for the current row
            const rowClass = isCurrentRowSpecial ? 'DropRowHalf' : 'DropRow';

            rows.push(
                <div key={`row-${i}`} className={rowClass}>
                    {rowComponents.map((component, index) => (
                        <div key={`col-${index}`}>{component}</div>
                    ))}
                </div>
            );

            // Update isPreviousSpecial for the next iteration
            isPreviousSpecial = isCurrentRowSpecial;
        }

        return rows;
    };


    const createRowsO = (renderedComponents) => {
        const rows = [];
        let currentRow = [];
        let isPreviousSpecial = false;
        let specialRow = false

        for (let i = 0; i < renderedComponents.length; i++) {
            const component = renderedComponents[i];

            // Determine if the current component is special
            const isCurrentSpecial = component.props.children.props.type === 'special';

            // If the current row length is 0, you can add elements to it
            if (currentRow.length === 0) {
                currentRow.push(component);
                isPreviousSpecial = isCurrentSpecial;
                console.log("currentRow.length === 0", isCurrentSpecial)
            } else if (currentRow.length < 3 && !isCurrentSpecial) {
                // If adding ordinary elements, you can add up to 3 components to the current row
                currentRow.push(component);
                isPreviousSpecial = isPreviousSpecial || isCurrentSpecial; // Keep it true if any special is encountered
                console.log("currentRow.length < 3 && !isCurrentSpecial", isCurrentSpecial)
            } else if (isCurrentSpecial && currentRow.length < 2) {
                // If adding a special component, that row should have only 2 components
                currentRow.push(component);
                isPreviousSpecial = true;
                console.log("isCurrentSpecial && currentRow.length < 2", isCurrentSpecial)
            } else if ((currentRow.length === 2 && isCurrentSpecial) || currentRow.length === 3) {

                // Determine the class for the current row
                const rowClass = isPreviousSpecial ? 'DropRowHalf' : 'DropRow';

                rows.push(
                    <div key={`row-${rows.length}`} className={rowClass}>
                        {currentRow}
                    </div>
                );

                console.log("currentRow.length === 2 && isCurrentSpecial", isCurrentSpecial)
                currentRow = [];
            } else {
                // Start a new row
                rows.push(
                    <div key={`row-${rows.length}`} className="DropRow">
                        {currentRow}
                    </div>
                );

                currentRow = [component];
                isPreviousSpecial = isCurrentSpecial;
            }
        }

        // Add the last row if it's not empty
        if (currentRow.length > 0) {
            // Determine the class for the last row
            const rowClass = isPreviousSpecial ? 'DropRowHalf' : 'DropRow';

            rows.push(
                <div key={`row-${rows.length}`} className={rowClass}>
                    {currentRow}
                </div>
            );
        }

        return rows;
    };

    const createRows3 = (renderedComponents) => {
        const rows = [];
        let currentRow = [];
        let currentSpecialCount = 0;

        const startNewRow = () => {
            // Determine the class for the current row
            const rowClass = currentSpecialCount > 0 ? 'DropRowHalf' : 'DropRow';

            rows.push(
                <div key={`row-${rows.length}`} className={rowClass}>
                    {currentRow}
                </div>
            );

            currentRow = [];
            currentSpecialCount = 0;
        };

        for (let i = 0; i < renderedComponents.length; i++) {
            const component = renderedComponents[i];
            const isSpecial = component.props.children.props.type === 'special';

            // Start a new row if adding the current component breaks the row conditions
            if (
                (currentRow.length === 3 && !isSpecial) ||
                (currentRow.length === 2 && isSpecial && currentSpecialCount === 2)
            ) {
                startNewRow();
            }

            // Add the component to the current row
            currentRow.push(component);

            // Update special count if the current component is special
            if (isSpecial) {
                currentSpecialCount++;
            }

            // Start a new row if the current row is full
            if (currentRow.length === 3) {
                startNewRow();
            }
        }

        // Add the last row if it's not empty
        if (currentRow.length > 0) {
            startNewRow();
        }

        return rows;
    };

    const createRows = (renderedComponents) => {
        const rows = [];
        let currentRow = [];
        let currentSpecialCount = 0;

        const startNewRow = () => {
            // Determine the class for the current row
            const rowClass = currentSpecialCount > 0 ? 'DropRowHalf' : 'DropRow';

            rows.push(
                <div key={`row-${rows.length}`} className={rowClass}>
                    {currentRow}
                </div>
            );

            currentRow = [];
            currentSpecialCount = 0;
        };

        for (let i = 0; i < renderedComponents.length; i++) {
            const component = renderedComponents[i];
            const isSpecial = component.props.children.props.type === 'special';

            // Start a new row if adding the current component breaks the row conditions
            if (
                (currentRow.length === 3 && !isSpecial) ||
                (currentRow.length === 2 && isSpecial && currentSpecialCount === 1)
            ) {
                startNewRow();
            }

            // Add the component to the current row
            currentRow.push(component);

            // Update special count if the current component is special
            if (isSpecial) {
                currentSpecialCount++;
            }

            // Start a new row if the current row is full
            if (currentRow.length === 3 || (isSpecial && currentSpecialCount === 2)) {
                startNewRow();
            }
        }

        // Add the last row if it's not empty
        if (currentRow.length > 0) {
            startNewRow();
        }

        return rows;
    };



    // Use the createRows function in your component
    const renderedComponents = React.Children.map(children, (child, index) => {
        const componentName = child.props.children.type.name;
        const component = componentMappings[componentName];
        return <div key={`component-${index}`}>{component}</div>;
    });

    // Create rows dynamically
    const rows = createRows(renderedComponents);

    // Log the rendered components for debugging
    // console.log('Rendered Components:', renderedComponents);

    // console.log(renderedComponents)

    return (
        <div
            className='DropWrapper'
            ref={(node) => {
                ref.current = node;
                drop(node);
            }}
            style={{
                // display: 'grid',
                // gridTemplateColumns: 'repeat(3, 1fr)',
                // gap: '10px', // adjust as needed
                // alignItems: 'center',
                // flexWrap: 'wrap',
                border: isOver ? '2px dashed #000' : '1px solid #ccc',
                padding: '16px',
                // width: "85%",    
                // ...style,
            }}
        >
            {/* {children} */}
            <div className='DropSubCont'>{rows}</div>
            {/* <div className='DropSubCont'>
                <div className='DropRowOne'>
                    <div>{renderedComponents[0]}</div>
                    <div>{renderedComponents[1]}</div>
                    <div>{renderedComponents[2]}</div>
                </div>
                <div className='DropRowTwo'>
                    <div>{renderedComponents[3]}</div>
                    <div>{renderedComponents[4]}</div>
                    <div>{renderedComponents[5]}</div>
                </div>
                <div className='DropRowThree'>
                    <div>{renderedComponents[6]}</div>
                    <div>{renderedComponents[7]}</div>
                    <div>{renderedComponents[8]}</div>
                </div>
                <div className='DropRowFour'>
                    <div>{renderedComponents[9]}</div>
                    <div>{renderedComponents[10]}</div>
                    <div>{renderedComponents[11]}</div>
                </div>
            </div> */}


            {/* <div className='DropSubCont'>
               
                {
                    row1.length === 1 && (
                        <div className='row1'>
                            <div>{row1[0]}</div>
                            <div>{row1[1]}</div>
                            <div>{row1[2]}</div>
                        </div>
                    )
                }
                {
                    row1.length === 2 && (
                        <div className='row1'>
                            <div>{row1[0]}</div>
                            <div>{row1[1]}</div>
                        </div>
                    )
                }

                {
                    row2.length === 1 && (
                        <div className='row2'>
                            <div>{row2[0]}</div>
                            <div>{row2[1]}</div>
                            <div>{row2[2]}</div>
                        </div>
                    )
                }
                {
                    row2.length === 2 && (
                        <div className='row2'>
                            <div>{row2[0]}</div>
                            <div>{row2[1]}</div>
                        </div>
                    )
                }
            </div> */}
        </div>
    );
});


export default DroppableContainer;
