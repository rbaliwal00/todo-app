import React, {Component} from "react";
import AuthenticationService from "./AuthenticationService";
import {Link, withRouter} from "react-router-dom";

class HeaderComponent extends Component{

    render(){
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        console.log(isUserLoggedIn);
        return (
            <header>
                <nav className={"navbar navbar-expand-md navbar-dark bg-dark"}>
                    <div className={"nav-brand text-white"}><a href={"http://balitech.com"} className={"navbar-brand"}></a>Balitech</div>
                    <ul className={"navbar-nav"}>
                        {isUserLoggedIn && <li><Link to={"/welcome/balitech"}  className={"nav-link"}>Home</Link></li>}
                        {isUserLoggedIn && <li><Link to={"/todos"}  className={"nav-link"}>Todos</Link></li>}
                    </ul>
                    <ul className={"navbar-nav navbar-collapse justify-content-end"}>
                        {!isUserLoggedIn && <li><Link to={"/login"}  className={"nav-link"}>Login</Link></li>}
                        {isUserLoggedIn && <li><Link to={"/logout"}  className={"nav-link"} onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        );
    }
}

export default withRouter(HeaderComponent);