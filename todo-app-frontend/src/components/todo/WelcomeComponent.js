import React, {Component} from "react";
import HelloWorldService from "../../api/todo/HelloWorldService";

class WelcomeComponent extends Component{

    constructor() {
        super();
        this.state ={
            welcomeMessage: ''
        }
    }

    render(){
        return (
            <>
                <h1>Welcome!</h1>
                <div className={"container"}>Welcome {this.props.match.params.name}.
                    Click here to get a customized welcome message.
                    <button onClick={this.retrieveWelcomeMessage}
                            className={"btn btn-success"}>Get Welcome Message</button>
                </div>
                <div className={"container"}>
                    {this.state.welcomeMessage}
                </div>
            </>
        )
    }

    retrieveWelcomeMessage = () =>{
        // HelloWorldService.executeHelloWorldService()
        //     .then(response =>
        //         this.setState({welcomeMessage: response.data}))
        //     .catch()

        // HelloWorldService.executeHelloWorldBeanService()
        //     .then(response => this.handleSuccessfulResponse(response))
        //     .catch()

        HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
            .then(response => this.handleSuccessfulResponse(response))
            .catch(error => this.handleError(error))
    }

    handleSuccessfulResponse = (response) =>{
        console.log(response);
        this.setState({welcomeMessage: response.data.message});
    }

    handleError = (error) =>{
        console.log(error.response);
        this.setState({welcomeMessage: error.response.data.message});
    }
}

export default WelcomeComponent;