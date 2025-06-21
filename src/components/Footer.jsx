import React from 'react';
import logo from "../assets/Logo.png";
import youtube from "../assets/youtube.png";
import insta from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import tele from "../assets/telegram.png";
import '../index.css';


function Footer() {
    return (
        <>
            <footer>
                <div>
                    <img src={logo} />
                    <div>
                        <img src={youtube} />
                        <img src={insta} />
                        <img src={linkedin} />
                        <img src={tele} />
                    </div>
                    <div>
                        <div><b>Company</b>
                            <p>About</p>
                            <p>Blogs</p>
                            <p>Careers</p>
                        </div>
                        <div>
                            <b>Explore</b>
                            <p>APIs</p>
                            <p>Documentation</p>
                            <p>Benchmarks</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div><p>Copyright © API MONK. All rights reserved.</p>
                        <ul>
                            <li>Terms  & Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Refund Policy</li>
                            <li>Cookie Policy</li>
                        </ul></div>
                    <p>For help and support Contact us on <b>+91 9999999999 </b>or mail us <b>support@apimonk.com</b></p>
                </div>
            </footer>
        </>
    );
}

export default Footer;