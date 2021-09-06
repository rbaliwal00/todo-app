import React, {Component} from "react";
import TodoDataService from "../../api/todo/TodoDataService";
import AuthenticationService from "./AuthenticationService";
import moment from "moment";

class ListTodosComponent extends Component{
    constructor(props) {
        super(props);
        this.state ={
            todos :
                [],
            message: null
        }
    }

    componentDidMount() {
        this.refreshTodos();
    }

    refreshTodos = () =>{
        let username = AuthenticationService.getLoggedInUsername();
        TodoDataService.retrieveAllTodos(username)
            .then(
                response => {
                    //console.log(response);
                    this.setState({todos: response.data})
                }
            )
    }

    updateTodoClicked = (id) =>{
        this.props.history.push(`/todos/${id}`);
    }

    addTodoClicked = () =>{
        this.props.history.push(`/todos/-1`);
    }

    deleteTodoClicked = (id) =>{
        let username = AuthenticationService.getLoggedInUsername();
        //console.log(id + " " + username);
        TodoDataService.deleteTodo(username,id)
            .then(
                response => {
                    this.setState({message: `Delete of todo ${id} successful`});
                    this.refreshTodos()
                }
            )
    }

    render(){
        return(
            <div>
                <h1>List Todos</h1>
                {this.state.message && <div className={"alert alert-success"}>{this.state.message}</div>}
                <div className={"container"}>
                    <table className={"table"}>
                        <thead>
                        <tr>
                            <th>Description</th>
                            <th>Target Date</th>
                            <th>Is Completed?</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.todos.map(todo =>
                                <tr key={todo.id}>
                                    <th>{todo.description}</th>
                                    <th>{moment(todo.targetDate.toString()).format("YYYY-MM-DD")}</th>
                                    <th>{todo.done.toString()}</th>
                                    <td><button className={"btn btn-success"} onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
                                    <td><button className={"btn btn-warning"} onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                    <div>
                        <button className={"btn btn-success"} onClick={this.addTodoClicked}>Add</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListTodosComponent;