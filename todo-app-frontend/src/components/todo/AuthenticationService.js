import {Component} from "react";
import axios from "axios";

class AuthenticationService extends Component{

    executeBasicAuthenticationService(username, password){

        return axios.get('http://localhost:8080/basicauth',
            {headers: {authorization: this.createBasicAuthToken(username,password)}})
    }

    createBasicAuthToken(username,password){
        return 'Basic ' + window.btoa(username + ":" + password);
    }

    registerSuccessfulLogin = (username, password) => {

        window.sessionStorage.setItem('authenticatedUser', username);
        this.setAxiosInterceptors(this.createBasicAuthToken(username,password));
    }

    logout = () => {
        window.sessionStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn = () => {
        let user = window.sessionStorage.getItem('authenticatedUser');
        if (user === null){
            return false;
        }
        return true;
    }

    getLoggedInUsername = () => {
        let user = window.sessionStorage.getItem('authenticatedUser');
        if (user === null){
            return '';
        }
        return user;
    }

    setAxiosInterceptors = (basicAuthHeader) =>{
        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn()){
                    config.headers.authorization = basicAuthHeader;
                }
                return config;
            }
        )
    }
}

export default new AuthenticationService();