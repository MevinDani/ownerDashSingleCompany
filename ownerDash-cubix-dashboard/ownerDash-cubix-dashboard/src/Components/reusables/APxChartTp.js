import React from 'react'
import ReactApexChart from 'react-apexcharts';
import './ApexChartD.css'

const APxChartTp = ({ topProducts }) => {
    if (!topProducts || topProducts.length === 0) {

        return null;
    }

    const options = {
        labels: topProducts && topProducts.map(item => item.CODE),
        chart: {
            type: 'donut',
        },
        legend: {
            formatter: function (val, opts) {
                return val + " - " + opts.w.globals.series[opts.seriesIndex]
            }
        },
        responsive: [{
            breakpoint: 3000,
            options: {
                chart: {
                    width: 400
                },
                legend: {
                    position: 'bottom'
                }
            }
        }, {
            breakpoint: 1350,
            options: {
                chart: {
                    width: 350
                },
                legend: {
                    position: 'bottom'
                }
            }
        },
        {
            breakpoint: 980,
            options: {
                chart: {
                    width: 300
                },
                legend: {
                    position: 'bottom'
                }
            }
        },
        {
            breakpoint: 480,
            options: {
                chart: {
                    width: 340
                },
                legend: {
                    position: 'bottom'
                }
            }
        },
        {
            breakpoint: 1025,
            options: {
                chart: {
                    width: 400
                },
                legend: {
                    position: 'bottom'
                }
            }
        },
        {
            breakpoint: 400,
            options: {
                chart: {
                    width: 300
                },
                legend: {
                    position: 'bottom'
                }
            }
        }],
        plotOptions: {
            pie: {
                startAngle: 0,
                endAngle: 360,
                expandOnClick: false,
                offsetX: 0,
                offsetY: 0,
                customScale: 1,
                dataLabels: {
                    offset: 0,
                    minAngleToShowLabel: 10
                },
                donut: {
                    size: '65%',
                    background: 'transparent',
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            fontSize: '22px',
                            fontFamily: 'Helvetica, Arial, sans-serif',
                            fontWeight: 600,
                            color: undefined,
                            offsetY: -10,
                            formatter: function (val) {
                                return val
                            }
                        },
                        value: {
                            show: true,
                            fontSize: '16px',
                            fontFamily: 'Helvetica, Arial, sans-serif',
                            fontWeight: 400,
                            color: undefined,
                            offsetY: 16,
                            formatter: function (val) {
                                return val
                            }
                        },
                        total: {
                            show: false,
                            showAlways: false,
                            label: 'Total',
                            fontSize: '22px',
                            fontFamily: 'Helvetica, Arial, sans-serif',
                            fontWeight: 600,
                            color: '#373d3f',
                            formatter: function (w) {
                                return w.globals.seriesTotals.reduce((a, b) => {
                                    return a + b
                                }, 0)
                            }
                        }
                    }
                },
            }
        }
    };

    // const options = {
    //     chart: {
    //         type: 'donut',
    //         height: '400', // Set height to '100%'
    //         width: '500',  // Set width to '100%'
    //     },
    //     plotOptions: {
    //         pie: {
    //             donut: {
    //                 size: '65%'
    //             }
    //         }
    //     },
    //     labels: topProducts && topProducts.map(item => item.GRP),
    // };

    const series = topProducts && topProducts.map(item => item.QTY); // Sample data, replace with your data
    // const series = [44, 55, 41, 17, 15]

    return (
        // <div className='ApexChartD'>
        <ReactApexChart
            options={options}
            series={series}
            type="donut"
            width="500"
        />
        // </div>
    );
}

export default APxChartTp