import React, { useState, useEffect } from "react";

function ContactInfoPage() {
    return (<>
        <div className="container-fluid border-top px-5 pt-3 pb-2" style={{ backgroundColor: 'rgb(245, 245, 245)' }}>
            <div className="row text-center">
                <div className="col-12 col-md-3">
                    <h5 className="mb-3">
                        Contact Information:
                    </h5>
                    <p>
                        <label style={{ fontWeight: 500 }}>
                            Email:
                        </label>
                        <br />
                        <a href="email:finsync@fin.co" style={{ textDecoration: 'none' }}>
                            finsync@fin.co
                        </a>
                        <br />
                        <label style={{ fontWeight: 500 }}>
                            Address:
                        </label>
                        <br />
                        101 Sunshine Apartments, Gandhi Road,
                        <br />
                        Navrangpura,
                        Ahmedabad-380009,
                        <br />
                        Gujarat, India
                    </p>
                </div>
                <div className="col-12 col-md-3">
                    <h5 className="mb-3">
                        Feedback Form:
                    </h5>
                    <form action="">
                        {/* <label style={{ fontWeight: 500 }} htmlFor="nameFeedback">
                            Name:
                        </label>
                        <input id='nameFeedback' className="form-control form-control-sm" type="text" name="" /> */}
                        <label style={{ fontWeight: 500 }} htmlFor="emailFeedback">
                            Email:
                        </label>
                        <input id='emailFeedback' className="form-control form-control-sm" type="email" name="" />
                        {/* <label style={{ fontWeight: 500 }} htmlFor="subjectFeedback">
                            Subject:
                        </label>
                        <input id='subjectFeedback' className="form-control form-control-sm" type="text" name="" /> */}
                        <label style={{ fontWeight: 500 }} htmlFor="messageFeedback">
                            Message:
                        </label>
                        <textarea id='messageFeedback' className="form-control form-control-sm" name="" rows="2"></textarea>
                        <br />
                        <button className="btn btn-success" type="button">
                            Submit
                        </button>
                    </form>
                </div>
                <div className="col-12 col-md-3">
                    <h5 className="mb-3">
                        Social Media Links:
                    </h5>
                    <i className="bi bi-instagram"></i>&nbsp;
                    <a href="" style={{ textDecoration: 'none', color: 'black' }}>FinSync</a>
                    <br />
                    <i className="bi bi-threads"></i>&nbsp;
                    <a href="" style={{ textDecoration: 'none', color: 'black' }}>FinSync</a>
                    <br />
                    <i className="bi bi-facebook"></i>&nbsp;
                    <a href="" style={{ textDecoration: 'none', color: 'black' }}>FinSync</a>
                    <br />
                    <i className="bi bi-twitter-x"></i>&nbsp;
                    <a href="" style={{ textDecoration: 'none', color: 'black' }}>FinSync</a>
                    <br />
                </div>
                <div className="col-12 col-md-3">
                    <h5 className="mb-3">
                        FAQ Section:
                    </h5>
                    <p style={{ height: '140px' }} className="overflow-auto pe-2">
                        <label style={{ fontWeight: 500 }} className="mt-2">
                            What is Finsync?
                        </label>
                        <br />
                        Finsync is a seamless accounting demo that helps you track your finances effortlessly. It allows you to manage accounts, categorize transactions, create budgets, and visualize your financial data in an easy-to-understand way.
                        <br />
                        <label style={{ fontWeight: 500 }} className="mt-2">
                            Is Finsync a real product?
                        </label>
                        <br />
                        This is a demo version showcasing the functionalities of a potential accounting application. It's not currently a full-fledged product available in the market.
                        <br />
                        <label style={{ fontWeight: 500 }} className="mt-2">
                            Who can benefit from Finsync?
                        </label>
                        <br />
                        Finsync is ideal for anyone who wants to take control of their finances.  Students, small business owners, and individuals looking for a user-friendly budgeting tool can all benefit from Finsync's features.
                    </p>
                </div>
            </div>
            <div className="row pt-5 pb-3">
                <div className="col-10 offset-1 text-center">
                    <p>
                        You can directly talk to us every
                        <label style={{ fontWeight: 500 }}>
                            &nbsp;Monday to Friday 9:00 AM to 7:00 PM
                        </label>
                        <br />
                        FinSync India Helpline:
                        <label style={{ fontWeight: 500 }}>
                            <a href="tel:8824494223" className="text-dark" style={{ textDecoration: 'none' }}>
                                &nbsp;18005726671 (Toll Free)
                            </a>
                        </label>
                    </p>
                </div>
            </div>
        </div>
    </>);
}

export default ContactInfoPage;