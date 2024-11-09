

import React, { useEffect, useRef, useState } from "react";
import "./PickingListDetails.css"
import ic_current_selected_part_number from "../img/ic_current_selected_part_number.png";
import ic_delete_carton from "../img/ic_delete_carton.png";
import ScanPopupSingleItem from "../ScanPopupSingleItem/ScanPopupSingleItem"
import axios from "axios";
import { useLocation } from "react-router-dom";
import ic_down_dropdown from "../img/ic_down_dropdown.png";
import ic_equal_to from "../img/ic_equalt_to.png";
import ic_qr_code from "../img/ic_qr_code.png";
import ic_download from "../img/ic_download.png";
import * as htmlToImage from "html-to-image";
import QRCode from "react-qr-code";
import NavBarMob from "../../NavBarMob/NavBarMob";



function PickingListDetails() {

    const canvasRef = useRef()

    const qrCodeBigImageRef = useRef(null)
    const currentCartoNumberOfSelectedQrcode = useRef(null)
    const currentIndexOfSelectedQrcode = useRef(null)

    const [showBigQrCode, setShowBigQrCode] = useState(false)

    const qrCodeRef = useRef(new Array());

    const downloadQRCode = (clickedOnThisCaronNumber, carton_number) => {

        console.log(" clickedOnThisCaronNumber, carton_number ", clickedOnThisCaronNumber, carton_number)

        htmlToImage
            .toPng(qrCodeRef.current[clickedOnThisCaronNumber])
            .then(function (dataUrl) {
                const link = document.createElement("a");
                link.href = dataUrl;
                link.download = `qr-code-carton-${carton_number}.png`;
                link.click();
            })
            .catch(function (error) {
                console.error("Error generating QR code:", error);
            });
    };

    const copyofFilteredCartonWithPartnameRef = useRef();
    const [showCartonDropDown, setShowCartonDropDown] = useState(false);
    const [currentSelectedCarton, setCurrentSelectedCarton] = useState("all");
    const [filteredCartonWithPartname, setFilteredCartonWithPartname] = useState(null)
    const [filteredCartonListArray, setFilteredCartonListArray] = useState(null)
    const [isCalllingCartonListAPI, setISCalllingCartonListAPI] = useState(false)
    const [cartonListArray, setCartonListArray] = useState(null)
    const [isCallingAPI, setISCalllingAPI] = useState(false);

    const location = useLocation()

    const queryParams = new URLSearchParams(location.search)

    const pickNoFromUrl = queryParams.get("pickno");

    console.log("pick no from before page ", queryParams.get("pickno"))

    const [itemsInThisPickingList, setItemsInThisPickingList] = useState(null)
    const previousInputBoxCharacterLengthRef = useRef(0)
    const selectedValueRef = useRef()
    const [scannedItemNotInListMessage, setScannedItemNotInListMessage] = useState("")
    const [currentScannedItem, setCurrentScannedItem] = useState("")
    const [showHideScanPopupState, setShowHideScanPopupState] = useState(false);
    const [noCartonSelectedMessage, setNoCartonSelectedMessage] = useState("")
    const [noItemSelectedMessage, setNoItemSelectedMessage] = useState("")
    const [quantityExceededMessage, setQuantityExceededMessage] = useState("")
    const [showHideCartonList, setShowHideCartonList] = useState(false)
    const [currentSelectedBox, setCurrentSelectedBox] = useState(null)
    const [showItemDropDown, setShowItemDropDown] = useState(false)
    const [selectedPartNumber, setSelectedPartNumber] = useState("")
    const [selectedPartDescription, setSelectedPartDescription] = useState("")
    const [cartonNumber, setCartonNumber] = useState("");
    const [packingQuantity, setPackingQuantity] = useState("");

    //carton dataFromApiay object template
    let initialCartonObjectArray = [{
        carton_number: 1,
        item_dataFromApiay: [{ item_code: "123", part_quantity_in_carton: 3 }]
    },
    {
        carton_number: 2,
        item_dataFromApiay: [{ item_code: "123", part_quantity_in_carton: 4 },
        { item_code: "456", part_quantity_in_carton: 5 }]
    },
    {
        carton_number: 9,
        item_dataFromApiay: [{ item_code: "789", part_quantity_in_carton: 2 }]
    },
    {
        carton_number: 10,
        item_dataFromApiay: [{ item_code: "123", part_quantity_in_carton: 2 }]
    }
    ]

    const [cartonArray, setCartonArray] = useState(initialCartonObjectArray)

    // template of carton items 
    let initialTemplateObject = {
        carton_number: "c1",
        items_in_carton: [{ code: "123", description: "oil seal camry", qty: 10, qty_in_carton: 4 }],
    }

    const cartonList = [initialTemplateObject]

    let initialParts = [
        { code: "123", description: "oil seal camry", qty: 10, },
        { code: "456", description: "shock absorber hilux", qty: 10, },
        { code: "789", description: "brake disc corolla", qty: 10, }]

    const [itemsInPickingList, setItemsInPickingList] = useState(initialParts)

    // local storge data
    const selectedCompanyString = localStorage.getItem("selectedCompany");

    const selectedCompany = JSON.parse(selectedCompanyString);

    const cmpcode = selectedCompany && selectedCompany.cmpcode;
    const publick = selectedCompany && selectedCompany.publick;
    const privatek = selectedCompany && selectedCompany.privatek;




    const cartonExchange = (partNumber, carton_number, packing_quantity) => {

        console.log("partNumber, carton_number, packing_quantity", partNumber, carton_number, packing_quantity)

        let findIfBoxIsThere = cartonArray.findIndex((item) => {
            return item.carton_number == carton_number
        })

        let mappedArray = []

        if (findIfBoxIsThere >= 0) {

            mappedArray = cartonArray.map((item) => {

                console.log("box in carton array ", item)

                if (item.carton_number == carton_number) {

                    console.log("found the box ", item)

                    let indexOItem = item.item_array.findIndex((item) => {
                        return item.item_code == partNumber
                    })

                    console.log(" indexOItem ", indexOItem)

                    let mappedParts = [];

                    if (indexOItem >= 0) {

                        mappedParts = item.item_array.map((partInside) => {

                            if (partInside.item_code == partNumber) {

                                //if current typed quantity doesnot exceed order qty in one carton then update


                                let filteredItemList = itemsInPickingList.filter((item) => {
                                    return item.code == partNumber
                                })


                                if (filteredItemList.length > 0) {
                                    let partsQuantityOrdered = filteredItemList[0].qty

                                    if (partsQuantityOrdered >= packing_quantity) {
                                        console.log(" partsQuantityOrdered >= packing_quantity ")

                                        // also sum of item from all cartons also dont have to exceed

                                        let filteredCartonWithThisItem = cartonArray.filter((item) => {
                                            return (item.item_array.findIndex((item) => item.item_code == partNumber) >= 0)
                                        })

                                        console.log(" filteredCartonWithThisItem.item_array ", filteredCartonWithThisItem)

                                        let sumOfAllPackedQauntity = filteredCartonWithThisItem.reduce((acc, item, index) => {

                                            console.log(" outerAcc ", acc, index)
                                            return acc + item.item_array.reduce((accInItemArray, currInItemArray) => {
                                                console.log(" innerACC ", accInItemArray + currInItemArray.part_quantity_in_carton, index)
                                                if (currInItemArray.item_code == partNumber) {
                                                    return accInItemArray + currInItemArray.part_quantity_in_carton
                                                } else {
                                                    return accInItemArray
                                                }

                                            }, 0)
                                        }, 0)

                                        console.log("filteredCartonWithThisItem and sumOfAllPackedQauntity", filteredCartonWithThisItem, sumOfAllPackedQauntity, packingQuantity)

                                        let temporarySum = sumOfAllPackedQauntity + packingQuantity;

                                        if (partsQuantityOrdered >= temporarySum) {
                                            return { ...partInside, part_quantity_in_carton: packing_quantity }
                                        } else {
                                            console.log(" sumOfAllPackedQauntity + packingQuantity is > sumOfAllPackedQauntity")
                                            return partInside
                                        }


                                    } else {
                                        return partInside
                                    }
                                }



                                // else no need to update 
                            } else {
                                return partInside
                            }

                        })

                    } else {

                        mappedParts = [...item.item_array, { item_code: partNumber, part_quantity_in_carton: packing_quantity }]
                    }



                    console.log(" mappedParts ", mappedParts)

                    return { ...item, item_array: mappedParts }


                } else {
                    return item
                }
            })
        } else {

            let newCartonObject = {
                carton_number: carton_number,
                item_array: [{ item_code: partNumber, part_quantity_in_carton: packing_quantity }]
            }

            mappedArray = [...cartonArray, newCartonObject]
        }


        console.log("mappedArray ", mappedArray)

        setCartonArray(mappedArray)

    }

    const removeItemExchange = (partNumber, carton_number) => {

        console.log("partNumber, carton_number", partNumber, carton_number)

        let mappedArray = cartonArray.map((item) => {

            console.log("box in carton array ", item)

            if (item.carton_number == carton_number) {

                console.log("found the box ", item)

                let indexOItem = item.item_array.findIndex((item) => {
                    return item.item_code == partNumber
                })

                console.log(" indexOItem ", indexOItem)

                let mappedParts = [];

                if (indexOItem >= 0) {

                    mappedParts = item.item_array.filter((partInside) => {

                        if (partInside.item_code != partNumber) {
                            return partInside
                        }

                    })

                }

                console.log(" mappedParts ", mappedParts)

                return { ...item, item_array: mappedParts }


            } else {
                return item
            }
        })

        console.log("mappedArray ", mappedArray)

        let checkedForEmptyCarton = mappedArray.filter((item) => {
            return item.item_array.length > 0
        })

        setCartonArray(checkedForEmptyCarton)

    }

    const clickedOnSave = () => {
        cartonExchange(selectedPartNumber, cartonNumber, packingQuantity)
    }

    const handleOnChangeCartonNumber = (e) => {
        setCartonNumber(e.target.value)
    }

    const handleOnChangePackingQuantity = (e) => {
        setPackingQuantity(Number(e.target.value))
    }



    const clickedOnshowHideCartonList = () => {
        setShowHideCartonList(prev => !prev)
    }

    const sendPartsQuantityToAPI = () => {

        const objectToSendToApi = {
            deptno: "",
            plno: pickNoFromUrl,
            cartonno: cartonNumber,
            qty: "",
            packQty: packingQuantity
        }



    }

    useEffect(() => {

        if (currentScannedItem != null) {
            if (currentScannedItem != "") {

                let filteredItem = itemsInThisPickingList.filter((item) => {
                    return item.Code == currentScannedItem
                })

                if (filteredItem.length > 0) {
                    setSelectedPartNumber(currentScannedItem)
                    setSelectedPartDescription(filteredItem[0].Description)
                } else {
                    setScannedItemNotInListMessage("Scanned item not in Picking List")
                    return
                }
            }

        }

    }, [currentScannedItem])



    const validateAfterSavingPartQty = () => {
        console.log("selectedPartNumber, cartonNumber, packingQuantity ", selectedPartNumber, cartonNumber, packingQuantity);


        if (selectedPartNumber == "") {
            setNoItemSelectedMessage("Please select item")
            return
        }

        if (cartonNumber == "") {
            setNoItemSelectedMessage("Please enter carton number")
            return
        }

        if (packingQuantity == "") {
            setNoItemSelectedMessage("Please enter quantity")
            return
        }

        else {
            let filteredItems = itemsInThisPickingList.filter((item) => {
                return item.Code == selectedPartNumber
            })

            console.log("filteredItems ", filteredItems)
            if (filteredItems[0]['Inv Qty'] >= (packingQuantity + filteredItems[0]['Pck Qty'])) {
                // call API 
                sendQuantityToApi(filteredItems[0]['Inv Qty'],)
            } else {
                setQuantityExceededMessage("Please enter quantity less than ordered")
            }
        }



    }

    const clickedOnScanButton = () => {
        setShowHideScanPopupState(prev => !prev)
    }

    const succesFullyScanned = (scannedResult) => {


        if (scannedResult.length > 0) {

            console.log("PhysicalStockHome scannedResult ", scannedResult);

            setShowHideScanPopupState(false)

            setCurrentScannedItem(scannedResult)

        }
        else {
            clickedOnScanButton();
            console.log("zero character")
            setShowHideScanPopupState(false)
        }
    }


    const handleOnChangeScannerInput = (e) => {
        console.log("handleOnChange event ", e.target.value.length)

        if (e.target.value.length - previousInputBoxCharacterLengthRef.current > 1) {
            console.log(">> than 1 character and input empty so either barcode or autosuggestion")
            succesFullyScanned(e.target.value)
        } else {
            console.log("user entry")

        }

        previousInputBoxCharacterLengthRef.current = e.target.value.length;

    }

    const callApiToGetPickingListDetails = () => {

        setISCalllingAPI(true)

        let deptNo = 'BR1';

        let encodedDeptNo = encodeURIComponent(deptNo)

        let url = `https://cubixweberp.com:199/api/Pick/ShowPickItem?cmpcode=${cmpcode}&guid=${privatek}&mod=PICK_ITEM&deptno=${encodedDeptNo}&pickno=${pickNoFromUrl}`;

        axios.get(url).then((res) => {
            setISCalllingAPI(false)
            setItemsInThisPickingList(res.data)
        }).catch(
            (err) => {
                console.log("err is ", err)
                setISCalllingAPI(false)
            }
        )
    }

    const groupitemsWithSamepartName = (dataFromApi) => {

        console.log(" groupitemsWithSamepartName array ", dataFromApi)

        let newArray = dataFromApi.map((item) => {

            let cartonRowArray = item.itemWiseArray.reduce((agg, curr) => {

                // console.log(" agg is ", agg)
                // console.log(" curr is ", curr)

                let found = agg.find((x) => {
                    // console.log(" x is ", x)
                    return x.code === curr.code
                });

                // console.log(" found is ", found)

                if (found) {
                    found.entryByStaffArray.push(curr);
                }
                else {
                    agg.push({
                        code: curr.code,
                        entryByStaffArray: [curr]
                    });
                }
                return agg;

            }, []);

            return ({ ...item, itemWiseArray: cartonRowArray })

        })


        setFilteredCartonWithPartname(newArray)

        copyofFilteredCartonWithPartnameRef.current = newArray
    }

    useEffect(() => {

        console.log("currentSelectedCarton ", currentSelectedCarton)

        if (currentSelectedCarton == "all") {
            setFilteredCartonWithPartname(copyofFilteredCartonWithPartnameRef.current)
        } else {
            let getOnlyCurrentCartonList = copyofFilteredCartonWithPartnameRef.current.filter((item) => {
                console.log(" item.cartonno  ", item.cartonno)
                return item.cartonno == currentSelectedCarton
            })

            console.log(" getOnlyCurrentCartonList  ", getOnlyCurrentCartonList)

            setFilteredCartonWithPartname(getOnlyCurrentCartonList)
        }

    }, [currentSelectedCarton])

    const groupitemsWithSameObject = (dataFromApi) => {


        let ans = dataFromApi.reduce((agg, curr) => {

            // console.log(" agg is ", agg)
            // console.log(" curr is ", curr)

            let found = agg.find((x) => {
                // console.log(" x is ", x)
                return x.cartonno === curr.cartonno
            });

            // console.log(" found is ", found)

            if (found) {
                found.itemWiseArray.push(curr);
            }
            else {
                agg.push({
                    cartonno: curr.cartonno,
                    itemWiseArray: [curr]
                });
            }
            return agg;

        }, []);

        //console.log("filtered array " + ans.map((item) => console.log(" item is ", item)));

        setFilteredCartonListArray(ans)

        groupitemsWithSamepartName(ans)
    }

    const getCartonListOfThispicklist = () => {

        setISCalllingCartonListAPI(true)

        let deptNo = 'BR1';

        let encodedDeptNo = encodeURIComponent(deptNo)

        let url = `https://cubixweberp.com:199/api/Pick/ShowCarton?cmpcode=${cmpcode}&guid=${privatek}&mod=PICK_CARTON&deptno=${encodedDeptNo}&pickno=${pickNoFromUrl}`

        axios.get(url).then((res) => {
            setISCalllingCartonListAPI(false)
            setCartonListArray(res.data)
            groupitemsWithSameObject(res.data)
        }).catch(
            (err) => {
                console.log("err is ", err)
                setISCalllingCartonListAPI(false)
            }
        )
    }

    useEffect(() => {
        selectedValueRef.current.focus()

        callApiToGetPickingListDetails()

        getCartonListOfThispicklist()

    }, [])

    const sendQuantityToApi = (inVqty,) => {


        let url = `https://cubixweberp.com:199/api/Pick?cmpcode=${cmpcode}&guid=${privatek}&mod=PICK_INSERT`;

        let objectToSend = [{
            deptno: "BR1",
            plno: pickNoFromUrl,
            cartonno: cartonNumber,
            qty: inVqty,
            packQty: packingQuantity,
            code: selectedPartNumber
        }]

        axios.post(url, objectToSend).then((res) => {
            console.log("res ", res)

            if (res.data.result == "Saved") {
                callApiToGetPickingListDetails()
            }
        }).catch((err) => console.log("err is ", err))
    }

    const updateCurrentCartonRefOfQrcode = (cartonNumber, indexFromClick) => {
        currentCartoNumberOfSelectedQrcode.current = cartonNumber;
        currentIndexOfSelectedQrcode.current = indexFromClick;
    }

    const downloadQR = async (indexFromClick, cartonNumber) => {

        console.log("indexFromClick cartonNumber ", indexFromClick, cartonNumber)
        const svg = qrCodeRef.current[indexFromClick];
        const svgData = new XMLSerializer().serializeToString(svg);
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const img = new Image();

        console.log("img is ", img)


        img.crossOrigin = "anonymous";
        img.onload = () => {
            console.log("image loaded ")
            canvas.width = 500;
            canvas.height = 500;

            ctx.strokeRect(0, 0, canvas.width, canvas.height)
            ctx.fillStyle = "#FFFFFF"
            ctx.fillRect(0, 0, canvas.width, canvas.height)
            ctx.drawImage(img, 60, 40, 360, 360)

            //add text 

            ctx.font = "30px Arial";
            ctx.fillStyle = "#000000"
            ctx.fillText(`carton ${cartonNumber}`, 60, 440);
            //
            const pngFile = canvas.toDataURL("image/png", 1.0)

            const downloadLink = document.createElement("a")
            downloadLink.download = "qrcode"
            downloadLink.href = `${pngFile}`
            downloadLink.target = "_blank"
            document.body.appendChild(downloadLink)
            downloadLink.click()
            document.body.removeChild(downloadLink)

            downloadLink.remove()
        };


        img.src = "data:image/svg+xml;base64," + btoa(svgData)



    };

    return (
        <div>

            <NavBarMob />
            <div className="PickingList-main-container pb-4">

                <div className="PickingListDetails_carton-container">
                    <div className="d-flex justify-content-between container">
                        <h5>Pickinglist details</h5>
                    </div>
                    <div className="mt-2">

                        <div className="PickingListDetails_code_caron_qty_panel container">

                            <div className="container-for-scan-and-dropdown">
                                <div>
                                    <input ref={selectedValueRef} onChange={(e) => handleOnChangeScannerInput(e)} />
                                </div>

                                <div className="d-flex scan_and_select_panel mt-2 picking_list_code_options">

                                    <button className="btn btn-primary" onClick={() => clickedOnScanButton()}>Scan</button>

                                    <label className="mx-1">Or</label>

                                    <div className="item_dropdown_wrapper position-relative ">
                                        <label className="PickingListDetails_select_code_dropdown" onClick={() => setShowItemDropDown(prev => !prev)}>{selectedPartNumber.length > 0 ? <div>{selectedPartNumber} <br /> {selectedPartDescription}</div> : "select"} <img className="dropdown_pick_list_details" src={ic_down_dropdown} /></label>
                                        {
                                            showItemDropDown &&
                                            <span className="span_select_item_code">{itemsInThisPickingList?.map((item) => {
                                                return (<div className="span_select_item_code_single_row" onClick={() => { setSelectedPartNumber(item.Code); setSelectedPartDescription(item.Description); setShowItemDropDown(prev => !prev) }}><div className="search_list_item_code">{item.Code}</div><div className="search_list_item_description"> {item.Description}</div></div>)
                                            })}</span>
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className="PickingListDetails_create_carton_panel">
                                <input placeholder="carton number" onChange={(e) => handleOnChangeCartonNumber(e)} />
                                <input type="number" placeholder="enter qty " onChange={(e) => handleOnChangePackingQuantity(e)} />
                            </div>

                            <div className="PickingListDetails_create_carton_panel_cta">
                                <button className="btn btn-success" onClick={() => validateAfterSavingPartQty()}>Save</button>
                            </div>
                        </div>


                    </div>
                    {/* <div>
                        {
                            cartonList.map((cartonItem) => {
                                return (
                                    <p>{cartonItem.carton_number}</p>
                                )
                            })
                        }
                    </div> */}
                </div>

                <div className="pickinglist_number_panel container mt-3">

                    <label>Picking list number {pickNoFromUrl}</label>

                </div>

                <div className="container mt-2">
                    <h5 className="mt-4">Item List</h5>

                    {
                        isCallingAPI ?
                            <div className="loading-panel mt-4">
                                < div class="spinner-border" role="status">
                                </div>
                                <label className="ms-2 ">Loading</label>
                            </div>
                            :
                            <div className="PickingListDetails_table_holder">
                                <table className="PickingListDetailsTable">
                                    <thead>
                                        <tr>
                                            <th>
                                                Code
                                            </th>
                                            <th>
                                                Description
                                            </th>
                                            <th>
                                                Inv.Qty.
                                            </th>
                                            <th>
                                                Pck.Qty.
                                            </th>
                                            <th>
                                                Cartons
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody className="panel_of_items_and_its_cartons" >
                                        {
                                            itemsInThisPickingList?.map((item) => {
                                                return (


                                                    <tr  >
                                                        <td>
                                                            {
                                                                selectedPartNumber == item.code && <img className="current_selected_part" src={ic_current_selected_part_number} />
                                                            }
                                                            {item.Code}
                                                        </td>
                                                        <td>
                                                            {item.Description}
                                                        </td>
                                                        <td>
                                                            {item['Inv Qty']}
                                                        </td>
                                                        <td>

                                                            {item['Pck Qty']}


                                                        </td>
                                                        <td>

                                                            {item['Carton']}

                                                        </td>
                                                    </tr>


                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                    }

                </div>

                <div className="cartwise-container container mt-4">

                    <div className="carton_wise_heading_and_list_container py-2">
                        <h5 >Cartons</h5>
                    </div>

                    <div className="w-100 d-flex justify-content-between">

                        <div className="d-flex">
                            <label>Select carton </label>

                            <div className="position-relative ms-2">
                                {
                                    <button className="selected_carton_button" onClick={() => setShowCartonDropDown(prev => !prev)}>{currentSelectedCarton} <img className="carton_list_dropdown_img" src={ic_down_dropdown} />  </button>
                                }
                                {
                                    showCartonDropDown &&
                                    <div className="carton_list_dropdown">
                                        {copyofFilteredCartonWithPartnameRef.current?.map((item) => {

                                            return (
                                                <div className="carton_dropdown_item" onClick={() => { setCurrentSelectedCarton(item.cartonno); setShowCartonDropDown(prev => !prev) }}>
                                                    {item.cartonno}
                                                </div>
                                            )

                                        })}
                                    </div>
                                }

                            </div>
                        </div>

                        {
                            currentSelectedCarton != "all" &&

                            <button className="btn btn-warning" onClick={() => setCurrentSelectedCarton("all")}>View all cartons</button>
                        }


                    </div>

                    <div className="cartonwise_table_container mt-2">
                        <table className="cartonwise_table">
                            <thead>
                                <tr>
                                    <th>Carton No.</th>
                                    <th>Code</th>
                                    <th>PackQty</th>
                                </tr>
                            </thead>

                            {
                                isCalllingCartonListAPI ?

                                    <div className="loading-panel mt-4">
                                        < div class="spinner-border" role="status">
                                        </div>
                                        <label className="ms-2 ">Loading</label>
                                    </div>

                                    :
                                    filteredCartonWithPartname != null ?
                                        filteredCartonWithPartname.map((item, index) => {
                                            return (
                                                <>
                                                    <tbody>
                                                        <tr>
                                                            <td className="carton_number_column" rowSpan={item.itemWiseArray.map(item => item.entryByStaffArray.length + 1).reduce((a, b) => a + b, 0) + 1} >
                                                                {item.cartonno}
                                                                <div className="m-2 position-relative" >
                                                                    {

                                                                        <div className="qrcode__download">
                                                                            <span className="qrcode__image" >
                                                                                <QRCode ref={(element) => qrCodeRef.current.push(element)} value={`http://localhost:3000/picking_list_details?pickno=8&cartonno=${item.cartonno}`} size={10} />
                                                                            </span>
                                                                            <button className="btn" onClick={() => { downloadQR(index, item.cartonno) }}><img className="qrcode_download_icon" src={ic_download} /> Download</button>
                                                                            <canvas ref={canvasRef} className="canvas_in_html"></canvas>
                                                                        </div>
                                                                    }
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        {
                                                            item.itemWiseArray.map((itemInside) => {
                                                                return (
                                                                    <>
                                                                        {
                                                                            itemInside.entryByStaffArray.map((objectWise) => {

                                                                                console.log(" objectWise  ", objectWise)

                                                                                return (
                                                                                    <tr>
                                                                                        <td>{objectWise.code}</td>
                                                                                        <td>{objectWise.Packqty}</td>
                                                                                    </tr>
                                                                                )
                                                                            })
                                                                        }
                                                                        <tr colSpan={2} className="total_row_bg_color">
                                                                            <td className="total_row_label"><img src={ic_equal_to} /> </td>
                                                                            <td> {itemInside.entryByStaffArray.reduce((a, b) => a + b.Packqty, 0)}</td>
                                                                        </tr>
                                                                    </>
                                                                )


                                                            }

                                                            )
                                                        }

                                                    </tbody>
                                                </>
                                            )
                                        })

                                        :

                                        <p>No data to show</p>

                            }



                        </table>
                    </div>

                </div>


                {quantityExceededMessage.length > 0 &&
                    <div className="PickingListDetails-Popup-outer">
                        <div className="PickingListDetails-Popup-inner">
                            <div>
                                {quantityExceededMessage}
                            </div>
                            <button className="mt-2 btn btn-warning" onClick={() => setQuantityExceededMessage("")}>OK</button>
                        </div>
                    </div>
                }

                {
                    noCartonSelectedMessage.length > 0 &&
                    <div className="PickingListDetails-Popup-outer">
                        <div className="PickingListDetails-Popup-inner">
                            <div>
                                {noCartonSelectedMessage}
                            </div>
                            <button className="mt-2 btn btn-warning" onClick={() => setNoCartonSelectedMessage("")}>OK</button>
                        </div>
                    </div>
                }

                {
                    noItemSelectedMessage.length > 0 &&
                    <div className="PickingListDetails-Popup-outer">
                        <div className="PickingListDetails-Popup-inner">
                            <div>
                                {noItemSelectedMessage}
                            </div>
                            <button className="mt-2 btn btn-warning" onClick={() => setNoItemSelectedMessage("")}>OK</button>
                        </div>
                    </div>
                }

                {
                    scannedItemNotInListMessage.length > 0 &&
                    <div className="PickingListDetails-Popup-outer">
                        <div className="PickingListDetails-Popup-inner">
                            <div>
                                {scannedItemNotInListMessage}
                            </div>
                            <button className="mt-2 btn btn-warning" onClick={() => setScannedItemNotInListMessage("")}>OK</button>
                        </div>
                    </div>
                }

                {
                    showHideScanPopupState &&
                    <div className="popup-root-container">
                        <ScanPopupSingleItem succesFullyScanned={succesFullyScanned} clickedOnScanButton={clickedOnScanButton} />
                    </div>
                }

                {
                    showBigQrCode &&

                    <div className="PickingListDetails-Popup-outer">
                        <div className="PickingListDetails-Popup-inner">
                            <div className="popup-root qr_code_downloader_container">
                                <p>
                                    <span className="d-flex position-relative icon_of_downloader">
                                        <div class="spinner-border" role="status">
                                        </div>
                                        <img className="qrcode_download_icon position-absolute" src={ic_download} />
                                    </span>


                                    downloading, please wait...</p>
                                <label>carton number {currentCartoNumberOfSelectedQrcode.current} </label>

                                {
                                    currentCartoNumberOfSelectedQrcode.current != null ?
                                        <span className="qrcode__image" ref={qrCodeBigImageRef}>
                                            <QRCode value={`http://localhost:3000/picking_list_details?pickno=8&cartonno=${currentCartoNumberOfSelectedQrcode.current}`} size={150} onLoad={() => downloadQRCode(currentIndexOfSelectedQrcode, currentCartoNumberOfSelectedQrcode)} />
                                        </span>
                                        :
                                        <span>
                                            <label>Something went wrong, please try later</label>
                                        </span>
                                }

                            </div>
                        </div>
                    </div>
                }

            </div>

        </div>
    )
}

export default PickingListDetails;