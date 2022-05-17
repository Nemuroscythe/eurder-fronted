import React from "react";
import {Link} from "react-router-dom";

export default function Header() {
    return (<>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="http://localhost:3000">
                    <img src={require("../assets/images/favicon.ico")} alt={'logo'}/>
                    ÖRDER
                </a>

                <div className="container-fluid">
                    {/*<button type="button"><Link to="/create-customer">Navigation</Link></button>*/}
                </div>
            </div>
        </nav>
    </>)
}