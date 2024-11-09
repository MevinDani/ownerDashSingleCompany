import React, { useEffect, useState, useRef, useCallback } from "react";
import { QrScanner } from '@yudiel/react-qr-scanner';
import "./ScanPopupSingleItem.css";

function ScanPopupSingleItem(props) {


    const scannerPausedRef = useRef(false)

    const { succesFullyScanned, clickedOnScanButton } = props
    const rootLayoutRef = useRef();

    // when qr code is scanned result comes here 
    // if there is any change in value setShowScannedDetailsPopup is called
    // till API call response even if user shows same qr code multiple times
    // no problem because no change of state 
    // After API result popup is closed

    let releaseScannerTimer = null;

    const releaseScanner = () => {
        releaseScannerTimer = setTimeout(() => {
            console.log("inside setTimeout ofrelaseScanner")
            scannerPausedRef.current = false;
        }, 5000)
    }

    const barcodeScanned = async (result) => {

        if (!scannerPausedRef.current) {

            console.log("QrScanner ", result)

            // play barcode beep sound
            // in apple ipad safari browser issue in playing sound, NotAllowedError user denied permission

            try {
                let audio = new Audio("/barcode_scan_beep_sound.mp3")
                await audio.play()

            } catch (err) {
                // alert(`err is ${err}`)
            }

            succesFullyScanned(result)
            scannerPausedRef.current = true;
            releaseScanner()

        } else {
            console.log(":P :P Scanner paused please wait ")
        }
    }

    useEffect(() => {

        return () => {
            if (releaseScannerTimer != null) {
                clearTimeout(releaseScannerTimer)
            }

        }
    }, [])

    return (
        <div className="AdminScanPage-root-container" ref={rootLayoutRef}>

            <div className="Home-inner-container">

                <div className="Home-header-container container p-2">
                    <div>
                        <h5>Scan Qr code</h5>
                        <p>Show your QR code near camera</p>
                    </div>

                    <span>
                        <button onClick={clickedOnScanButton} className="btn btn-primary">
                            Close
                        </button>
                    </span>

                </div>

                <div className="QrScannerWrapper mx-auto">
                    <QrScanner
                        constraints={{ facingMode: 'environment', }}
                        onDecode={(result) => barcodeScanned(result)}
                        onError={(error) => { console.log(error?.message) }}

                    />
                </div>

            </div>


        </div>
    )
}

export default ScanPopupSingleItem;