import React, { useState, useEffect } from "react";
import CityFinder from "./CityFinder";
function UserSignin(props) {

    const [uname, setUname] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phonenumber, setPhonenumber] = useState();
    const [cityName, setCityName] = useState();

    function showPass() {
        let inpField = document.getElementById('floatingInputPass');
        let eyeImage = document.getElementById('eyeImage');
        if (inpField && eyeImage) {
            eyeImage.className = eyeImage.className === 'bi bi-eye' ? 'bi bi-eye-slash' : 'bi bi-eye';
            (inpField).type = (inpField).type === 'text' ? 'password' : 'text';
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (document.getElementById('tcCheckbox').checked) {
            document.getElementById('checkBoxDiv').classList.remove("border", "border-3", "rounded", "border-danger");
            setCityName(document.getElementById('selectingCity').value);
            try {
                const response = await fetch('http://localhost:8000/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ 'name': name, 'username': uname, 'email': email, 'password': password, 'phonenumber': phonenumber, 'city': cityName }),
                });
                props.setUsername(uname);
                props.changeLoginState(response.ok);
                if (!response.ok) {
                    throw new Error('Http Error')
                }
            } catch (error) {
                console.error(error);
            }
        } else {
            document.getElementById('checkBoxDiv').classList.add("border", "border-3", "rounded", "border-danger");
        }
    }

    return (<>
        <div className="container p-xl-3 px-1 contet-center">
            <form onSubmit={handleSubmit}>
                <div className="p-xl-2">
                    <div className="row my-5">
                        <div className="col-12 text-center">
                            <h1>Welcome to FinSync</h1>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="offset-lg-2 col-lg-2 offset-1 col-3">
                            <h4>Name&nbsp;:</h4>
                        </div>
                        <div className="col-lg-6 col-7">
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" name="" id="" />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="offset-lg-2 col-lg-2 offset-1 col-3">
                            <h4>Username&nbsp;:</h4>
                        </div>
                        <div className="col-lg-6 col-7">
                            <input type="text" value={uname} onChange={(e) => setUname(e.target.value)} className="form-control" name="" id="" />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="offset-lg-2 col-lg-2 offset-1 col-3">
                            <h4>Email&nbsp;address&nbsp;:</h4>
                        </div>
                        <div className="col-lg-6 col-7">
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" name="" id="" />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="offset-lg-2 col-lg-2 offset-1 col-3">
                            <h4>Password&nbsp;:</h4>
                        </div>
                        <div className="col-lg-6 col-7">
                            <div className="input-group">
                                <input type="password" minLength={8} value={password} autoComplete="current-password" className="form-control" id="floatingInputPass" onChange={(e) => setPassword(e.target.value)} />
                                <button type="button" id="btnPassword" className="border btn bg-white" onClick={() => showPass()}><i id="eyeImage" className="bi bi-eye"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="offset-lg-2 col-lg-2 offset-1 col-3">
                            <h4>Mobile&nbsp;number&nbsp;:</h4>
                        </div>
                        <div className="col-lg-6 col-7">
                            <input type="text" className="form-control" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} name="" id="" />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="offset-2 col-8">
                            <CityFinder styles={{ cursor: 'pointer' }} />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-1 offset-2 text-end" >
                            <input type="checkbox" name="" id="tcCheckbox" />
                        </div>
                        <div className="col-4 text-start" id="checkBoxDiv">
                            <label style={{ cursor: "pointer" }} htmlFor="tcCheckbox">
                                I agree to the <a href="#exampleModal1" data-bs-toggle="modal" style={{ textDecoration: 'none', fontWeight: '600' }}>Terms of Service </a>
                                and <a href="#exampleModal2" data-bs-toggle="modal" style={{ textDecoration: 'none', fontWeight: '600' }}> Privacy Policy</a>
                                <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
                                    <div className="modal-dialog modal-lg modal-dialog-scrollable modal-dialog-centered">
                                        <div className="modal-content" style={{ borderRadius: '15px' }}>
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel1">Terms of Service</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <p>
                                                    By accessing and using our FinSync webpage, you agree to be bound by the following terms and conditions. Please read them carefully.
                                                </p>
                                                <p>
                                                    1. You must be at least 18 years old to use our Service.
                                                </p>
                                                <p>
                                                    2. You agree to use the Service solely for accounting demo purposes and not for any illegal or unauthorized activities.
                                                </p>
                                                <p>
                                                    3. You are solely responsible for any data, information, or content uploaded, transmitted, or stored on our Service.
                                                </p>
                                                <p>
                                                    If you have any questions or concerns about these Terms of Service, please contact us at www.finsync.com
                                                </p>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => (document.getElementById('tcCheckbox').checked = true)}>Accept</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                                    <div className="modal-dialog modal-lg modal-dialog-scrollable modal-dialog-centered">
                                        <div className="modal-content" style={{ borderRadius: '15px' }}>
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel2">Privacy Policy</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <p>
                                                    This Privacy Policy describes how FinSync collects, uses, and protects your personal information when you use our Fin Sync webpage.
                                                </p>
                                                <p>
                                                    1. We may collect personal information such as your name, email address, and contact details when you use our Service.
                                                </p>
                                                <p>
                                                    2. We use your personal information to provide and improve our Service, communicate with you, and personalize your experience.
                                                </p>
                                                <p>
                                                    3. We may share your personal information with third-party service providers or partners to facilitate our Service.
                                                </p>
                                                <p>
                                                    If you have any questions or concerns about our Privacy Policy, please contact us at www.finsync.com .
                                                </p>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => (document.getElementById('tcCheckbox').checked = true)}>Accept</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div className="col-3 text-end">
                            <h6 style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }} onClick={() => { props.accExistQue(true) }}>
                                Already Have An Account ?
                            </h6>
                        </div>
                    </div>
                    <div className="row my-5 h-10">
                        <div className="offset-3 col-6">
                            <button className="btn btn-success form-control" type="submit">Create Account</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </>);
}

export default UserSignin;