import Chart from 'chart.js/auto';
import { Bar, Doughnut, Line } from "react-chartjs-2";

import React, { useState, useEffect } from "react";

function SalesPage(props) {

    const [salesList, setSalesList] = useState([]);
    const [order_num, setOrderNum] = useState();
    const [sale_date, setSaleDate] = useState();
    const [product_name, setProductName] = useState();
    const [product_quan, setProductQuan] = useState();
    const [ship_date, setShipDate] = useState();
    const [product_cost, setProductCost] = useState();
    const [deletedStatus, setDeletedStatus] = useState(false);

    const [searchByInputValue, setSearchByInputValue] = useState('');

    const [filterSelected, setSortSelected] = useState('Featured');
    const [del_order_num, setDelOrderNum] = useState();
    const [del_sale_date, setDelSaleDate] = useState();
    const [del_product_name, setDelProductName] = useState();
    const [del_product_quan, setDelProductQuan] = useState();

    useEffect(() => {
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
    }, []);


    const handleNewSaleSubmit = (e) => {
        e.preventDefault();
        const postDataForSalesList = async () => {
            try {
                const response = await fetch('http://localhost:8000/slaesOrderList/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ "username": props.username, "order_num": order_num, "sale_date": sale_date, "product_name": product_name, "product_quan": product_quan, "ship_date": ship_date, "product_cost": product_cost }),
                });
                if (!response.ok) {
                    throw new Error('Fetching Error')
                }
            } catch (error) {
                console.error(error);
            }
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
        };
        postDataForSalesList();

    }

    const deleteSaleListVal = (e) => {
        setDelSaleDate(() => e.target.parentElement.querySelector('#saleDate').innerHTML);
        setDelOrderNum(() => e.target.parentElement.querySelector('#orderNum').innerHTML);
        setDelProductName(() => e.target.parentElement.querySelector('#productName').innerHTML);
        setDelProductQuan(() => e.target.parentElement.querySelector('#productQuan').innerHTML);
    }

    const handleDelSaleVals = (e) => {
        e.preventDefault()
        const sendData = async () => {
            try {
                const response = await fetch('http://localhost:8000/deleteUserSaleData/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ "username": props.username, "sale_date": del_sale_date, "order_num": del_order_num, "product_name": del_product_name, "product_quan": del_product_quan }),
                });
                if (!response.ok) {
                    throw new Error('Error in Uploading Data')
                }
                const data = await response.json();
                console.log(response);
                setDeletedStatus(() => data.response);
            } catch (error) {
                console.error(error);
            }

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
        }
        sendData();
    }

    const getTotalLHSort = () => {
        setSortSelected(() => 'TotalLH');
        const getDataList = async () => {
            try {
                const response = await fetch('http://localhost:8000/sortSaleDataTotalLHWise/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ "username": props.username }),
                });
                if (!response.ok) {
                    throw new Error('Sale Date Low High Wise');
                }
                const data = await response.json();
                setSalesList(() => data);
            } catch (error) {
                console.error(error);
            }
        }
        getDataList();
    }

    const getTotalHLSort = () => {
        setSortSelected(() => 'TotalHL');
        const getDataList = async () => {
            try {
                const response = await fetch('http://localhost:8000/sortSaleDataTotalHLWise/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ "username": props.username }),
                });
                if (!response.ok) {
                    throw new Error('Sale Date Low High Wise');
                }
                const data = await response.json();
                setSalesList(() => data);
            } catch (error) {
                console.error(error);
            }
        }
        getDataList();
    }
    const getQuantityLHSort = () => {
        setSortSelected(() => 'QuantityLH');
        const getDataList = async () => {
            try {
                const response = await fetch('http://localhost:8000/sortSaleDataQuantityLHWise/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ "username": props.username }),
                });
                if (!response.ok) {
                    throw new Error('Sale Date Low High Wise');
                }
                const data = await response.json();
                setSalesList(() => data);
            } catch (error) {
                console.error(error);
            }
        }
        getDataList();
    }

    const getQuantityHLSort = () => {
        setSortSelected(() => 'QuantityHL');
        const getDataList = async () => {
            try {
                const response = await fetch('http://localhost:8000/sortSaleDataQuantityHLWise/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ "username": props.username }),
                });
                if (!response.ok) {
                    throw new Error('Sale Date Low High Wise');
                }
                const data = await response.json();
                setSalesList(() => data);
            } catch (error) {
                console.error(error);
            }
        }
        getDataList();
    }

    const getDateLHSort = () => {
        setSortSelected(() => 'DateLH');
        const getDataList = async () => {
            try {
                const response = await fetch('http://localhost:8000/sortSaleDataDateLHWise/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ "username": props.username }),
                });
                if (!response.ok) {
                    throw new Error('Sale Date Low High Wise');
                }
                const data = await response.json();
                setSalesList(() => data);
            } catch (error) {
                console.error(error);
            }
        }
        getDataList();
    }

    const getDateHLSort = () => {
        setSortSelected(() => 'DateHL');
        const getDataList = async () => {
            try {
                const response = await fetch('http://localhost:8000/sortSaleDataDateHLWise/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ "username": props.username }),
                });
                if (!response.ok) {
                    throw new Error('Sale Date Low High Wise');
                }
                const data = await response.json();
                setSalesList(() => data);
            } catch (error) {
                console.error(error);
            }
        }
        getDataList();
    }

    function checkIfDataPresent(event) {
        setSearchByInputValue(() => event.target.value);
        const getDataList = async () => {
            try {
                const response = await fetch('http://localhost:8000/searchSaleListData/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ "username": props.username, "user_input": event.target.value }),
                });
                if (!response.ok) {
                    throw new Error('Sale Search Fetch');
                }
                const data = await response.json();
                setSalesList(() => data);
            } catch (error) {
                console.error(error);
            }
        }
        getDataList();
    }

    return (<>
        <div>
            <div className="container-fluid p-0">
                <nav className="navbar bg-body-tertiary border-bottom">
                    <div className="container-fluid">
                        <label className="nabar-brand ms-2 fs-1" style={{ fontWeight: "400" }}>
                            Sales&nbsp;Overview
                        </label>
                        <ul className="navbar-nav flex-row ms-auto">
                            <li className="nav-item m-1">
                                <button className="btn btn-primary px-4 py-1" type="button" data-bs-toggle="modal" data-bs-target="#newSaleModal">
                                    <i className="bi bi-plus-lg"></i>&nbsp;New
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            <div className="modal fade" id="newSaleModal" tabindex="-1" aria-labelledby="newSaleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg ">
                    <div className="modal-content shadow-lg">
                        <div className="modal-header bg-secondary bg-gradient">
                            <h1 className="modal-title fs-3" id="newSaleModalLabel">Add&nbsp;New&nbsp;Sales&nbsp;Order</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body bg-secondary-subtle rounded-bottom">
                            <form onSubmit={handleNewSaleSubmit}>
                                <div className="row fs-4 mt-3">
                                    <div className="col-4">
                                        Sales&nbsp;Order&nbsp;No.
                                    </div>
                                    <div className="col-7">
                                        <input type="text" value={order_num} onChange={(e) => setOrderNum(() => e.target.value)} name="" id="" className="form-control" />
                                    </div>
                                </div>
                                <div className="row fs-4 mt-4">
                                    <div className="col-4">
                                        Sale&nbsp;Order&nbsp;Date
                                    </div>
                                    <div className="col-7">
                                        <input type="date" value={sale_date} onChange={(e) => setSaleDate(() => e.target.value)} name="" id="" className="form-control" />
                                    </div>
                                </div>
                                <div className="row fs-4 mt-4">
                                    <div className="col-4">
                                        Product&nbsp;Name
                                    </div>
                                    <div className="col-7">
                                        <input type="text" value={product_name} onChange={(e) => setProductName(() => e.target.value)} name="" id="" className="form-control" />
                                    </div>
                                </div>
                                <div className="row fs-4 mt-4">
                                    <div className="col-4">
                                        Product&nbsp;Quantity
                                    </div>
                                    <div className="col-7">
                                        <input type="text" value={product_quan} onChange={(e) => setProductQuan(() => e.target.value)} name="" id="" className="form-control" />
                                    </div>
                                </div>
                                <div className="row fs-4 mt-4">
                                    <div className="col-4">
                                        Expected&nbsp;Shipment Date
                                    </div>
                                    <div className="col-7">
                                        <input type="date" value={ship_date} onChange={(e) => setShipDate(() => e.target.value)} name="" id="" className="form-control" />
                                    </div>
                                </div>
                                <div className="row fs-4 mt-4">
                                    <div className="col-4">
                                        Product&nbsp;Cost
                                    </div>
                                    <div className="col-7">
                                        <input type="text" value={product_cost} onChange={(e) => setProductCost(() => e.target.value)} name="" id="" className="form-control" />
                                    </div>
                                </div>
                                <div className="row fs-4 mt-4">
                                    <div className="col-6 text-end">
                                        <button type="submit" className="btn btn-success px-5 py-1" data-bs-dismiss="modal">
                                            Add
                                        </button>
                                    </div>
                                    <div className="col-6 text-start">
                                        <button type="button" className="btn px-4 btn-secondary px-5 py-1" data-bs-dismiss="modal">Cancel</button>
                                    </div>
                                </div>
                            </form>
                            <div className="container">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container w-50">
                <Bar
                    data={{
                        labels: (salesList.map((data) => data.product_name)),
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

            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-12 mt-4 offset-lg-7">
                        <div className="input-group">
                            <input type="text" name="" id="searchByOrderNum" value={searchByInputValue} onChange={(e) => checkIfDataPresent(e)} className="form-control" />
                            <label htmlFor='searchByOrderNum' className="input-group-text">
                                <i class="bi bi-search fs-5"></i>
                            </label>
                        </div>
                    </div>
                    <div className="col-lg-2 col-12 mt-4">
                        <div className="dropdown">
                            <button className="btn btn-primary fs-5 px-5" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="bi bi-filter-square-fill me-3"></i>&nbsp;Sort
                            </button>
                            <ul className="dropdown-menu">
                                <li><button className={"dropdown-item fs-5 border border-0 " + ((filterSelected == 'TotalLH') ? 'bg-success-subtle' : 'bg-light')} onClick={getTotalLHSort}>Total: Low To High</button></li>
                                <li><button className={"dropdown-item fs-5 border border-0 " + ((filterSelected == 'TotalHL') ? 'bg-success-subtle' : 'bg-light')} onClick={getTotalHLSort}>Total: High To Low</button></li>
                                <li><button className={"dropdown-item fs-5 border border-0 " + ((filterSelected == 'DateLH') ? 'bg-success-subtle' : 'bg-light')} onClick={getDateLHSort}>Date: Low To High</button></li>
                                <li><button className={"dropdown-item fs-5 border border-0 " + ((filterSelected == 'DateHL') ? 'bg-success-subtle' : 'bg-light')} onClick={getDateHLSort}>Date: High To Low</button></li>
                                <li><button className={"dropdown-item fs-5 border border-0 " + ((filterSelected == 'QuantityLH') ? 'bg-success-subtle' : 'bg-light')} onClick={getQuantityLHSort}>Quantity: Low To High</button></li>
                                <li><button className={"dropdown-item fs-5 border border-0 " + ((filterSelected == 'QuantityHL') ? 'bg-success-subtle' : 'bg-light')} onClick={getQuantityHLSort}>Quantity: High To Low</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid p-0">
                <div className="table-responsive mt-3 mb-5">
                    <table className="table table-hover table-bordered text-center">
                        <thead>
                            <tr className="fs-4" style={{ textWrap: 'nowrap' }}>
                                <th>Date <label htmlFor="" className="fs-6">[YYYY-MM-DD]</label></th>
                                <th>Sales&nbsp;Order&nbsp;No.</th>
                                <th>Product&nbsp;Name</th>
                                <th>Product&nbsp;Quantity</th>
                                <th>Expected&nbsp;Shipment&nbsp;Date</th>
                                <th>Product&nbsp;Cost</th>
                                <th>Total&nbsp;Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            {salesList.map(element => {
                                return (
                                    <tr className="fs-5 text-center" key={element.id} id={'saleOrderList' + element.order_num} data-bs-toggle="modal" data-bs-target="#staticBackdropSale" onClick={deleteSaleListVal} style={{ textWrap: 'nowrap' }}>
                                        <td id='saleDate'>{element.sale_date}</td>
                                        <td id='orderNum'>{element.order_num}</td>
                                        <td id='productName'>{element.product_name}</td>
                                        <td id='productQuan'>{element.product_quan}</td>
                                        <td id='shipDate'>{element.ship_date}</td>
                                        <td id='productCost'>{element.product_cost}</td>
                                        <td id='totalCost'>{element.product_cost * element.product_quan}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="modal fade" id="staticBackdropSale" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-2" id="staticBackdropLabel">Are You Sure You Want To Delete :</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <table className='table table-hover table-bordered text-center'>
                                <thead>
                                    <tr className="fs-4">
                                        <th>Date <label htmlFor="" className="fs-6">[YYYY-MM-DD]</label></th>
                                        <th>Sales&nbsp;Order&nbsp;No.</th>
                                        <th>Product&nbsp;Name</th>
                                        <th>Product&nbsp;Quantity</th>
                                    </tr>
                                </thead>
                                <tbody className=''>
                                    <tr className='fs-5 p-2'>
                                        <td>{del_sale_date}</td>
                                        <td>{del_order_num}</td>
                                        <td>{del_product_name}</td>
                                        <td>{del_product_quan}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary px-5 py-1" data-bs-dismiss="modal">Cancel</button>
                            <form onSubmit={handleDelSaleVals}>
                                <button type="submit" class="btn btn-danger px-5 py-1" data-bs-dismiss="modal">Delete</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>);
}

export default SalesPage;