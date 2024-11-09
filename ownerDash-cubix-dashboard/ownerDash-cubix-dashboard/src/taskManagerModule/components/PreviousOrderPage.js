import React, { useEffect, useState } from "react";
import ic_blue_cube from "../img/ic_blue_cube.png";
import ic_search from "../img/ic_search.png";
import "../css/PreviousOrderPage.css";
import Header from "./Header";
import LoadingUI from "./LoadingUI";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function PreviousOrderPage() {

    const [errorMessage, setErrorMessage] = useState("");
    const [currentClickedItemForViewingLog, setCurrentClickedItemForViewingLog] = useState(0);
    const [showLoadingStateViewLog, setShowLoadingStateViewLog] = useState(false);
    const [showLoadingState, setShowLoadingState] = useState(false);
    const [listOfPreviousOrderState, setListOfPreviousOrderState] = useState([]);
    const [listOfPreviousLogState, setListOfPreviousLogState] = useState([]);
    const [messageToUser, setMessageToUser] = useState("Checking for data");

    const navigate = useNavigate();

    const getAllPreviousOrders = () => {

        const userGroup = localStorage.getItem("cubix_order_taking_logged_in_person_group");

        if (userGroup != null) {

            showHideLoadingScreen();

            if (userGroup.trim() == "WORKER" ||
                userGroup.trim() == "ADMIN" ||
                userGroup.trim() == "VIEW" ||
                userGroup.trim() == "acntsentry" ||
                userGroup.trim() == "SALES" ||
                userGroup.trim() == "EX_SALES") {

                axios.get(`${process.env.REACT_APP_BASE_URL}/Sales_Order/Salesall/ALL`).then((res) => {
                    showHideLoadingScreen();
                    console.log("res", res);
                    setListOfPreviousOrderState(res.data.data);

                    if (res.data == null) {
                        setMessageToUser("0 results found");

                    } else if (res.data.data.length == 0) {
                        setMessageToUser("0 results found");
                    }


                }).catch((err) => {
                    showHideLoadingScreen();
                    console.log("error is ", err)
                });

            }
            else {

                let salesManName = localStorage.getItem("cubix_order_taking_sales_man");

                axios.get(`${process.env.REACT_APP_BASE_URL}/Sales_Order/Get?type=SaleMan&desc=${salesManName}`).then((res) => {
                    showHideLoadingScreen();
                    console.log("res", res);
                    setListOfPreviousOrderState(res.data.data);

                    if (res.data == null) {
                        setMessageToUser("0 results found");

                    } else if (res.data.data.length == 0) {
                        setMessageToUser("0 results found");
                    }


                }).catch((err) => {
                    showHideLoadingScreen();
                    console.log("error is ", err)
                });
            }

        } else {
            setTimeout(() => {
                setErrorMessage("");
            }, 3000)
            setErrorMessage("User group is null, cannot get customer list");
        }

    }

    const showHideLoadingScreen = () => {
        console.log("inside showHideLoadingScreen ")
        setShowLoadingState(prev => !prev);
    }

    const showLoadingForViewLog = () => {
        setShowLoadingStateViewLog(prev => !prev);
    }

    const callPreviousLogApi = (e, orderNumber) => {

        e.stopPropagation();
        showLoadingForViewLog();

        setCurrentClickedItemForViewingLog(orderNumber);

        axios.get(`${process.env.REACT_APP_BASE_URL}/PreviousOrderStatus/Get?type=asda&desc=${orderNumber}`).then((res) => {

            showLoadingForViewLog();
            console.log("res", res);
            setListOfPreviousLogState(res.data.data);

            if (res.data == null) {
                setMessageToUser("0 results found");
                if (res.data.length == 0) {
                    setMessageToUser("0 results found");
                }
            }


        }).catch((err) => {
            showLoadingForViewLog();
            console.log("error is ", err)
        });

    }

    useEffect(() => {

        getAllPreviousOrders();
    }, []);

    const editQuotationClicked = (numberOfQuotation, account_num, c_name)=>{
        navigate(`/edit_quotation?q_num=${numberOfQuotation}&acc_num=${account_num}&c_name=${c_name}`)
    }

    const pullQuotationClicked = (numberOfQuotation)=>{
        navigate(`/pull_quotation?q_num=${numberOfQuotation}`)
    }

    return (
        <div className="PreviousOrderPage-root-container">

            <div className="PreviousOrderPage-layer-1">
                <img src={ic_blue_cube} />
            </div>

            <div className="PreviousOrderPage-layer-2 ">
                <Header />

                <h4>Previous Order</h4>
                <div className="PreviousOrderPage-layer-2-underline"></div>

                {
                    errorMessage != null ?
                        errorMessage.length > 0 && <div className="PreviousOrder-errorMessageContainer">
                            <p>
                                {errorMessage}
                            </p>
                        </div>
                        :
                        null
                }

                <div className="PreviousOrderPage-layer-2-list-container mt-3">
                    {
                        listOfPreviousOrderState != null ?
                            listOfPreviousOrderState.length > 0 ?
                                listOfPreviousOrderState.map((item, index) => {
                                    return (
                                        <div>
                                            <Link className="PreviousOrderPage-single-item-link" key={item.so_no} to={`/previous-order-details/${item.so_no}`} state={{ data: { company_name_from_parent: item.accdesc, company_account_from_parent: item.account } }}>
                                                <div className="PreviousOrderPage-single-item-link-child-card p-2">
                                                    <div className="PreviousOrderPage-single-item-card-child">
                                                        <div className="PreviousOrderPage-single-item-name-id-container">
                                                            <span className="PreviousOrderPage-so-number-container me-2">{item.so_no}</span>
                                                            <span className="PreviousOrderPage-so-description">
                                                                {item.accdesc}
                                                            </span>
                                                        </div>
                                                        <span className="PreviousOrderPage-single-item-order-status">current status : {item.S_orderStatus}</span>

                                                    </div>
                                                </div>
                                            </Link>
                                            <div className="view-log-button-container">

                                                <button className="View-status-log-button" onClick={(e) => callPreviousLogApi(e, item.so_no)}>View Status log</button>


                                                <div className="my-1">
                                                    <button className="Edit-pull-quotation-button" onClick={()=>editQuotationClicked(item.so_no, item.account, item.accdesc)}>Edit Quotation</button>
                                                    <button  className="ms-1 Edit-pull-quotation-button" onClick={()=>pullQuotationClicked(item.so_no)}>Pull Quotation</button>
                                                </div>
                                                {
                                                    item.so_no == currentClickedItemForViewingLog ?

                                                        <div>
                                                            <div>
                                                                {
                                                                    showLoadingStateViewLog ? <p>Loading</p> : null
                                                                }
                                                            </div>
                                                            <div>
                                                                {
                                                                    listOfPreviousLogState != null ?
                                                                        listOfPreviousLogState.map((item) => {

                                                                            return (
                                                                                < div className="Previous_order_page_order_log_single_row" >
                                                                                    <span>{item.User_name + " " + item.Datetime}</span>
                                                                                    <p> {item.StatusTo}</p>


                                                                                </div>
                                                                            )

                                                                        })
                                                                        :
                                                                        <p>No data to show</p>
                                                                }
                                                            </div>
                                                        </div>
                                                        :

                                                        null

                                                }

                                            </div>
                                        </div>
                                    )
                                })
                                :
                                <p className="PreviousOrderPage-empty-state">{messageToUser}</p>
                            :
                            <p className="PreviousOrderPage-empty-state">{messageToUser}</p>
                    }
                </div>
            </div>

            {
                showLoadingState &&
                <div className="LoadingScreen-root-conatiner">
                    <div className="LoadingScreen-root-conatiner-child-card">
                        <LoadingUI />
                    </div>
                </div>
            }

        </div >
    )

}

export default PreviousOrderPage;