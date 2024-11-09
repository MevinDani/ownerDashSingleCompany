import React, { useState } from 'react'
import './StockLedger.css'
import Ledger from './Ledger/Ledger';
import Movement from './Movement/Movement';
import Ageing from './Ageing/Ageing';


const StockLedger = () => {

    const [selectedTab, setSelectedTab] = useState('Ledger')

    const handleTabClick = (tabName) => {
        setSelectedTab(tabName);
    };

    return (
        <div className='SalesInvoiceWrapper'>

            <div className='SalesInvHead'>STOCK LEDGER & MOVEMENT</div>

            <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <p className='SLMItemHead'>ITEM ANALYSIS</p>
            </div>

            <div style={{ backgroundColor: "#F6F8FA" }}>
                <div className='ProductMasterNavTabs'>
                    <ul className="nav  nav-underline" style={{ padding: "4px 8px" }}>
                        <li className="nav-item">
                            <a className={`nav-link ${selectedTab === 'Ledger' ? 'active' : ''}`} onClick={() => handleTabClick('Ledger')}>Stock Ledger</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${selectedTab === 'Movement' ? 'active' : ''}`} onClick={() => handleTabClick('Movement')}>Stock Movement</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${selectedTab === 'Ageing' ? 'active' : ''}`} onClick={() => handleTabClick('Ageing')}>Stock Ageing</a>
                        </li>
                    </ul>
                </div>

                {
                    selectedTab === 'Ledger' && <Ledger />
                }

                {
                    selectedTab === 'Movement' && <Movement />
                }

                {
                    selectedTab === 'Ageing' && <Ageing />
                }
            </div>

        </div>
    )
}

export default StockLedger