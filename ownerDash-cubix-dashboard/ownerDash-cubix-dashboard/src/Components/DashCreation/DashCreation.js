import React, { useEffect, useState } from 'react'
import './DashCreation.css'
import BankBalance from '../reusables/BankBalance';
import CardThree from '../Home/CardThree';
import DepartmentSales from '../reusables/DepartmentSales';
import PaybleCont from '../Home/CardTwo';
import LineGraph from '../reusables/LineGraph';
import DoughnutChart from '../reusables/Doughnut';
import TopProductCode from '../reusables/TopProductsCode';
import DebCred from '../Home/DebCred';
import CredAge from '../Home/CredAgeing';
import CardFive from '../Home/CardFive';
import CardFour from '../Home/CardFour';
import TopCust from '../Home/TopCust';
import CashBalance from '../reusables/CashBalance';
import TopSalesMan from '../reusables/TopSalesMan';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const DashCreation = () => {

    const [components, setComponents] = useState([
        { id: 'Bank Balance', component: <BankBalance />, text: 'Example Component', noId: 1 },
        { id: 'TodaySales', component: <CardThree />, text: 'Example Component', noId: 2 },
        { id: 'CashBalance', component: <CashBalance />, text: 'Example Component', noId: 5 },
        { id: 'Total Received PDC', component: <CardFive />, text: 'Example Component', noId: 3 },
        { id: 'Total Issued PDC', component: <CardFour />, text: 'Example Component', noId: 4 },
        // { id: 'sales', component: <CardThree />, text: 'Example Component' },
        { id: 'BranchWise Sales', component: <DepartmentSales />, text: 'Example Component', noId: 6 },
        { id: 'Payables', component: <PaybleCont />, text: 'Example Component', special: true, noId: 7, class: "PaybleCont" },
        { id: 'Total Sales (AED)', component: <LineGraph />, text: 'Example Component', special: true, noId: 8 },
        { id: 'Top 5 Customers', component: <TopCust />, text: 'Example Component', special: true, noId: 9 },
        { id: 'Top 5 Groups', component: <DoughnutChart />, text: 'Example Component', special: true, noId: 10 },
        { id: 'Top 5 Group Codes', component: <TopProductCode />, text: 'Example Component', special: true, noId: 11 },
        { id: 'Debtors ageing', component: <DebCred />, text: 'Example Component', noId: 12 },
        { id: 'Creditors ageing', component: <CredAge />, text: 'Example Component', noId: 13 },
        { id: 'Top Sales Man', component: <TopSalesMan />, text: 'Example Component', noId: 14 },
        // Add other components with their respective details
    ]);

    const [clickedItem, setClickedItem] = useState(null);
    // const [selectedItem, setSelectedItem] = useState([])

    const [selectedItem, setSelectedItem] = useState([
        "Bank Balance",
        "TodaySales",
        "CashBalance",
        "Total Received PDC",
        "Total Issued PDC",
        "BranchWise Sales",
        "Payables",
        "Total Sales (AED)",
        "Top 5 Customers",
        "Top 5 Groups",
        "Top 5 Group Codes",
        "Debtors ageing",
        "Creditors ageing",
        "Top Sales Man"
    ])

    const navigate = useNavigate();

    const handleItemClick = (id) => {
        setClickedItem(id);
    };

    const handleSelectItem = (id) => {
        const isSelected = selectedItem.includes(id);
        if (isSelected) {
            // If the item is already selected, remove it
            const updatedSelects = selectedItem.filter((itemId) => itemId !== id);
            setSelectedItem(updatedSelects);
        } else {
            // If the item is not selected, add it
            const updatedSelects = [...selectedItem, id];
            setSelectedItem(updatedSelects);
        }
    };

    const saveItems = () => {
        if (selectedItem.length !== 0) {
            localStorage.setItem('DashItems', JSON.stringify(selectedItem));
            toast.success('Items have been saved', {
                autoClose: 1500
            })
            navigate('/admin/dashboard')
        }
    }

    const removeAll = () => {
        if (selectedItem.length !== 0) {
            localStorage.removeItem('DashItems');
            toast.error('View Set to Default', {
                autoClose: 1500
            })
            setSelectedItem([])
            navigate('/admin/dashboard')
        }
    }

    useEffect(() => {
        const storedItem = localStorage.getItem('DashItems');

        if (storedItem) {
            const parsedItem = JSON.parse(storedItem);
            console.log(parsedItem, 'parsedItem');
            setSelectedItem(parsedItem);
        } else {
            console.log('Item not found in localStorage');
        }
    }, []);

    // console.log(selectedItem, 'state')


    // const storedItems = JSON.parse(localStorage.getItem('DashItems')) || [];

    // console.log(clickedItem, 'clickedItem')
    // console.log(selectedItem, 'selectedItem')

    return (
        <div className='DashCreationWrapper'>
            <h3 style={{ textAlign: "center", paddingTop: "8px", color: "black" }}>DashBoard Creation</h3>
            <div className='DashCreationCont'>

                <div className='DashCreationLeft'>
                    <h5 style={{ color: "black" }}>Availabe Components</h5>
                    <ol class="list-group list-group-numbered">
                        {
                            components.map((item, index) => (
                                <li className={`list-group-item d-flex justify-content-between align-items-start ${clickedItem === item.id ? 'selected' : ''
                                    }`} onClick={() => handleItemClick(item.id)} key={index}>
                                    <div class="ms-2 me-auto">
                                        <div class="fw-bold">{item.id}</div>
                                        {/* Content for list item */}
                                    </div>
                                    <input type="checkbox" class="form-check-input" id="checkbox1" onClick={() => handleSelectItem(item.id)} checked={selectedItem.includes(item.id)} />
                                </li>
                            ))
                        }
                    </ol>

                </div>

                <div className='DashCreationRight'>
                    <div class="card">
                        <h5 style={{ textAlign: "center" }}>Component View</h5>
                        <div class="card-img-top">
                            {clickedItem !== null && (
                                // Only render the matched component
                                components
                                    .filter((item) => item.id === clickedItem)
                                    .map((matchedComponent, index) => (
                                        <div className={`renderedComp ${matchedComponent.class}`} key={index}>
                                            {matchedComponent.component}
                                        </div>
                                    ))
                            )}
                        </div>
                        <div class="card-body">
                            {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        </div>
                    </div>

                    <div className='SelectedItemsCont'>
                        <div className='siTable'>
                            <table style={{ height: "100%" }} class="table table-light mt-4">
                                <thead>
                                    <tr className="table-secondary">
                                        <td scope="col">S.No</td>
                                        <td scope="col">Selected Items</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        selectedItem?.map((item, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{item}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div style={{ width: "100%", display: "flex", justifyContent: "space-around" }}><button className='btn btn-success' onClick={() => saveItems()}>Save Items</button><button className='btn btn-danger' onClick={() => removeAll()}>Reset All</button></div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DashCreation