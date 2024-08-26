import Chart from 'chart.js/auto';
import { Bar, Doughnut, Line } from "react-chartjs-2";

import React, { useState, useEffect } from "react";

function AccountsPage(props) {

    const [accType, setAccType] = useState('bank');
    const [accName, setAccName] = useState('');
    const [accCode, setAccCode] = useState('');
    const [accCurrency, setAccCurency] = useState('INR');
    const [accNum, setAccNum] = useState('');
    const [bankName, setbankName] = useState('');
    const [IFSC, setIFSC] = useState('');
    const [balance, setBalance] = useState('');
    const [description, setDescription] = useState('');
    const [accountsList, setAccountsList] = useState([]);
    const [dataValid, setDataValid] = useState(false);

    const [searchForAccountInp, setSearchForAccountInp] = useState('');

    useEffect(() => {
        const getDataFromBank = async () => {
            try {
                const response = await fetch('http://localhost:8000/getAccountData/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ 'username': props.username }),
                });
                if (!response.ok) {
                    throw new Error('Fetch Problem')
                }
                const data = await response.json();
                console.log(data);
                setAccountsList(() => data);
            } catch (error) {
                console.error(error);
            }
        }
        getDataFromBank();
    }, []);



    function validateVals() {
        const ele5 = document.getElementById('accNameInputField');
        const ele6 = document.getElementById('bankNameInputField');
        const ele7 = document.getElementById('descriptionInputField');

        if (accName == '' || accName == null || accName == undefined) {
            ele5.classList.add('is-invalid');
            return false;
        } else {
            if (ele5.classList.contains('is-invalid')) {
                ele5.classList.remove('is-invalid')
            }
        }
        const isDigit = /\D/
        const ele1 = document.getElementById('accCodeInputField')
        const ele2 = document.getElementById('accNumInputField')
        const ele3 = document.getElementById('ifscInputField')
        const ele4 = document.getElementById('balanceInputField')

        if (!isDigit.test(accCode) || !accCode == null || !accCode == undefined) {
            if (ele1.classList.contains('is-invalid'))
                ele1.classList.remove('is-invalid');
        } else {
            if (!(ele1.classList.contains('is-invalid')))
                ele1.classList.add('is-invalid');
            return false;
        }

        if (accType == 'bank') {
            if (!isDigit.test(accNum) || !accNum == null || !accNum == undefined) {
                if (ele2.classList.contains('is-invalid'))
                    ele2.classList.remove('is-invalid');
            } else {
                if (!ele2.classList.contains('is-invalid'))
                    ele2.classList.add('is-invalid');
                return false;
            }
        }

        if (bankName == '' || bankName == null || bankName == undefined) {
            ele6.classList.add('is-invalid');
            return false;
        } else {
            if (ele6.classList.contains('is-invalid')) {
                ele6.classList.remove('is-invalid')
            }
        }

        if (accType == 'bank') {

            if (!isDigit.test(IFSC) || !IFSC == null || !IFSC == undefined) {
                if (ele3.classList.contains('is-invalid'))
                    ele3.classList.remove('is-invalid');
            } else {
                if (!(ele3.classList.contains('is-invalid')))
                    ele3.classList.add('is-invalid');
                return false;
            }
        }

        if (!isDigit.test(balance) || !accCode == null || !balance == undefined) {
            if (ele4.classList.contains('is-invalid'))
                ele4.classList.remove('is-invalid');
        } else {
            if (!ele4.classList.contains('is-invalid'))
                ele4.classList.add('is-invalid');
            return false;
        }
        if (description == '' || description == null || description == undefined) {
            ele7.classList.add('is-invalid');
            return false;
        } else {
            if (ele7.classList.contains('is-invalid')) {
                ele7.classList.remove('is-invalid')
            }
        }
        return true;
    }

    const handleSubmitBankingDet = (e) => {
        e.preventDefault();

        if (validateVals()) {
            setAccCurency(() => document.getElementById('currencyChosen').value);
            const postDataAccDet = async () => {
                try {
                    if (accType == 'bank') {
                        const response = await fetch('http://127.0.0.1:8000/setBankAccount/', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ 'username': props.username, 'acc_name': accName, 'acc_code': accCode, 'currency': accCurrency, 'acc_num': accNum, 'bank_name': bankName, 'ifsc': IFSC, 'balance': balance, 'description': description }),
                        });
                        if (!response.ok) {
                            throw new Error('Response Error');
                        }
                    } else {
                        const response = await fetch('http://localhost:8000/setCardAccount/', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ 'username': props.username, 'acc_name': accName, 'acc_code': accCode, 'currency': accCurrency, 'bank_name': bankName, 'balance': balance, 'description': description }),
                        });
                        if (!response.ok) {
                            throw new Error('Response Error');
                        }
                    }
                } catch (error) {
                    console.error(error);
                }
                const getDataFromBank = async () => {
                    try {
                        const response = await fetch('http://localhost:8000/getAccountData/', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ 'username': props.username }),
                        });
                        if (!response.ok) {
                            throw new Error('Fetch Problem')
                        }
                        const data = await response.json();
                        // const data2 = await response2.json();
                        setAccountsList(() => data);
                    } catch (error) {
                        console.error(error);
                    }
                }
                getDataFromBank();
            }
            postDataAccDet();
        } else {
            console.log('Error');
        }

    }

    function checkForAccDataList(event) {
        setSearchForAccountInp(() => event.target.value);
        const getDataList = async () => {
            try {
                const response = await fetch('http://localhost:8000/searchAccListData/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ "username": props.username, "user_input": event.target.value }),
                });
                if (!response.ok) {
                    throw new Error('Purchase Date Low High Wise');
                }
                const data = await response.json();
                setAccountsList(() => [...data[0], ...data[1]]);
            } catch (error) {
                console.error(error);
            }
        }
        getDataList();

    }

    return (<>
        <div className="container-fluid p-0 mb-5">
            <nav className="navbar bg-body-tertiary border-bottom">
                <div className="container-fluid">
                    <label className="nabar-brand ms-2 fs-1" style={{ fontWeight: "400" }}>
                        Banking&nbsp;Overview
                    </label>
                    <ul className="navbar-nav flex-row ms-auto">
                        <li className="nav-item m-1">
                            <button className="btn btn-secondary px-4 py-2 text-dark" type="button" data-bs-toggle="modal" data-bs-target="#ImportStatments">
                                Import Statments
                            </button>
                        </li>
                        <li className="nav-item m-1">
                            <button className="btn btn-secondary px-4 py-2 text-dark" type="button" data-bs-toggle="modal" data-bs-target="#AddBankCredit">
                                Add Bank or Credit Card
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="modal fade" id="ImportStatments" tabindex="-1" aria-labelledby="ImportStatmentsLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header bg-secondary bg-gradient">
                            <h1 className="modal-title ms-2 fs-2" id="ImportStatmentsLabel">Import Statments</h1>
                            <button type="button" className="btn-close me-2" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body fs-4  bg-secondary-subtle">
                            Sorry for Inconvinence. This Function is currently not available.
                        </div>
                        <div className="modal-footer  bg-secondary-subtle rounded-bottom">
                            <button type="button" className="btn btn-secondary px-5 py-2 fs-5" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="AddBankCredit" tabindex="-1" aria-labelledby="AddBankCreditLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header bg-secondary bg-gradient">
                            <h1 className="modal-title ms-4 fs-2" id="ImportStatmentsLabel">Add Bank or Credit Card</h1>
                            <button type="button" className="btn-close me-2" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body fs-5  bg-secondary-subtle rounded-bottom">
                            <form action="" method="post" onSubmit={handleSubmitBankingDet}>
                                <div className="row mt-4">
                                    <div className="col-3 offset-md-1">
                                        <label htmlFor="accountTypeBankingPage">
                                            Select Account Type
                                        </label>
                                    </div>
                                    <div className="col-3 form-check text-start ms-2 offset-md-0 offset-3">
                                        <input type="radio" className="form-check-input" onClick={() => (accType == 'cCard' && setAccType(() => 'bank'))} checked={accType == 'bank'} name="selectAccountTypeBankingPageRadioBtn" id="selectAccountTypeBankingPageRadioBtnBank" />
                                        <label className="form-check-label" onClick={() => (accType == 'cCard' && setAccType('bank'))} htmlFor="selectAccountTypeBankingPageRadioBtnBank">&nbsp;Bank</label>
                                    </div>
                                    <div className="col-3 form-check text-start">
                                        <input type="radio" className="form-check-input" onClick={() => (accType == 'bank' && setAccType(() => 'cCard'))} name="selectAccountTypeBankingPageRadioBtn" id="selectAccountTypeBankingPageRadioBtnCard" />
                                        <label className="form-check-label" onClick={() => (accType == 'bank' && setAccType(() => 'cCard'))} htmlFor="selectAccountTypeBankingPageRadioBtnCard">&nbsp;Credit&nbsp;Card</label>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-3 fs-5 offset-md-1">
                                        Account&nbsp;Name
                                    </div>
                                    <div className="col-6  offset-md-0 offset-2">
                                        <input type="text" className="form-control" value={accName} onChange={(e) => setAccName(() => e.target.value)} name="" id="accNameInputField" />
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-3 fs-5 offset-md-1">
                                        Account&nbsp;Code
                                    </div>
                                    <div className="col-6  offset-md-0 offset-2">
                                        <input type="text" className="form-control" value={accCode} onChange={(e) => setAccCode(() => e.target.value)} name="" id="accCodeInputField" />
                                        <div className="fs-6 invalid-feedback">
                                            Must&nbsp;be&nbsp;Numeric
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-3 fs-5 offset-md-1">
                                        Currency
                                    </div>
                                    <div className="col-6 offset-md-0 offset-2">
                                        <select name="" className="form-select text-center" id="currencyChosen">
                                            <option value="INR" selected>INR</option>
                                            <option value="USD">USD</option>
                                            <option value="CAD">CAD</option>
                                            <option value="EUR">EUR</option>
                                        </select>
                                    </div>
                                </div>
                                {accType == 'bank' &&
                                    <div className="row mt-4">
                                        <div className="col-3 fs-5 offset-md-1">
                                            Account&nbsp;Number
                                        </div>
                                        <div className="col-6 offset-md-0 offset-2">
                                            <input type="text" className="form-control" value={accNum} onChange={(e) => setAccNum(() => e.target.value)} name="" id="accNumInputField" />
                                            <div className="fs-6 invalid-feedback">
                                                Must&nbsp;be&nbsp;Numeric
                                            </div>
                                        </div>
                                    </div>
                                }
                                <div className="row mt-4">
                                    <div className="col-3 fs-5 offset-md-1">
                                        Bank&nbsp;Name
                                    </div>
                                    <div className="col-6 offset-md-0 offset-2">
                                        <input type="text" className="form-control" value={bankName} onChange={(e) => setbankName(() => e.target.value)} name="" id="bankNameInputField" />
                                    </div>
                                </div>
                                {accType == 'bank' &&
                                    <div className="row mt-4">
                                        <div className="col-3 fs-5 offset-md-1">
                                            IFSC
                                        </div>
                                        <div className="col-6 offset-md-0 offset-2">
                                            <input type="text" className="form-control" value={IFSC} onChange={(e) => setIFSC(() => e.target.value)} name="" id="ifscInputField" />
                                            <div className="fs-6 invalid-feedback">
                                                Must&nbsp;be&nbsp;Numeric
                                            </div>
                                        </div>
                                    </div>
                                }
                                <div className="row mt-4">
                                    <div className="col-3 fs-5 offset-md-1">
                                        Balance
                                    </div>
                                    <div className="col-6 offset-md-0 offset-2">
                                        <input type="text" className="form-control" value={balance} onChange={(e) => setBalance(() => e.target.value)} name="" id="balanceInputField" />
                                        <div className="fs-6 invalid-feedback">
                                            Must&nbsp;be&nbsp;Numeric
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-3 fs-5 offset-md-1">
                                        Description
                                    </div>
                                    <div className="col-6 offset-md-0 offset-2">
                                        <textarea name="" className="form-control" placeholder="Max. 500 characters" value={description} onChange={(e) => setDescription(() => e.target.value)} id="descriptionInputField" cols="10" rows="3"></textarea>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-6 text-end">
                                        <button className="btn btn-success px-4" type="submit" data-bs-dismiss={dataValid && "modal"}>
                                            Save
                                        </button>
                                    </div>
                                    <div className="col-6 text-start">
                                        <button className="btn btn-secondary px-4" type="button" data-bs-dismiss="modal">
                                            Cancel
                                        </button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container w-50">
                <Line
                    data={{
                        labels: accountsList.map((data) => data.acc_name),
                        datasets: [
                            {
                                label: "Balance",
                                data: accountsList.map((data) => data.balance),
                                backgroundColor: "red",
                                borderColor: "red",
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

            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-lg-3 col-12 offset-lg-8">
                        <div className="input-group">
                            <input type="text" name="" value={searchForAccountInp} onChange={(event) => checkForAccDataList(event)} id="searchForAccount" className="form-control" />
                            <label htmlFor="searchForAccount" className='input-group-text'>
                                <i class="bi bi-search fs-5"></i>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid p-0 mt-4">
                <div className="table-responsive">
                    <table className="table table-hover table-bordered">
                        <thead className='bg-secondary-subtle'>
                            <tr className="fs-4 text-center">
                                <th className='bg-transparent'>Account&nbsp;Name</th>
                                <th className='bg-transparent'>Account&nbsp;Code</th>
                                <th className='bg-transparent'>Account Type</th>
                                {/* <th>Account Number</th> */}
                                <th className='bg-transparent'>Bank&nbsp;Name</th>
                                <th className='bg-transparent'>Balance</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {accountsList.map(element => {
                                return (
                                    <tr className="fs-5 text-center" key={element.id}>
                                        <td>{element.acc_name}</td>
                                        <td>{element.acc_code}</td>
                                        <td>{element.acc_type}</td>
                                        {/* <td>{element.acc_num}</td> */}
                                        <td>{element.bank_name}</td>
                                        <td>{element.balance}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    </>);
}

export default AccountsPage;