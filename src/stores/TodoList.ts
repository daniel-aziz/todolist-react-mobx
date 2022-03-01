import { action, computed, observable } from "mobx";
import TodoItem from "./TodoItem";

export class TodoList {
    @observable.shallow list: TodoItem[] = [];

    constructor(todos : String[]) {
        todos.forEach(this.addTodo)
    }

    @action
    addTodo = (text:String) => {
        this.list.push(new TodoItem(text));
    }

    @action 
    removeTodo = (todo: TodoItem) => {
        this.list.splice(this.list.indexOf(todo), 1)
    }

    @computed
    get finishedTodos() : TodoItem[]  {
        return this.list.filter(todo => todo.isDone)
    }

    @computed
    get openTodo() : TodoItem[] {
        return this.list.filter(todo => !todo.isDone)
    }
}