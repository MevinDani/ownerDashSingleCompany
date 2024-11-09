

import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';
import './DebtCredit.css'
import useIntersectionObserver from "../../intrsection/useIntersectionObserver";
import { RotatingLines } from 'react-loader-spinner'


const DataBarChart = ({ data, credTotal }) => {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <BarChart
                width={500}
                height={300}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                data={data}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="ageRange" />
                {/* <XAxis dataKey="ageRange">

                    {credTotal && (
                        <Label
                            value={`Total Amount: ${credTotal}`}
                            offset={0}
                            position="insideBottom"
                            style={{ marginTop: 10, color: 'blue' }}
                        />
                    )}
                </XAxis> */}
                <YAxis />
                <Tooltip />
                <Legend />
                {/* <Bar dataKey="debtors" fill="#8884d8" /> */}
                <Bar dataKey="creditors" fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>
    );
};

const CreditorsAgeing = () => {

    // const isMobile = window.innerWidth <= 767;

    // const isBigScreen = window.innerWidth >= 767

    const [debtorsData, setDebtorsData] = useState([]);
    const [creditorsData, setCreditorsData] = useState([]);
    const [credTotal, setCredTotal] = useState(null)

    const selectedCompanyString = localStorage.getItem("selectedCompany");

    const selectedCompany = JSON.parse(selectedCompanyString);

    const cmpcode = selectedCompany.cmpcode;
    const publick = selectedCompany.publick;
    const privatek = selectedCompany.privatek;

    const fetchCreditorsData = async () => {
        try {
            const response = await fetch(`https://cubixweberp.com:199/api/Dashboard/DashBoard?cmpcode=${cmpcode}&guid=${privatek}&mod=CREDITORS_AGEING&s1=%27%27&s2=%27%27&s3=%27%27&i1=0&i2=0&dt1=11-DEC-2023&dt2=11-DEC-2023`);
            const data = await response.json();
            // console.log(data, 'data')
            setCreditorsData(data);
            setCredTotal(data[0]?.AMOUNT)
        } catch (error) {
            console.error('Error fetching creditors data:', error);
        }
    };


    useEffect(() => {
        fetchCreditorsData();
    }, []);


    const apiCallback = () => {
        const fetchDebtorsData = async () => {
            try {
                const response = await fetch(`https://cubixweberp.com:199/api/Dashboard/DashBoard?cmpcode=${cmpcode}&guid=${privatek}&mod=DEBTORS_AGEING&s1=%27%27&s2=%27%27&s3=%27%27&i1=0&i2=0&dt1=11-DEC-2023&dt2=11-DEC-2023`);
                const data = await response.json();
                setDebtorsData(data);
            } catch (error) {
                console.error('Error fetching debtors data:', error);
            }
        };

        const fetchCreditorsData = async () => {
            try {
                const response = await fetch(`https://cubixweberp.com:199/api/Dashboard/DashBoard?cmpcode=${cmpcode}&guid=${privatek}&mod=CREDITORS_AGEING&s1=%27%27&s2=%27%27&s3=%27%27&i1=0&i2=0&dt1=11-DEC-2023&dt2=11-DEC-2023`);
                const data = await response.json();
                setCreditorsData(data);
            } catch (error) {
                console.error('Error fetching creditors data:', error);
            }
        };

        fetchDebtorsData();
        fetchCreditorsData();
    }

    // const { targetRef, isInViewport } = useIntersectionObserver(
    //     () => {
    //         // Run API callback when in viewport (optional)
    //         apiCallback()
    //     },
    //     {
    //         root: null,
    //         rootMargin: '0px',
    //         threshold: isMobile ? 1 : 0, // Set threshold to 0.5 for mobile, 0 for non-mobile
    //     },
    //     isMobile
    // );

    const transformedData1 = Object.entries(creditorsData[0] || {})
        .filter(([key]) => key !== 'AMOUNT')
        .map(([ageRange, value]) => ({
            ageRange,
            // debtors: value || 0,
            creditors: Math.abs(creditorsData[0]?.[ageRange] || 0), // Make creditors value positive
        }));

    const transformedData = creditorsData.length > 0 && Object.entries(creditorsData[0])
        .filter(([key]) => key !== 'AMOUNT')
        .map(([ageRange, creditors]) => ({
            ageRange,
            creditors: Math.abs(creditors)  // Make sure the creditors value is positive
        }));

    // console.log(transformedData);

    // console.log(transformedData, 'transformedData')
    // console.log(creditorsData, 'creditorsData')
    // console.log(credTotal, 'credTotal')

    return (
        // <div className='CredDebCont' ref={targetRef}>
        <div className='CredDebCont' style={{ minHeight: "430px" }}>
            <span className="card-subtitle-four" id='DebCredText'>Creditors ageing</span>
            {
                transformedData ?
                    <DataBarChart data={transformedData} credTotal={credTotal} /> : <RotatingLines
                        strokeColor="#107F6A"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="40"
                        visible={true}
                    />
            }
        </div>
    );
}

export default CreditorsAgeing