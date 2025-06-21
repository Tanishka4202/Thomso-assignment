import '../index.css';
import React from 'react';

function Navbar(){
    return(
        <>
        <nav>
            <h2>API Monk</h2>
            <div id="navlist">
                <ul>
                    <li>Pricing</li>
                    <li>APIs</li>
                    <li>Documentation</li>
                </ul>
            </div>
            <button id="login">Login</button>
        </nav>
        </>
    );
}

export default Navbar;