import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
// import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import ToDoList from '../To-Do-List/ToDoList';
import Dashboard from '../Body_Content/Dashboard_Content';

// JSX
var Header = () => {
    return (
        // <div className="row">
        //     <div className="col-md-12">
        //         <nav className="nav bg-dark">
        //             <ul className="nav navbar">
        //                 {
        //                     ['Home', 'Company', 'About us', 'Contact'].map((menu) => 
        //                         (
        //                             <li className="nav-item">
        //                                 <a href={"Home.js"} className="nav-link">{menu}</a>
        //                             </li>
        //                         )
        //                     )
        //                 }
        //             </ul>
        //         </nav>
        //     </div>
        // </div>
        <Router>
            <div>
                {/* <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Dashboard" />
                <OldSchoolMenuLink to="/contact" label="Contact" />
                <OldSchoolMenuLink to="/about" label="About" /> */}

                <nav className="navbar navbar-expand-lg bg-dark">
                    <ul className="navbar-nav">
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/">Dashboard </Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/">To Do List</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li> */}
                    </ul>
                </nav>

                <Switch className="navbar">
                    {/* <Route path="/"> <Dashboard /> </Route> */}
                    <Route exact path="/"> <ToDoList /> </Route>
                    {/* <Route path="/contact"> <Contact /> </Route>
                    <Route path="/about"> <About /> </Route> */}
                </Switch>
            </div>
        </Router>
    )
}

// function OldSchoolMenuLink({ label, to, activeOnlyWhenExact }) {
//     let match = useRouteMatch({
//         path: to,
//         exact: activeOnlyWhenExact
//     });

//     return (
//         <div className={match ? "active" : ""}>
//             {match && "> "}
//             <Link to={to}>{label}</Link>
//         </div>
//     );
// }

export default Header;
