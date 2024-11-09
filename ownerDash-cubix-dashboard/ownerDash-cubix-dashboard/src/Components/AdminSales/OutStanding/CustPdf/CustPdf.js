import React, { useState, useEffect, useRef } from 'react';
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import './CustPdf.css'
import { RotatingLines } from 'react-loader-spinner'
import { useReactToPrint } from "react-to-print"


const CustPdf = ({ accountNo, fromDate, toDate }) => {
    const [data, setData] = useState([]);

    const pdfRef = useRef()

    const tableRef = useRef()

    useEffect(() => {
        setData([])
        const fetchData = async () => {
            try {
                // Fetch data from the API
                const response = await fetch(`https://api-eproc.premierauto.ae/api/Statements/outstandingaccount?Cust=${accountNo}&dateStart=${fromDate}&dateEnd=${toDate}`);
                if (response.ok) {
                    const result = await response.json();
                    console.log(result, 'result')
                    setData(result);
                } else {
                    console.error(`Failed to fetch data. Status code: ${response.status}`);
                    setData(['no data available']);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setData(['no data available']);
            }
        };

        fetchData();
    }, [accountNo]);

    const generateTablePdf = useReactToPrint({
        content: () => tableRef.current,
        documentTitle: "UserData",
        onAfterPrint: () => alert('Data saved')
    })

    const jspdfTable = () => {
        const doc = new jsPDF();

        // Set startY to a value that allows for page breaks
        const startY = 10;

        doc.autoTable({ html: '#my-table', startY });

        doc.save('table.pdf');
    }

    const downLoadPdf1 = () => {
        const input = pdfRef.current;
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4', true);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            const imgX = (pdfWidth - imgWidth * ratio) / 2;
            const imgY = 30;
            pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
            pdf.save('invoice.pdf');
        });
    }

    const downLoadPdf = () => {
        const input = pdfRef.current;
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            console.log(imgData)
            const pdf = new jsPDF('p', 'mm', 'a4', true);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = pdfWidth;  // Set imgWidth to the full width of the PDF
            const imgHeight = (canvas.height / canvas.width) * imgWidth;  // Maintain aspect ratio
            const ratio = imgWidth / canvas.width;

            let imgY = 30;
            let remainingHeight = pdfHeight - imgY;

            while (remainingHeight < imgHeight) {
                pdf.addPage();
                imgY = 10;  // Reset imgY for the new page
                remainingHeight = pdfHeight - imgY;
            }

            pdf.addImage(imgData, 'PNG', 0, imgY, imgWidth, imgHeight);

            // pdf.save('invoice.pdf');
        });
    };


    const downLoadPdf2 = () => {
        const input = pdfRef.current;
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4', true);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);

            // Split table data into lines
            const tableData = data.length > 0 && data.map((item) => [
                item.INVDATE,
                item.INV,
                item.DESCRIPTION,
                item.DEBIT,
                item.CREDIT,
                item.BALANCE,
            ]);

            // Calculate the height of a single row in the PDF
            const rowHeight = 10; // Adjust as needed

            // Calculate the number of rows that can fit on a single page
            const rowsPerPage = Math.floor((pdfHeight - 30) / rowHeight);

            let position = 30; // Start from 30mm from top
            let currentPage = 1;

            // Split the table data into pages
            tableData && tableData.forEach((rowData, rowIndex) => {
                if (rowIndex % rowsPerPage === 0 && rowIndex !== 0) {
                    pdf.addPage();
                    position = 10; // Reset position for the new page
                    currentPage++;
                }

                rowData.forEach((cell, cellIndex) => {
                    pdf.text(`${cell}`, 10 + cellIndex * 40, position);
                });

                position += rowHeight;
            });

            pdf.save('invoice.pdf');
        });
    };

    const generatePdf = () => {
        const doc = new jsPDF();
        // doc.addPage();
        const fontSize = 10;
        doc.setFontSize(fontSize);

        // Print the content above the table
        doc.text('STATEMENT OF ACCOUNT', 10, 10);
        doc.text(`TRN: ${data.length > 0 && data[0].TRN}`, 10, 20);
        doc.text(`Account # ${data.length > 0 && data[0].ACCOUNT}`, 10, 30);
        doc.text(`Name: ${data.length > 0 && data[0].NAME}`, 10, 40);
        doc.text(`Address: ${data.length > 0 && data[0].ADDRESS}`, 10, 50);

        // // Print the table
        // const tableData = data.map(item => [
        //     item.INVDATE,
        //     item.INV,
        //     item.DESCRIPTION,
        //     item.DEBIT,
        //     item.CREDIT,
        // ]);

        // doc.autoTable({
        //     head: [['INVDATE', 'INV', 'DESCRIPTION', 'DEBIT', 'CREDIT']],
        //     body: tableData,
        //     startY: 60, // Adjust startY based on the space used for the content above the table
        // });

        const startY = 60;

        doc.autoTable({ html: '#my-table', startY });

        doc.save('statement.pdf');

        // doc.save('table.pdf');
    };

    // console.log(data, 'data')

    return (
        <>
            <div className='DownlaodButton'>
                {/* <button className='btn btn-primary' onClick={downLoadPdf}>DownLoad PDF</button> */}
                {/* <button className='btn btn-primary' onClick={generateTablePdf}>DownLoad PDF</button> */}
                <button className='btn btn-primary' onClick={generatePdf}>DownLoad PDF</button>
            </div>

            <div className='pdfStatementCont' ref={tableRef}>

                <hr className='topHr' />

                <div className='statementHead'>
                    <div>STATEMENT OF ACCOUNT</div>
                </div>

                <div className='statementHead'>
                    <div>
                        <span>TRN:</span>{'  '}
                        <span>{data.length > 0 && data[0].TRN}</span>
                    </div>
                </div>

                <div className='StatementTopBox'>

                    <div className='STBoxLeft'>
                        <div className='StbHead'>
                            Account # {data.length > 0 && data[0].ACCOUNT}
                        </div>
                        <div style={{ padding: '2px 8px' }}>
                            <div>Name:</div>{'  '}
                            <div>{data.length > 0 && data[0].NAME}</div>
                            <div>Address:</div>{'  '}
                            <div>{data.length > 0 && data[0].ADDRESS}</div>
                        </div>
                    </div>
                    <div className='STBoxRight'>
                        <div className='StbHead'>
                            Statement Information
                        </div>
                        <div className='STBLeftSubDiv'>
                            <div>As On</div>
                            <div>16/Nov/2022</div>
                        </div>
                        <div className='STBLeftSubDiv'>
                            <div>Total Balance</div>
                            <div>351332</div>
                        </div>
                        <div className='STBLeftSubDiv'>
                            <div>Current Balance</div>
                            <div>354441</div>
                        </div>
                        <div className='STBLeftSubDiv'>
                            <div>PDC Inhand</div>
                            <div>354441</div>
                        </div>
                        <div className='STBLeftSubDiv'>
                            <div>Terms</div>
                            <div>354441</div>
                        </div>
                    </div>
                </div>

                <div className='grptableCont custPdf'>

                    {/* <div className='grpTableCover custPdf'> */}
                    <table class="table table-striped table-responsive" id="my-table">
                        {/* <div>test</div> */}
                        <thead>
                            <tr>
                                <th>INVDATE</th>
                                <th>INV</th>
                                <th>DESCRIPTION</th>
                                <th>DEBIT</th>
                                <th>CREDIT</th>
                                <th>BALANCE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.length !== 0 && data[0] !== 'no data available' ? (
                                // {
                                data && data.map((item, index) => (
                                    <tr>
                                        <td>{item.INVDATE}</td>
                                        <td>{item.INV}</td>
                                        {/* <td>{item.LPO}</td> */}
                                        <td>{item.DESCRIPTION}</td>
                                        <td>{item.DEBIT}</td>
                                        <td>{item.CREDIT}</td>
                                        <td>{item.BALANCE}</td>
                                        {/* <td>{item.SALESPERSON}</td>
                                            <td>{item.CRLIMIT}</td>
                                            <td>{item.ADDRESS}</td>
                                            <td>{item.TRN}</td> */}
                                    </tr>
                                ))
                                // }
                            ) : (
                                data[0] === 'no data available' ? (
                                    <div><h5 style={{ color: "red" }}>No data available</h5></div>
                                ) : (
                                    <RotatingLines
                                        visible={true}
                                        height="96"
                                        width="96"
                                        color="grey"
                                        strokeWidth="5"
                                        animationDuration="0.75"
                                        ariaLabel="rotating-lines-loading"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                    />
                                )
                            )}
                        </tbody>
                    </table>
                </div>
                {/* </div> */}

            </div>
        </>
    );
};

export default CustPdf;
