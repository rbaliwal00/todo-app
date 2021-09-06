import {Component} from "react";
import axios from "axios";
import {API_URL} from "../../Constant";

export const USER_NAME_SESSION_NAME = 'authenticatedUser';

class AuthenticationService extends Component{

    executeBasicAuthenticationService(username, password){

        return axios.get(`${API_URL}/basicauth`,
            {headers: {authorization: this.createBasicAuthToken(username,password)}})
    }

    executeJwtAuthenticationService(username, password){

        return axios.post(`${API_URL}/authenticate`,{
            username,
            password
        })
    }

    createBasicAuthToken(username,password){
        return 'Basic ' + window.btoa(username + ":" + password);
    }

    registerSuccessfulLogin = (username, password) => {

        window.sessionStorage.setItem(USER_NAME_SESSION_NAME, username);
        this.setAxiosInterceptors(this.createBasicAuthToken(username,password));
    }

    logout = () => {
        window.sessionStorage.removeItem(USER_NAME_SESSION_NAME);
    }

    isUserLoggedIn = () => {
        let user = window.sessionStorage.getItem(USER_NAME_SESSION_NAME);
        if (user === null){
            return false;
        }
        return true;
    }

    getLoggedInUsername = () => {
        let user = window.sessionStorage.getItem(USER_NAME_SESSION_NAME);
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

    registerSuccessfulLoginForJwt(username, token) {
       sessionStorage.setItem(USER_NAME_SESSION_NAME, username);
        this.setAxiosInterceptors(this.createJwtToken(token));
    }

    createJwtToken(token) {
        return 'Bearer ' + token
    }
}

export default new AuthenticationService();