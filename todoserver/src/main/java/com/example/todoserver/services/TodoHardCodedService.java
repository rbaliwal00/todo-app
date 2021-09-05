package com.example.todoserver.services;


import com.example.todoserver.domain.Todo;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class TodoHardCodedService {
    private static List<Todo> todos = new ArrayList();
    private static Long idCounter = Long.valueOf(0);


    static{
        todos.add(new Todo(++idCounter, "balitech", "Learn to Dance", new Date(), false));
        todos.add(new Todo(++idCounter, "balitech", "Learn about MicroServices", new Date(), false));
        todos.add(new Todo(++idCounter, "balitech", "Learn about React", new Date(), false));
    }

    public List<Todo> findAll(){
        return todos;
    }

    public Todo deleteById(Long id){
        Todo todo = findById(id);

        if(todo == null) return null;

        if(todos.remove(todo)) {
            return todo;
        }
        return null;
    }

    public Todo findById(Long id){
        for(Todo todo: todos){
            if(todo.getId() == id){
                return todo;
            }
        }
        return null;
    }

    public Todo save(Todo todo){
        if(todo.getId() == -1 || todo.getId() == 0){
            todo.setId(++idCounter);
        }else{
            deleteById(todo.getId());
        }
        todos.add(todo);
        return todo;
    }
}
