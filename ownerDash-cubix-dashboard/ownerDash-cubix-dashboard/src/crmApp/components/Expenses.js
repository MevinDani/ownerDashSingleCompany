import React, { useCallback, useEffect, useState } from 'react'
import './Expenses.css'
import { useDropzone } from 'react-dropzone'
import { MdFileUpload } from "react-icons/md";
import { Document, Page, pdfjs } from 'react-pdf';
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();


const Expenses = () => {
    const [expenseAmount, setExpenseAmount] = useState('');
    const [preview, setPreview] = useState(null)
    const [pageNumber, setPageNumber] = useState(1);
    const [numPages, setNumPages] = useState(null);
    const [file, setFile] = useState(null);

    const [fileUrl, setFileUrl] = useState(null);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const onDocumentLoadError = (error) => {
        console.error('Error loading PDF:', error);
    };

    const handleInputChange = (e, setter) => {
        setter(e.target.value);
    };

    const handlePageChange = (newPageNumber) => {
        if (newPageNumber >= 1 && newPageNumber <= numPages) {
            setPageNumber(newPageNumber);
        }
    };

    // const onDrop = useCallback((acceptedFiles) => {
    //     const file = acceptedFiles[0];

    //     console.log(file)

    //     if (file) {
    //         const reader = new FileReader();

    //         reader.onload = function () {
    //             setPreview(reader.result);

    //             // Log the result for further debugging
    //             console.log('FileReader result:', reader.result);
    //             console.log('Is ArrayBuffer:', reader.result instanceof ArrayBuffer);
    //             setFile(reader.result);
    //         };

    //         if (file.type.startsWith('image/')) {
    //             // For image files
    //             reader.readAsDataURL(file);
    //         } else if (file.type === 'application/pdf') {
    //             reader.onload = function () {
    //                 // Check if the component is still mounted before setting the state
    //                 if (reader.result instanceof ArrayBuffer && reader.result.byteLength !== 0) {
    //                     setPreview(reader.result);
    //                     setFile(reader.result);
    //                 }
    //             };
    //             reader.readAsArrayBuffer(file);
    //             // reader.readAsDataURL(file);

    //         }

    //         // Log the file information
    //         console.log('File:', file);

    //         // return () => {
    //         //     reader.abort();
    //         // };
    //     }
    // }, []);

    const onDrop = useCallback(async (acceptedFiles) => {
        const file = acceptedFiles[0];

        if (file.type.startsWith('image/')) {
            const reader = new FileReader();

            reader.onload = function () {
                setFileUrl(reader.result);
            };

            reader.readAsDataURL(file);
        } else if (file.type === 'application/pdf') {
            try {
                const url = URL.createObjectURL(file);
                setFileUrl(url);
            } catch (error) {
                console.error('Error creating object URL:', error);
            }
        }
    }, []);

    // useEffect(() => {
    //     console.log('Preview:', preview);
    // }, [preview]);

    console.log(fileUrl)
    console.log(preview)
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
    const pdfDimensions = { width: 100, height: 700 }

    return (
        <div className='ExpenseWrapper'>

            <div className='ExpensesCont'>

                <div className='ExpUploadBox'>
                    <div className='ExpenseText'>Expenses</div>
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        {
                            isDragActive ?
                                <p className='UploadP'><div>Upload</div><MdFileUpload /></p> :
                                <p className='UploadP'><div>Upload</div><MdFileUpload /></p>
                        }
                    </div>
                </div>

                {
                    fileUrl && (
                        <div className='PreviewBox'>
                            {typeof fileUrl === 'string' && fileUrl.startsWith('data:image/') ? (
                                <img src={fileUrl} alt="Preview" style={{ maxWidth: '100%', maxHeight: '300px' }} />
                            ) : (
                                <div>
                                    <h2>PDF Preview:</h2>
                                    <Document file={fileUrl} onLoadSuccess={onDocumentLoadSuccess}>
                                        <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false} scale={0.8} style={{ width: "100%" }}
                                            height={pdfDimensions.height} />
                                    </Document>
                                    <p>
                                        Page {pageNumber} of {numPages}
                                    </p>
                                </div>
                            )}
                        </div>
                    )
                }

                {
                    numPages && numPages > 1 && (
                        <div className='pdfButtons'>
                            {/* Arrow buttons to navigate pages */}
                            <div className='PdfLeft' onClick={() => handlePageChange(pageNumber - 1)}><FaChevronLeft /></div>
                            <div className='PdfRight' onClick={() => handlePageChange(pageNumber + 1)}><FaChevronRight /></div>
                        </div>
                    )
                }


                {/* {
                    preview && (
                        <div className='PreviewBox'>
                            {preview && (
                                <div>
                                    {typeof preview === 'string' && preview.startsWith('data:image/') ? (
                                        <img src={preview} alt="Preview" style={{ maxWidth: '100%', maxHeight: '300px' }} />
                                    ) : (
                                        <div>
                                            <h2>PDF Preview:</h2>
                                            <Document file={{ data: file }} onLoadSuccess={onDocumentLoadSuccess} onLoadError={onDocumentLoadError}>
                                                <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false} />
                                            </Document>
                                            <p>
                                                Page {pageNumber} of {numPages}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )
                } */}

                <div className="input-container">
                    <div className="input-field">
                        <input
                            type="text"
                            id="expenseAmount"
                            className="input"
                            value={expenseAmount}
                            onChange={(e) => handleInputChange(e, setExpenseAmount)}
                            required
                        />
                        <label htmlFor="expenseAmount" className={expenseAmount ? 'label active' : 'label'}>
                            Enter Amount
                        </label>
                    </div>
                </div>

                <div className='TaskRadio'>
                    <div>
                        <input type="radio" id="test1" name="radio-group" />
                        <label for="test1">Taxi</label>
                    </div>
                    <div>
                        <input type="radio" id="test2" name="radio-group" />
                        <label for="test2">Metro</label>
                    </div>
                    <div>
                        <input type="radio" id="test3" name="radio-group" />
                        <label for="test3">Fuel</label>
                    </div>
                    <div>
                        <input type="radio" id="test4" name="radio-group" />
                        <label for="test4">Food</label>
                    </div>
                    <div>
                        <input type="radio" id="test5" name="radio-group" />
                        <label for="test5">Pass</label>
                    </div>
                    <div>
                        <input type="radio" id="test6" name="radio-group" />
                        <label for="test6">Others</label>
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

export default Expenses