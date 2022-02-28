import { action, observable } from "mobx";

export default class TodoItem {
    id = Date.now();

    @observable text: String = "";
    @observable isDone: boolean = false;

    constructor(text:String) {
        this.text = text;

    }

    @action
    toggleIsDone = () => {
        this.isDone = !this.isDone;
    }

    @action updateText = (text:String)=>{
        this.text = text;
    }
}