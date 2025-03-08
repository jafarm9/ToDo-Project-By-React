import { createContext } from "react";
import TaskItems from "./TaskItems";


export const taskContext = createContext({
    taskItems : [],
    setTaskItems : ()=>{}
})