import React from "react";

export default function Header() {
    return (<>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="http://localhost:3000">
                    <img src={require("../assets/images/favicon.ico")} alt={'logo'}/>
                    ÖRDER
                </a>

                <div className="">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a className="nav-link" href="#items">Items</a>
                            <a className="nav-link" href="#customers">Customers</a>
                            <a className="nav-link" href="#basket">Basket</a>
                            <a className="nav-link" href="#menu">Menu</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>)
}