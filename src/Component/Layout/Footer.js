import React from 'react';
import { Router } from 'react-router';

// ``var styles = () => {
//     textDesign: {
//         Color: White
//     }
// }``

var Footer = () => {
    return (
        <div className="row">
            <div className="col-md-12">
                <nav className="nav bg-dark">
                    <ul className="nav navbar">
                        <li className="nav-item mx-auto">
                            <a href={""} className="nav-link">Website is Designed by Gagandeep Singh</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Footer;
