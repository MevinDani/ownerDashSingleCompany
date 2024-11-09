import React, { useState } from 'react'
import './StockReport.css'
import QuantityAnalysis from './QuantityAnalysis/QuantityAnalysis';
import StockTransferAnalysis from './StockTransferAnalysis/StockTransferAnalysis';


const StockReport = () => {

    const [selectedTab, setSelectedTab] = useState('Quantity')

    const handleTabClick = (tabName) => {
        setSelectedTab(tabName);
    };

    return (
        <div className='SalesInvoiceWrapper'>

            <div className='SalesInvHead'>STOCK REPORT</div>

            <div style={{ backgroundColor: "#F6F8FA" }}>
                <div className='ProductMasterNavTabs'>
                    <ul className="nav  nav-underline" style={{ padding: "4px 8px" }}>
                        <li className="nav-item">
                            <a className={`nav-link ${selectedTab === 'Quantity' ? 'active' : ''}`} onClick={() => handleTabClick('Quantity')}>Quantity Analysis</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${selectedTab === 'StockTransfer' ? 'active' : ''}`} onClick={() => handleTabClick('StockTransfer')}>Stock Transfer Analysis</a>
                        </li>
                    </ul>
                </div>

                {
                    selectedTab === 'Quantity' && <QuantityAnalysis />
                }

                {
                    selectedTab === 'StockTransfer' && <StockTransferAnalysis />
                }
            </div>

        </div>
    )
}

export default StockReport