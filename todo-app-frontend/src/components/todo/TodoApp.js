import React, {Component} from 'react';

class TodoApp extends Component{
    render(){
        return (
            <div className="TodoApp">
                <LoginComponent />
            </div>
        )
    }
};

class LoginComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            username: 'BaliTech',
            password: ''
        }
        this.handleUsernameChange = this.handleUsernameChange.bind (this);
    }

    handleUsernameChange(event){
        this.setState({
            username: event.target.value
        }); 
    }

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        }); 
    }

    render(){
        return (
            <>
            User Name : 
            <input type="text" 
            name="username" 
            value={this.s } 
            onChange={this.handleUsernameChange}
            />
            Password : 
            <input type="password" 
            name="password" 
            value={this.state.password} 
            onChange={this.handlePasswordChange}
            />
            <button>Login</button>
            </>
        );
    }
}

export default TodoApp;