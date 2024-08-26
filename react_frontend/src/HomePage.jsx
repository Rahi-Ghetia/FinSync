import Chart from 'chart.js/auto';
import { Bar, Doughnut, Line } from "react-chartjs-2";

import React, { useState, useEffect } from "react";

function HomePage(props) {

    const [mouseOnHover0, setmouseOnHover0] = useState(false);
    const [mouseOnHover1, setmouseOnHover1] = useState(false);
    const [mouseOnHover2, setmouseOnHover2] = useState(false);
    const [mouseOnHover3, setmouseOnHover3] = useState(false);
    const [mouseOnHover4, setmouseOnHover4] = useState(false);
    const [mouseOnHover5, setmouseOnHover5] = useState(false);
    const [mouseOnHover6, setmouseOnHover6] = useState(false);
    const [mouseOnHover7, setmouseOnHover7] = useState(false);
    const [mouseOnHover8, setmouseOnHover8] = useState(false);

    return (<>
        <div>
            <div className="container-fluid p-0 border-bottom bg-transparent" style={{ backgroundImage: "url('Images/BackgroundImage.jpg')", backgroundPosition: "center", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <label className="fs-1 ms-5 my-2">Hello, {props.username}</label>
            </div>

            <div className="container p-4 mt-4">
                <div className="container-fluid">
                    <div className="row rounded py-2 shadow" style={{ backgroundColor: 'rgb(235 245, 255)', zIndex: mouseOnHover0 ? '1000' : '0', transitionDuration: '.5s', transform: mouseOnHover0 ? 'scale(1.05)' : 'scale(1)' }} onMouseEnter={() => setmouseOnHover0(() => true)} onMouseLeave={() => setmouseOnHover0(() => false)}>
                        <div className="col-xl-3 col-12">
                            <a href="https://www.youtube.com/" target="_blank" id="Youtube-Video-Link" className="text-decoration-none">
                                <img src="Images/ThumbnailVideo.png" className="rounded" height={'120px'} alt="" />
                            </a>
                        </div>
                        <div className="col-xl-9 col-12">
                            <label htmlFor="Youtube-Video-Link" className="mt-3">
                                <label className="fs-5" style={{ fontWeight: '500' }}>Year End Accounting - Tips and Tricks</label><br />
                                Watch this video to learn the essential guidelines for closing your books at the end of the fiscal year, and see how FinSync can help you take care of it.
                            </label>
                        </div>
                    </div>
                </div>



                <div className="container-fluid rounded mt-5 bg-light shadow">
                    <div className="row rounded-top fs-2 px-4 py-2 border" style={{ backgroundColor: 'rgb(235 245, 255)' }}>
                        Things to do before the fiscal year-end
                    </div>
                    <div className="row border py-4 bg-light" style={{ transitionDuration: '.5s', zIndex: mouseOnHover1 ? '1000' : '0', transform: mouseOnHover1 ? 'scale(1.05)' : 'scale(1)' }} onMouseEnter={() => setmouseOnHover1(() => true)} onMouseLeave={() => setmouseOnHover1(() => false)}>
                        <div className="col-xs-1 col-lg-2 col-12 text-center">
                            <div className="d-inline-block px-3 py-2 bg-primary-subtle rounded-circle">
                                <i class="bi bi-globe2 fs-2 text-primary"></i>
                            </div>
                        </div>
                        <div className="col-xs-10 col-lg-8 col-12">
                            <label htmlFor="" className="fs-5" style={{ fontWeight: '500' }}>
                                Update the auto-generated number sequence for transactions
                            </label>
                            <br />
                            When you create your first invoice or another transaction for this year, click the Gear icon next to the invoice number and update the auto-generated number.
                        </div>
                        <div className="col-xs-1 col-lg-2 col-12 text-center mt-3 text-primary">
                            <a href="" className="btn btn-outline-primary border border-0 rounded-pill">
                                Learn More &gt;
                            </a>
                        </div>
                    </div>
                    <div className="row border py-4 bg-light" style={{ transitionDuration: '.5s', zIndex: mouseOnHover2 ? '1000' : '0', transform: mouseOnHover2 ? 'scale(1.05)' : 'scale(1)' }} onMouseEnter={() => setmouseOnHover2(() => true)} onMouseLeave={() => setmouseOnHover2(() => false)}>
                        <div className="col-xs-1 col-lg-2 col-12 text-center">
                            <div className="d-inline-block px-3 py-2 bg-warning-subtle rounded-circle">
                                <i class="bi bi-envelope-fill fs-2 text-warning"></i>
                            </div>
                        </div>
                        <div className="col-xs-10 col-lg-8 col-12">
                            <label htmlFor="" className="fs-5" style={{ fontWeight: '500' }}>
                                Send customer statements to your customers and get paid faster
                            </label>
                            <br />
                            If you have customers whose invoices are overdue, go to the respective contact &gt; select Statement &gt; select a period &gt; Send Email.
                        </div>
                        <div className="col-xs-1 col-lg-2 col-12 text-center mt-3 text-primary">
                            <a href="" className="btn btn-outline-primary border border-0 rounded-pill">
                                Learn More &gt;
                            </a>
                        </div>
                    </div>
                    <div className="row border py-4 bg-light" style={{ transitionDuration: '.5s', zIndex: mouseOnHover3 ? '1000' : '0', transform: mouseOnHover3 ? 'scale(1.05)' : 'scale(1)' }} onMouseEnter={() => setmouseOnHover3(() => true)} onMouseLeave={() => setmouseOnHover3(() => false)}>
                        <div className="col-xs-1 col-lg-2 col-12 text-center">
                            <div className="d-inline-block px-3 py-2 bg-danger-subtle rounded-circle">
                                <i class="bi bi-hand-thumbs-down-fill fs-2 text-danger"></i>
                            </div>
                        </div>
                        <div className="col-xs-10 col-lg-8 col-12">
                            <label htmlFor="" className="fs-5" style={{ fontWeight: '500' }}>
                                Write off bad debts
                            </label>
                            <br />
                            If you have customers who haven’t paid you in a long time, you can write off those bad debts. Select the particular invoice &gt; More &gt; Write Off.
                        </div>
                        <div className="col-xs-1 col-lg-2 col-12 text-center mt-3 text-primary">
                            <a href="" className="btn btn-outline-primary border border-0 rounded-pill">
                                Learn More &gt;
                            </a>
                        </div>
                    </div>
                    <div className="row border py-4 bg-light" style={{ transitionDuration: '.5s', zIndex: mouseOnHover4 ? '1000' : '0', transform: mouseOnHover4 ? 'scale(1.05)' : 'scale(1)' }} onMouseEnter={() => setmouseOnHover4(() => true)} onMouseLeave={() => setmouseOnHover4(() => false)}>
                        <div className="col-xs-1 col-lg-2 col-12 text-center">
                            <div className="d-inline-block px-3 py-2 bg-success-subtle rounded-circle">
                                <i class="bi bi-cash-stack fs-2 text-success"></i>
                            </div>
                        </div>
                        <div className="col-xs-10 col-lg-8 col-12">
                            <label htmlFor="" className="fs-5" style={{ fontWeight: '500' }}>
                                Handle prepaid expenses
                            </label>
                            <br />
                            Categorise the prepaid payments you’ve made to insurance or other services as expenses.
                        </div>
                        <div className="col-xs-1 col-lg-2 col-12 text-centercol-1 col-lg-2 text-center mt-3 text-primary">
                            <a href="" className="btn btn-outline-primary border border-0 rounded-pill">
                                Learn More &gt;
                            </a>
                        </div>
                    </div>
                    <div className="row border py-4 bg-light" style={{ transitionDuration: '.5s', zIndex: mouseOnHover5 ? '1000' : '0', transform: mouseOnHover5 ? 'scale(1.05)' : 'scale(1)' }} onMouseEnter={() => setmouseOnHover5(() => true)} onMouseLeave={() => setmouseOnHover5(() => false)}>
                        <div className="col-xs-1 col-lg-2 col-12 text-center">
                            <div className="d-inline-block px-3 py-2 bg-primary-subtle rounded-circle">
                                <i class="bi bi-file-earmark-text-fill fs-2 text-primary"></i>
                            </div>
                        </div>
                        <div className="col-xs-10 col-lg-8 col-12">
                            <label htmlFor="" className="fs-5" style={{ fontWeight: '500' }}>
                                Update the year to 2024-2025 in your Terms and Conditions
                            </label>
                            <br />
                            To update the year, go to Settings &gt; Preferences &gt; Invoices &gt; Terms & Conditions, update the year, and save the preferences.
                        </div>
                        <div className="col-xs-1 col-lg-2 col-12 text-center mt-3 text-primary">
                            <a href="" className="btn btn-outline-primary border border-0 rounded-pill">
                                Learn More &gt;
                            </a>
                        </div>
                    </div>
                    <div className="row rounded-bottom border py-4 bg-light" style={{ transitionDuration: '.5s', zIndex: mouseOnHover6 ? '1000' : '0', transform: mouseOnHover6 ? 'scale(1.05)' : 'scale(1)' }} onMouseEnter={() => setmouseOnHover6(() => true)} onMouseLeave={() => setmouseOnHover6(() => false)}>
                        <div className="col-xs-1 col-lg-2 col-12 text-center">
                            <div className="d-inline-block px-3 py-2 bg-warning-subtle rounded-circle">
                                <i class="bi bi-cart-check-fill fs-2 text-warning"></i>
                            </div>
                        </div>
                        <div className="col-xs-10 col-lg-8 col-12">
                            <label htmlFor="" className="fs-5" style={{ fontWeight: '500' }}>
                                Take stock of your inventory
                            </label>
                            <br />
                            Evaluate your inventory and check if there are goods that are not in a sellable condition or not selling, and adjust your stock accordingly.
                        </div>
                        <div className="col-xs-1 col-lg-2 col-12 text-center mt-3 text-primary">
                            <a href="" className="btn btn-outline-primary border border-0 rounded-pill">
                                Learn More &gt;
                            </a>
                        </div>
                    </div>

                </div>
                <div className="container mt-5">
                    <label htmlFor="" className="fs-2" style={{ fontWeight: '500' }}>Effortless Year-End Accounting</label>
                    <div className="row p-3">
                        <div className="col rounded shadow p-2" style={{ backgroundColor: 'rgb(225 235, 255)', zIndex: mouseOnHover7 ? '1000' : '0', transitionDuration: '.5s', transform: mouseOnHover7 ? 'scale(1.1)' : 'scale(1)' }} onMouseEnter={() => setmouseOnHover7(() => true)} onMouseLeave={() => setmouseOnHover7(() => false)}>
                            <div className="row">
                                <div className="col-2 text-center">
                                    <i class="bi bi-journal-bookmark-fill fs-2 text-primary"></i>
                                </div>
                                <div className="col-10">
                                    Wrap up your finances seamlessly with our ultimate guide to closing your books.
                                    <br />
                                    <a href="" target="_blank" className="text-decoration-none" style={{ cursor: 'pointer' }}>
                                        Learn More &gt;
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col offset-1 shadow rounded p-2" style={{ backgroundColor: 'rgb(225 235, 255)', zIndex: mouseOnHover8 ? '1000' : '0', transitionDuration: '.5s', transform: mouseOnHover8 ? 'scale(1.1)' : 'scale(1)' }} onMouseEnter={() => setmouseOnHover8(() => true)} onMouseLeave={() => setmouseOnHover8(() => false)}>
                            <div className="row">
                                <div className="col-2 text-center">
                                    <i class="bi bi-lightbulb fs-2 text-warning"></i>
                                </div>
                                <div className="col-10">
                                    Ace your year-end accounting with our simple yet effective tips and procedures.
                                    <br />
                                    <a href="" target="_blank" className="text-decoration-none" style={{ cursor: 'pointer' }}>
                                        Learn More &gt;
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container-fluid p-3">
                <div className="">
                    <label htmlFor="" className="fs-2 ms-4"> Effortless Accounting for Your Business</label>
                </div>
                <div className="">
                    <label htmlFor="" className="fs-4 ms-5 mt-4">Manage finances, streamline processes, and gain insights - all in one place.</label>
                </div>
                <div className="">
                    <label htmlFor="" className="fs-4 ms-5 mt-4">A high-quality image showcasing the Finsync platform's user interface or a concept representing easy accounting.</label>
                </div>

                <div className="fs-2 mt-5 ms-3">Key Features</div>

                <div className="container-fluid mt-5" style={{height:'500px'}}>
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner w-100 align-items-center" data-bs-interval="2000">
                            <div className="carousel-item active">
                                <img src="Images/CarouselImg1.png" className="d-block" alt="..." style={{height:'500px'}} />
                                <div className="carousel-caption d-none d-md-block text-dark bg-white rounded-pill">
                                    <p>Eliminate manual data entry with bank integrations and automatic categorization.</p>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src="Images/CarouselImg2.png" className="d-block" alt="..." style={{height:'500px'}} />
                                <div className="carousel-caption d-none d-md-block text-dark bg-white rounded-pill">
                                    <h5>Real-time Financial Reports:</h5>
                                    <p>Track your cash flow, income, and expenses in real-time.</p>
                                </div>
                            </div>
                            <div className="carousel-item" >
                                <img src="Images/CarouselImg3.jpg" className="d-block" alt="..." style={{height:'500px'}} />
                                <div className="carousel-caption d-none d-md-block text-dark bg-white rounded-pill">
                                    <p>Create and send professional invoices with ease.</p>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="fs-2 mt-5 ms-3">
                    Benifits
                </div>
                <ul className="fs-4 ms-5">
                    <li>Save Time & Money: Reduce manual work and focus on growing your business. </li>
                    <li>Gain Control: Get a clear view of your finances with comprehensive dashboards and reports.</li>
                    <li>Make Smarter Decisions: Data-driven insights to guide your business strategy.</li>
                    <li>Peace of Mind: Securely store and access your financial data anytime, anywhere.</li>
                </ul>
            </div> */}
        </div>
    </>);
}
export default HomePage;