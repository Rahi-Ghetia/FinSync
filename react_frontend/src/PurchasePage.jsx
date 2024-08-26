import Chart from 'chart.js/auto';
import { Bar, Doughnut, Line } from "react-chartjs-2";

import React, { useState, useEffect } from "react";

function PurchasePage(props) {

    const [purchaseList, setPurchaseList] = useState([]);
    const [purchase_date, setPurchaseDate] = useState();
    const [purchase_num, setPurchaseNum] = useState();
    const [product_name, setProductName] = useState();
    const [product_quan, setProductQuan] = useState();
    const [ship_date, setShipDate] = useState();
    const [product_cost, setProductCost] = useState();
    const [deletedStatus, setDeletedStatus] = useState(false);

    const [searchByInputValue, setSearchByInputValue] = useState('');

    const [filterSelected, setSortSelected] = useState('Featured');
    const [showFormat, setShowFormat] = useState(true);
    const [del_purchase_num, setDelPurchaseNum] = useState();
    const [del_purchase_date, setDelPurchaseDate] = useState();
    const [del_product_name, setDelProductName] = useState();
    const [del_product_quan, setDelProductQuan] = useState();

    useEffect(() => {
        const getDataForPurchasesList = async () => {
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
        getDataForPurchasesList();
    }, []);


    const handleNewPurchaseSubmit = (e) => {
        e.preventDefault();
        const postDataForPurchaseList = async () => {
            try {
                const response = await fetch('http://localhost:8000/purchaseOrderList/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ "username": props.username, "purchase_num": purchase_num, "purchase_date": purchase_date, "product_name": product_name, "product_quan": product_quan, "ship_date": ship_date, "product_cost": product_cost }),
                });
                if (!response.ok) {
                    throw new Error('Fetching Error')
                }
            } catch (error) {
                console.error(error);
            }

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
                    console.log(purchaseList);
                } catch (error) {
                    console.error(error);
                }
            };
            getDataForPurchaseList();
        };
        postDataForPurchaseList();
    }

    const deletePurchaseListVal = (e) => {
        setDelPurchaseDate(() => e.target.parentElement.querySelector('#purchaseDate').innerHTML);
        setDelPurchaseNum(() => e.target.parentElement.querySelector('#purchaseNum').innerHTML);
        setDelProductName(() => e.target.parentElement.querySelector('#productName').innerHTML);
        setDelProductQuan(() => e.target.parentElement.querySelector('#productQuan').innerHTML);
    }

    const handleDelPurchaseVals = (e) => {
        e.preventDefault()
        const sendData = async () => {
            try {
                const response = await fetch('http://localhost:8000/deleteUserPurchaseData/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ "username": props.username, "purchase_date": del_purchase_date, "purchase_num": del_purchase_num, "product_name": del_product_name, "product_quan": del_product_quan }),
                });
                if (!response.ok) {
                    throw new Error('Error in Uploading Data')
                }
                const data = await response.json();
                setDeletedStatus(() => data.response);
            } catch (error) {
                console.error(error);
            }

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
                    console.log(purchaseList);
                } catch (error) {
                    console.error(error);
                }
            };
            getDataForPurchaseList();
        }
        sendData();
    }

    const getTotalLHSort = () => {
        setSortSelected(() => 'TotalLH');
        const getDataList = async () => {
            try {
                const response = await fetch('http://localhost:8000/sortPurchaseDataTotalLHWise/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ "username": props.username }),
                });
                if (!response.ok) {
                    throw new Error('Purchase Date Low High Wise');
                }
                const data = await response.json();
                setPurchaseList(() => data);
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
                const response = await fetch('http://localhost:8000/sortPurchaseDataTotalHLWise/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ "username": props.username }),
                });
                if (!response.ok) {
                    throw new Error('Purchase Date Low High Wise');
                }
                const data = await response.json();
                setPurchaseList(() => data);
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
                const response = await fetch('http://localhost:8000/sortPurchaseDataQuantityLHWise/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ "username": props.username }),
                });
                if (!response.ok) {
                    throw new Error('Purchase Date Low High Wise');
                }
                const data = await response.json();
                setPurchaseList(() => data);
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
                const response = await fetch('http://localhost:8000/sortPurchaseDataQuantityHLWise/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ "username": props.username }),
                });
                if (!response.ok) {
                    throw new Error('Purchase Date Low High Wise');
                }
                const data = await response.json();
                setPurchaseList(() => data);
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
                const response = await fetch('http://localhost:8000/sortPurchaseDataDateLHWise/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ "username": props.username }),
                });
                if (!response.ok) {
                    throw new Error('Purchase Date Low High Wise');
                }
                const data = await response.json();
                setPurchaseList(() => data);
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
                const response = await fetch('http://localhost:8000/sortPurchaseDataDateHLWise/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ "username": props.username }),
                });
                if (!response.ok) {
                    throw new Error('Purchase Date Low High Wise');
                }
                const data = await response.json();
                setPurchaseList(() => data);
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
                const response = await fetch('http://localhost:8000/searchPurchaseListData/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ "username": props.username, "user_input": event.target.value }),
                });
                if (!response.ok) {
                    throw new Error('Purchase Date Low High Wise');
                }
                const data = await response.json();
                setPurchaseList(() => data);
            } catch (error) {
                console.error(error);
            }
        }
        getDataList();
    }

    return (<>
        <div className="constainer-fluid">
            <div className="container-fluid p-0">
                <nav className="navbar bg-body-tertiary border-bottom">
                    <div className="container-fluid">
                        <label className="nabar-brand ms-2 fs-1" style={{ fontWeight: "400" }}>
                            Purchase&nbsp;Overview
                        </label>
                        <ul className="navbar-nav flex-row ms-auto">
                            <li className="nav-item m-1">
                                <button className="btn btn-primary px-4 py-1" type="button" data-bs-toggle="modal" data-bs-target="#newPurchaseModal">
                                    <i className="bi bi-plus-lg"></i>&nbsp;New
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            <div className="modal fade" id="newPurchaseModal" tabindex="-1" aria-labelledby="newPurchaseModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg ">
                    <div className="modal-content shadow-lg">
                        <div className="modal-header bg-secondary bg-gradient">
                            <h1 className="modal-title fs-3" id="newPurchaseModalLabel">Add&nbsp;New&nbsp;Sales&nbsp;Order</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body bg-secondary-subtle rounded-bottom">
                            <form onSubmit={handleNewPurchaseSubmit}>
                                <div className="row fs-4 mt-3">
                                    <div className="col-4">
                                        Purchase&nbsp;Order&nbsp;No.
                                    </div>
                                    <div className="col-7">
                                        <input type="text" value={purchase_num} onChange={(e) => setPurchaseNum(() => e.target.value)} name="" id="" className="form-control" />
                                    </div>
                                </div>
                                <div className="row fs-4 mt-4">
                                    <div className="col-4">
                                        Purchase&nbsp;Order&nbsp;Date
                                    </div>
                                    <div className="col-7">
                                        <input type="date" value={purchase_date} onChange={(e) => {
                                            setPurchaseDate(() => e.target.value); console.log(typeof (e.target.value));
                                        }} name="" id="" className="form-control" />
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
                        </div>
                    </div>
                </div>
            </div>

            <div className="container w-50">
                <Bar
                    data={{
                        labels: (purchaseList.map((data) => data.product_name)),
                        datasets: [
                            {
                                label: "Sales",
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

            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-12 offset-lg-7 mt-4">
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
                <div className="table-responsive my-5">
                    <table className="table table-hover table-bordered text-center">
                        <thead className='bg-secondary-subtle'>
                            <tr className="fs-4 bg-transparent">
                                <th className='bg-transparent' style={{ textWrap: 'nowrap' }}>Date<label htmlFor="" style={{ fontSize: '12px' }}>&nbsp;[YYYY-MM-DD]</label></th>
                                <th className='bg-transparent'>Purchase&nbsp;Order&nbsp;No.</th>
                                <th className='bg-transparent'>Product&nbsp;Name</th>
                                <th className='bg-transparent'>Product&nbsp;Quantity</th>
                                <th className='bg-transparent'>Expected&nbsp;Shipment&nbsp;Date</th>
                                <th className='bg-transparent'>Product&nbsp;Cost</th>
                                <th className='bg-transparent'>Total&nbsp;Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            {purchaseList.map(element => {
                                return (
                                    <tr className="fs-5 text-center" key={element.id} id={'purchaseOrderList' + element.order_num} data-bs-toggle="modal" data-bs-target="#staticBackdropPurchase" onClick={deletePurchaseListVal}>
                                        <td id='purchaseDate'>{element.purchase_date}</td>
                                        <td id='purchaseNum'>{element.purchase_num}</td>
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

            <div class="modal fade" id="staticBackdropPurchase" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-2" id="staticBackdropLabel">Are You Sure You Want To Delete :</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="table-responsive">
                                <table className='table table-hover table-bordered text-center'>
                                    <thead>
                                        <tr className="fs-4">
                                            <th>Date <label htmlFor="" className="fs-6">[YYYY-MM-DD]</label></th>
                                            <th>Sales&nbsp;Order&nbsp;No.</th>
                                            <th>Product&nbsp;Name</th>
                                            <th>Product&nbsp;Quantity</th>
                                        </tr>
                                    </thead>
                                    <tbody className='table-group-divider'>
                                        <tr className='fs-5 p-2'>
                                            <td>{del_purchase_date}</td>
                                            <td>{del_purchase_num}</td>
                                            <td>{del_product_name}</td>
                                            <td>{del_product_quan}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary px-5 py-1" data-bs-dismiss="modal">Cancel</button>
                            <form onSubmit={handleDelPurchaseVals}>
                                <button type="submit" class="btn btn-danger px-5 py-1" data-bs-dismiss="modal">Delete</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>);
}
export default PurchasePage;