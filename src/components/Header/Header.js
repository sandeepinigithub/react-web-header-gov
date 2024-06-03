import './Header.css'

import phoneSolid from "../../assets/images/phone-solid.svg"
import nafedLogo from "../../assets/images/nafed-logo.png"
import azadiLogo from "../../assets/images/azadi-amrit.png"
import g20Logo from "../../assets/images/g20-logo.png"

export default function Header() {

    return (
        <>
            <div className="wrap-header">
                <div className="header-top">
                    <div className="container d-flex align-items-center justify-content-between">
                        <div className="date-time">Jun 03, 2024 | 1:17 AM</div>
                        <div className="helper-link">
                            <ul className='list-unstyled d-flex align-items-center mb-0'>
                                <li className='d-none d-lg-block pointer'>
                                    <div className="tooltip-custom">
                                        Helpline numbers
                                        <div className="wrap-phone-numbers">
                                            <div className="d-flex justify-content-evenly align-items-start flex-column h-100 ps-3">
                                                <a href="tel:9354269728"><img src={phoneSolid} className="icon mx-2" /><span >9354269728 </span></a>
                                                <a href="tel:7703857541"><img src={phoneSolid} className="icon me-2" /><span >7703857541 </span></a>
                                                <a href="tel:7703834248"><img src={phoneSolid} className="icon me-2" /><span >703834248 </span></a>
                                            </div>
                                        </div>
                                    </div>

                                </li>
                                <li className='d-none d-lg-block'> | </li>
                                <li className='d-none d-lg-block'>
                                    <a>Skip To Navigation</a>
                                </li>
                                <li className='d-none d-lg-block'> | </li>
                                <li className='d-none d-lg-block'>
                                    <a>Skip To Navigation</a>
                                </li>
                                <li className='d-none d-lg-block'> | </li>
                                <li className='d-block'>
                                    <a>A</a>
                                    <a>A+</a>
                                    <a>A++</a>
                                </li>
                                <li className='d-none d-lg-block'> | </li>
                                <li className='d-block'>
                                    <a className='theme light'>L</a>
                                    <a className='theme dark'>D</a>
                                </li>
                                <li className='d-block'>
                                    <select>
                                        <option>English</option>
                                    </select>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className='header-middle py-2'>
                    <div className='container d-flex align-items-center justify-content-between'>
                        <div className='left-logo'>
                            <img src={nafedLogo} className='llogo1' />
                        </div>
                        <div className='right-logo'>
                            <img src={azadiLogo} className='rlogo1' />
                            <img src={g20Logo} className='rlogo2' />
                        </div>

                    </div>


                </div>
                <div className='header-bottom'>

                    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navigation">
                        <div className='container'>
                            <button className="navbar-toggler order-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="d-flex order-2 order-md-3">
                                <a class="button">Login</a>
                            </div>
                            <div className="collapse navbar-collapse order-3 order-md-2" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">Home</a>
                                    </li>
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">About</a>
                                    </li>
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">Media & Gallery</a>
                                    </li>
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">Contact Us</a>
                                    </li>

                                </ul>
                            </div>
                        </div>

                    </nav>

                </div>
            </div>
        </>
    )
}