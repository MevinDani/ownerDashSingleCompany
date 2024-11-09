import React, { useState } from 'react'
import './Collection.css'

const Collection = () => {
    const [customerName, setCustomerName] = useState('');
    const [collectionAmount, setCollectionAmount] = useState('');

    const handleInputChange = (e, setter) => {
        setter(e.target.value);
    };

    console.log(customerName, collectionAmount)
    return (
        <div className='CollectionWrapper'>

            <div className='CollectionCont'>

                <div className='CollectionText'>Collection</div>

                <div className="input-container">
                    <div className="input-field">
                        <input
                            type="text"
                            id="collectionAmount"
                            className="input"
                            value={collectionAmount}
                            onChange={(e) => handleInputChange(e, setCollectionAmount)}
                            required
                        />
                        <label htmlFor="collectionAmount" className={collectionAmount ? 'label active' : 'label'}>
                            Enter Amount
                        </label>
                    </div>

                    <div className="input-field">
                        <input
                            type="text"
                            id="customerName"
                            className="input"
                            value={customerName}
                            onChange={(e) => handleInputChange(e, setCustomerName)}
                            required
                        />
                        <label htmlFor="customerName" className={customerName ? 'label active' : 'label'}>
                            Enter Customer name
                        </label>
                    </div>
                </div>

                <div className='TaskRadio'>
                    <div>
                        <input type="radio" id="test1" name="radio-group" />
                        <label for="test1">Cash</label>
                    </div>
                    <div>
                        <input type="radio" id="test2" name="radio-group" />
                        <label for="test2">Cheque</label>
                    </div>
                </div>


                <div className='TaskSaveBtton' id='collectionSave'>
                    <div className='save-button'>
                        Save
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collection