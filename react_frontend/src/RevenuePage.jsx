import Chart from 'chart.js/auto';
import { Bar, Doughnut, Line } from "react-chartjs-2";

import React, { useState, useEffect } from "react";

function RevenuePage(props) {

    const [purchaseList, setPurchaseList] = useState([]);
    const [salesList, setSalesList] = useState([]);
    const [revenueList, setRevenueList] = useState([]);

    useEffect(() => {
        const getDataForPurchaseList = async () => {
            try {
                const response = await fetch('http://localhost:8000/getPurchaseOrderList/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ "username": props.username }),
                });
                if (!response.ok) {
                    throw new Error('Fetching Error')
                }
                const data = await response.json();

                setPurchaseList(() => data);
            } catch (error) {
                console.error(error);
            }
        };
        getDataForPurchaseList();

        const getDataForSalesList = async () => {
            try {
                const response = await fetch('http://localhost:8000/getSlaesOrderList/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ "username": props.username }),
                });
                if (!response.ok) {
                    throw new Error('Fetching Error')
                }
                const data = await response.json();

                setSalesList(() => data);
            } catch (error) {
                console.error(error);
            }
        };

        getDataForSalesList();
        const getDataForRevnueList = async () => {
            try {
                const response = await fetch('http://localhost:8000/generateRevenueByDate/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ "username": props.username }),
                });
                if (!response.ok) {
                    throw new Error('Fetching Error')
                }
                const data = await response.json();

                setRevenueList(() => data);
            } catch (error) {
                console.error(error);
            }
        };
        getDataForRevnueList();
    }, []);

    function getTotalProfLoss() {

        let salesTotal = 0;
        let purchaseTotal = 0;
        salesList.map(element => {
            salesTotal += (element.product_cost * element.product_quan);
        });
        purchaseList.map(element => {
            purchaseTotal += (element.product_cost * element.product_quan);
        });
        return (salesTotal - purchaseTotal);
    }

    return (<>
        <div className="constainer-fluid">
            <div className="container-fluid p-0">
                <nav className="navbar bg-body-tertiary border-bottom">
                    <div className="container-fluid">
                        <label className="nabar-brand ms-2 fs-1" style={{ fontWeight: "400" }}>
                            Revenue&nbsp;Overview
                        </label>
                    </div>
                </nav>
            </div>


            <div className="container-fluid p-0">
                <div className="container">

                    <div className="row">
                        <div className="col-12">
                            <Bar className='mx-auto w-100'
                                data={{
                                    labels: (revenueList.map((data) => data.date)),
                                    datasets: [
                                        {
                                            label: "Sales",
                                            data: revenueList.map((data) => ((data.spent))),
                                            backgroundColor: ["rgb(132,120,191)", "rgb(246,161,146)", "rgb(255,235,142)", "rgb(234,88,39)",],
                                            borderColor: "blue",
                                            borderRadius: 10,
                                        },
                                    ],
                                }}
                                options={{
                                    elements: {
                                        line: {
                                            tension: 0.5,
                                        },
                                    },
                                    plugins: {
                                        title: {
                                            text: "Monthly Revenue & Cost",
                                        },
                                    },
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className="table-responsive my-5">
                    <table className="table table-hover text-center">
                        <thead>
                            <tr className="fs-4">
                                <th>Date <label htmlFor="" className="fs-6">[YYYY-MM-DD]</label></th>
                                <th>Total&nbsp;Spent</th>
                            </tr>
                        </thead>
                        <tbody>
                            {revenueList.map((element) => {
                                return (
                                    <tr className="fs-5 text-center" key={element.id} id={'revenueList' + element.id}>
                                        <td id='revenueDate'>{element.date}</td>
                                        <td id='revenueSpent'>{element.spent}&nbsp;₹</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                        <tfoot>
                            <tr className='fs-3 fw-bold'>
                                <td colSpan="1">Total</td>
                                <td colSpan="">{getTotalProfLoss()}&nbsp;₹</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6 dataCard customerCard p-3">

                            <Bar
                                data={{
                                    labels: (purchaseList.map((data) => data.purchase_num)),
                                    datasets: [
                                        {
                                            label: "Purchase",
                                            data: purchaseList.map((data) => ((data.product_quan * data.product_cost))),
                                            backgroundColor: ["rgb(132,120,191)", "rgb(246,161,146)", "rgb(255,235,142)", "rgb(234,88,39)",],
                                            borderColor: "blue",
                                            borderRadius: 10,
                                        },
                                    ],
                                }}
                                options={{
                                    elements: {
                                        line: {
                                            tension: 0.5,
                                        },
                                    },
                                    plugins: {
                                        title: {
                                            text: "Monthly Revenue & Cost",
                                        },
                                    },
                                }}
                            />
                        </div>
                        <div className="col-6 dataCard customerCard p-3">
                            <Bar
                                data={{
                                    labels: (salesList.map((data) => data.order_num)),
                                    datasets: [
                                        {
                                            label: "Sales",
                                            data: salesList.map((data) => ((data.product_quan * data.product_cost))),
                                            backgroundColor: ["rgb(132,120,191)", "rgb(246,161,146)", "rgb(255,235,142)", "rgb(234,88,39)",],
                                            borderColor: "blue",
                                            borderRadius: 10,
                                        },
                                    ],
                                }}
                                options={{
                                    elements: {
                                        line: {
                                            tension: 0.5,
                                        },
                                    },
                                    plugins: {
                                        title: {
                                            text: "Monthly Revenue & Cost",
                                        },
                                    },
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className="table-responsive my-5">
                    <table className="table table-hover text-center">
                        <thead>
                            <tr className="fs-4">
                                <th>Date <label htmlFor="" className="fs-6">[YYYY-MM-DD]</label></th>
                                <th>Order&nbsp;No.</th>
                                <th>Product&nbsp;Name</th>
                                <th>Product&nbsp;Quantity</th>
                                <th>Expected&nbsp;Shipment&nbsp;Date</th>
                                <th>Product&nbsp;Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            {purchaseList.map(element => {
                                return (
                                    <tr className="fs-5 text-center" key={element.id} id={'revenueList' + element.purchase_num}>
                                        <td>{element.purchase_date}</td>
                                        <td>{element.purchase_num}</td>
                                        <td>{element.product_name}</td>
                                        <td>{element.product_quan}</td>
                                        <td>{element.ship_date}</td>
                                        <td>{element.product_cost}</td>
                                    </tr>
                                );
                            })}
                            {salesList.map(element => {
                                return (
                                    <tr className="fs-5 text-center" key={element.id} id={'revenueList' + element.order_num}>
                                        <td>{element.sale_date}</td>
                                        <td>{element.order_num}</td>
                                        <td>{element.product_name}</td>
                                        <td>{element.product_quan}</td>
                                        <td>{element.ship_date}</td>
                                        <td>{element.product_cost}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                        <tfoot>
                            <tr className='fs-3 fw-bold'>
                                <td colSpan="5">Total</td>
                                <td colSpan="">{getTotalProfLoss()}&nbsp;₹</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    </>);
}
export default RevenuePage;