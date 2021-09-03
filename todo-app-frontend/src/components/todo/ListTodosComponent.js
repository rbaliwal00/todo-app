import React, {Component} from "react";

class ListTodosComponent extends Component{
    constructor(props) {
        super(props);
        this.state ={
            todos :
                [
                    {id: 1, description: "Learn React", done:false, targetDate: new Date()},
                    {id: 2, description: "Become an expert in React", done:false, targetDate: new Date()},
                    {id: 3, description: "Visit Canada", done:false, targetDate: new Date()}
                ]

        }
    }

    render(){
        return(
            <div>
                <h1>List Todos</h1>
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
                                    <th>{todo.done.toString()}</th>
                                    <th>{todo.targetDate.toString()}</th>
                                </tr>
                            )
                        }


                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListTodosComponent;