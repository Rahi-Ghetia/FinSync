import { useState } from "react";
import HomePage from "./HomePage";
import AccountsPage from "./AccountsPage";
import SalesPage from "./SalesPage";
import RevenuePage from "./RevenuePage";
import ContactInfoPage from "./ContactInfoPage";
import ProfilePage from "./ProfilePage";
import PurchasePage from "./PurchasePage";

function NavigationBar(props) {

    const [pageInfo, setPageInfo] = useState('home');

    function page() {
        if (pageInfo == 'home') {
            return <HomePage username={props.username} />
        } else if (pageInfo == 'accounts') {
            return <AccountsPage username={props.username} />
        } else if (pageInfo == 'sales') {
            return <SalesPage username={props.username} />

        } else if (pageInfo == 'revenue') {

            return <RevenuePage username={props.username} />
        } else if (pageInfo == 'purchase') {

            return <PurchasePage username={props.username} />
        } else if (pageInfo == 'profile') {

            return <ProfilePage username={props.username} />
        } else {

        }
    }

    function chageTheme() {
        // if (props.styles.bgColor == 'white' && props.styles.txColor == 'black') {
        //     props.setStyles({ bgColor: 'rgb(60, 60, 60)', txColor: 'rgb(125, 125, 125)' });
        // } else {
        //     props.setStyles({ bgColor: 'white', txColor: 'black' });
        // }
    }

    return (<>
        <nav className="navbar navbar-expand-lg bg-dark sticky-top">
            <div className="container-fluid">
                <button id="homeBtn" className="border-0 bg-dark navbar-brand" onClick={() => setPageInfo('home')}>
                    <img src="FinSyncIcon.png" id="navBrandLogo" style={{ height: '40px' }} alt="Logo" />
                    <label htmlFor="navBrandLogo" className="text-white fs-3" style={{ cursor: "pointer" }}>
                        &nbsp;FinSync
                    </label>
                </button>
                <ul className="navbar-nav ms-auto flex-row">
                    <li className="nav-item m-1">
                        <button id="contactinfoBtn" className="border-0 bg-dark nav-link" onClick={() => chageTheme()}>
                            {(props.styles.bgColor == 'white' && props.styles.txColor == 'black') ?
                                <i className="bi bi-moon-stars text-white"></i> : <i className="bi bi-sun text-white"></i>
                            }
                        </button>
                    </li>
                    <li className="nav-item m-1">
                        <button id="profileBtn" className="btn border-1 border-secondary rounded-circle bg-secondary" onClick={() => setPageInfo('profile')}>
                            {/* <img src="FinSyncIcon.png" style={{ height: '25px', width: '25px' }} alt="" /> */}
                            <i className="bi bi-person-fill text-white"></i>
                        </button>
                    </li>
                    <li className="nav-item m-1">
                        <button className="btn btn-danger" onClick={() => props.logOutUser()}>
                            Log&nbsp;Out
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
        <div className="container-fluid" style={{ backgroundColor: props.styles.bgColor, color: props.styles.txColor }}>
            <div className="row">
                <div className="col-xxl-1 col-lg-2 col-md-3 col-4 text-center fs-4 p-0 p-0" style={{ backgroundColor: 'rgb(247, 247, 254)', borderRight: '2px solid rgb(232, 232, 232)' }}>
                    <nav className="navbar navbar-expand-lg p-0 mt-4 ms-2" style={{ position: 'fixed' }}>
                        <ul className="navbar-nav flex-column">
                            <li className="nav-item m-1">
                                <button id="hometBtn" className={"btn text-dark fs-5 border-0 rounded w-100 py-1 ps-3 text-start" + (pageInfo == 'home' ? " btn-primary" : " bg-transparent")} onClick={() => setPageInfo('home')}>
                                    <i className="bi bi-house-door"></i>&nbsp;Home
                                </button>
                            </li>
                            <li className="nav-item m-1">
                                <button id="purchaseBtn" className={"btn text-dark fs-5 border-0 rounded w-100 py-1 ps-3 text-start" + (pageInfo == 'purchase' ? " btn-primary" : " bg-transparent")} onClick={() => setPageInfo('purchase')}>
                                    <i className="bi bi-bag-dash"></i>&nbsp;Purchase
                                </button>
                            </li>
                            <li className="nav-item m-1">
                                <button id="accountBtn" className={"btn text-dark fs-5 border-0 rounded w-100 py-1 ps-3 text-start" + (pageInfo == 'accounts' ? " btn-primary" : " bg-transparent")} onClick={() => setPageInfo('accounts')}>
                                    <i className="bi bi-bank"></i>&nbsp;Banking
                                </button>
                            </li>
                            <li className="nav-item m-1">
                                <button id="salesBtn" className={"btn text-dark fs-5 border-0 rounded w-100 py-1 ps-3 text-start" + (pageInfo == 'sales' ? " btn-primary" : " bg-transparent")} onClick={() => setPageInfo('sales')}>
                                    <i className="bi bi-send"></i>&nbsp;Sales
                                </button>
                            </li>
                            <li className="nav-item m-1">
                                <button id="revenueBtn" className={"btn text-dark fs-5 border-0 rounded w-100 py-1 ps-3 text-start" + (pageInfo == 'revenue' ? " btn-primary" : " bg-transparent")} onClick={() => setPageInfo('revenue')}>
                                    <i className="bi bi-wallet2"></i>&nbsp;Revenue
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="col-xxl-11 col-lg-10 col-md-9 col-8 p-0">
                    <div className="">
                        {page()}
                    </div>
                    <div className="">
                        <ContactInfoPage username={props.username} />
                    </div>
                </div>
            </div>

        </div>
    </>);
}

export default NavigationBar;