import {Component} from "react";

class AuthenticationService extends Component{


    registerSuccessfulLogin(username, password){
        window.sessionStorage.setItem('authenticatedUser', username);
    }

    logout(){
        window.sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn = () => {
        let user = window.sessionStorage.getItem('authenticatedUser');
        if (user === null){
            return false;
        }
        return true;
    }
}

export default new AuthenticationService;