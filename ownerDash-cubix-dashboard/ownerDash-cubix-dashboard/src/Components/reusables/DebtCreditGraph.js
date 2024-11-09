import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './DebtCredit.css'
import useIntersectionObserver from "../../intrsection/useIntersectionObserver";
import { RotatingLines } from 'react-loader-spinner'


const DataBarChart = ({ data }) => {
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
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="debtors" fill="#8884d8" />
                {/* <Bar dataKey="creditors" fill="#82ca9d" /> */}
            </BarChart>
        </ResponsiveContainer>
    );
};

const DebtCreditGraph = () => {

    // const isMobile = window.innerWidth <= 767;

    // const isBigScreen = window.innerWidth >= 767

    const [debtorsData, setDebtorsData] = useState([]);
    const [creditorsData, setCreditorsData] = useState([]);

    const selectedCompanyString = localStorage.getItem("selectedCompany");

    const selectedCompany = JSON.parse(selectedCompanyString);

    const cmpcode = selectedCompany.cmpcode;
    const publick = selectedCompany.publick;
    const privatek = selectedCompany.privatek;

    const fetchDebtorsData = async () => {
        try {
            const response = await fetch(`https://cubixweberp.com:199/api/Dashboard/DashBoard?cmpcode=${cmpcode}&guid=${privatek}&mod=DEBTORS_AGEING&s1=%27%27&s2=%27%27&s3=%27%27&i1=0&i2=0&dt1=11-DEC-2023&dt2=11-DEC-2023`);
            const data = await response.json();
            setDebtorsData(data);
        } catch (error) {
            console.error('Error fetching debtors data:', error);
        }
    };
    useEffect(() => {
        fetchDebtorsData();

        // if (window.innerWidth >= 767) {
        //     fetchDebtorsData();
        //     fetchCreditorsData();
        // }
    }, []);

    // const apiCallback = () => {
    //     const fetchDebtorsData = async () => {
    //         try {
    //             const response = await fetch(`https://cubixweberp.com:199/api/Dashboard/DashBoard?cmpcode=${cmpcode}&guid=${privatek}&mod=DEBTORS_AGEING&s1=%27%27&s2=%27%27&s3=%27%27&i1=0&i2=0&dt1=11-DEC-2023&dt2=11-DEC-2023`);
    //             const data = await response.json();
    //             setDebtorsData(data);
    //         } catch (error) {
    //             console.error('Error fetching debtors data:', error);
    //         }
    //     };

    //     const fetchCreditorsData = async () => {
    //         try {
    //             const response = await fetch(`https://cubixweberp.com:199/api/Dashboard/DashBoard?cmpcode=${cmpcode}&guid=${privatek}&mod=CREDITORS_AGEING&s1=%27%27&s2=%27%27&s3=%27%27&i1=0&i2=0&dt1=11-DEC-2023&dt2=11-DEC-2023`);
    //             const data = await response.json();
    //             setCreditorsData(data);
    //         } catch (error) {
    //             console.error('Error fetching creditors data:', error);
    //         }
    //     };

    //     fetchDebtorsData();
    //     fetchCreditorsData();
    // }

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

    // Transform the API data to the format expected by Material-UI Chart
    // const transformedData = Object.entries(debtorsData[0] || {})
    //     .filter(([key]) => key !== 'AMOUNT')
    //     .map(([ageRange, value]) => ({
    //         ageRange,
    //         debtors: value || 0,
    //         creditors: creditorsData[0]?.[ageRange] || 0,
    //     }));
    // Transform the API data to the format expected by Material-UI Chart
    const transformedData1 = Object.entries(debtorsData[0] || {})
        .filter(([key]) => key !== 'AMOUNT')
        .map(([ageRange, value]) => ({
            ageRange,
            debtors: value || 0,
            // creditors: Math.abs(creditorsData[0]?.[ageRange] || 0), // Make creditors value positive
        }));

    const transformedData = debtorsData.length > 0 && Object.entries(debtorsData[0])
        .filter(([key]) => key !== 'AMOUNT')
        .map(([ageRange, debtors]) => ({
            ageRange,
            debtors: Math.abs(debtors)  // Make sure the creditors value is positive
        }));

    // console.log(transformedData)

    return (
        <div className='CredDebCont' style={{ minHeight: "430px" }}>
            <span className="card-subtitle-four" id='DebCredText'>Debtors ageing</span>
            {
                transformedData ?
                    <DataBarChart data={transformedData} /> : <RotatingLines
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

export default DebtCreditGraph