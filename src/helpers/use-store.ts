import { useContext } from "react";
import { TodoList } from "../stores/TodoList";
import { StoreContext } from "./store-provider";

export const useStore = () : TodoList => useContext(StoreContext)