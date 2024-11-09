import React, { useEffect, useState } from 'react'
// import './UpdatedDashBoard.css'
import './UpDated2Mason.css'
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
import TopCustomers from '../reusables/TopCustomers';


const UpdatedDashBoard = () => {

    const [selectedItem, setSelectedItem] = useState([])

    const [components, setComponents] = useState([
        { id: 'Bank Balance', component: <BankBalance />, text: 'Example Component', noId: 1, class: 'BankBalance' },
        { id: 'TodaySales', component: <CardThree />, text: 'Example Component', noId: 2, class: "CardThree" },
        { id: 'Total Received PDC', component: <CardFive />, text: 'Example Component', noId: 3, class: "CardFive" },
        { id: 'Total Issued PDC', component: <CardFour />, text: 'Example Component', noId: 4, class: "CardFour" },
        // { id: 'sales', component: <CardThree />, text: 'Example Component' },
        { id: 'CashBalance', component: <CashBalance />, text: 'Example Component', noId: 5, class: "CashBalance" },
        { id: 'BranchWise Sales', component: <DepartmentSales />, text: 'Example Component', noId: 6, class: "DepartmentSales" },
        { id: 'Payables', component: <PaybleCont />, text: 'Example Component', special: true, noId: 7, class: "PaybleCont" },
        { id: 'Total Sales (AED)', component: <LineGraph />, text: 'Example Component', special: true, noId: 8, class: "LineGraph" },
        { id: 'Top 5 Customers', component: <TopCustomers />, text: 'Example Component', special: true, noId: 9, class: "TopCust" },
        { id: 'Top 5 Groups', component: <DoughnutChart />, text: 'Example Component', special: true, noId: 10, class: "DoughnutChart" },
        { id: 'Top 5 Group Codes', component: <TopProductCode />, text: 'Example Component', special: true, noId: 11, class: "TopProductCode" },
        { id: 'Debtors ageing', component: <DebCred />, text: 'Example Component', noId: 12, class: "DebCred" },
        { id: 'Creditors ageing', component: <CredAge />, text: 'Example Component', noId: 13, class: "CredAge" },
        { id: 'Top Sales Man', component: <TopSalesMan />, text: 'Example Component', noId: 14, class: "TopSalesMan" },
        // Add other components with their respective details
    ]);

    useEffect(() => {
        const storedItem = localStorage.getItem('DashItems');

        if (storedItem) {
            const parsedItem = JSON.parse(storedItem);
            // console.log(parsedItem, 'parsedItem');
            setSelectedItem(parsedItem);
        }
    }, []);

    // console.log(selectedItem, 'state')


    return (
        // <div className='UpDashWrapper'>
        //     <div className='UpDashCont'>
        //         <div className='BankBalance'><BankBalance /></div>
        //         <div className='CardThree'><CardThree /></div>
        //         <div className='CashBalance'><CashBalance /></div>
        //         <div className='LineGraph'><LineGraph /></div>
        //         <div className='DepartmentSales'><DepartmentSales /></div>
        //         <div className='PaybleCont'><PaybleCont /></div>
        //         <div className='DoughnutChart'><DoughnutChart /></div>
        //         <div className='TopProductCode'><TopProductCode /></div>
        //         <div className='DebCred'><DebCred /></div>
        //         <div className='CredAge'><CredAge /></div>
        //         <div className='CardFive'><CardFive /></div>
        //         <div className='CardFour'><CardFour /></div>
        //         <div className='TopCust'><TopCust /></div>
        //         <div className='TopSalesMan'><TopSalesMan /></div>
        //     </div>
        // </div>

        <div className='UpDashWrapper'>
            <div className='UpDashCont'>
                {selectedItem.map((item, index) => {
                    // Find the component details based on the item id
                    const componentDetails = components.find(comp => comp.id === item);

                    // Check if the component details are found
                    if (componentDetails) {
                        return (
                            <div key={index} className={componentDetails.class}>
                                {componentDetails.component}
                            </div>
                        );
                    }

                    return null; // Render nothing if component details are not found
                })}
            </div>
        </div>
    )
}

export default UpdatedDashBoard