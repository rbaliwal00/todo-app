import axios from "axios";
import {API_URL} from "../../Constant";

class TodoDataService{

    retrieveAllTodos(name){
        //console.log('executed service');
        return axios.get(`${API_URL}/users/${name}/todos`);
    }

    retrieveTodo(name, id){
        //console.log('executed service');
        return axios.get(`${API_URL}/users/${name}/todos/${id}`);
    }

    updateTodo(name, id, todo){

        return axios.put(`${API_URL}/users/${name}/todos/${id}`, todo);
    }

    createTodo(name, todo){
        return axios.post(`${API_URL}/users/${name}/todos/`, todo);
    }

    deleteTodo(name, id){
        //console.log('executed service');
        return axios.delete(`${API_URL}/users/${name}/todos/${id}`);
    }

}

export default new TodoDataService();