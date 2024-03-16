import React from 'react';
import './Carousel.css'; // Import your CSS file
import Cimg from "../assests/cimg.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


export const Carousel = () => {

    return (
        <div>
            <div className='row carrow'>
                <div className='col conttext'>

                    <h1 className='animate-charcter'>ID Card Printers & Security Systems Supplier/Distributor</h1>
                    <br/><br/><br/>
                    <p>Find our Range of Products and Solutions that Matches Best for you.
                        ID Card Printer | Time and Attendance Solution | Wacom Signature
                        Solutions | Wacom sign pro PDF for iOS & Android, | WILL™ Enterprise
                        | Nitgen Live Scanners | Nitgen Fingerprint Reader | Nitgen Fingerprint Scanner
                        | Access Control System | Security Software | Turnstiles Gates Doors | Speed Gates and Tripods
                        | Fargo Card Printer Consumables | Passport Scanner | Biometric Attendance System
                        | USB Fingerprint Scanner Nitgen
                        | ZK Time Attendance Software | E Signature Softwares.
                    </p>
                </div>
                <div class="col conimage">
                    <img className='ccimg' src={Cimg} alt="caro_Image" />
                </div>
            </div>
            <div className="row">
                <div class="slider">
                    <div class="slide-track">
                        <div class="slide">
                            <p>
                            <FontAwesomeIcon
                                icon={faPhone}
                                className="phone-icon"
                            /> &nbsp; Dubai: +971 4 455 9007</p>
                        </div>
                        <div class="slide">
                            <p>
                            <FontAwesomeIcon
                                icon={faPhone}
                                className="phone-icon"
                            /> &nbsp; Abu Dhabi : +971 2 650 3433</p>
                        </div>
                        <div class="slide">
                            <p>
                            <FontAwesomeIcon
                                icon={faWhatsapp}
                                className="wapp-icon"
                            /> &nbsp; +971 52 899 9169</p>
                        </div>
                        <div class="slide">
                            <p>
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                className="email-icon"
                            /> &nbsp; sales@etopme.ae</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

