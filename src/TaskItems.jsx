import React, { useContext } from "react";
import { taskContext } from "./taskContext";

const TaskItems =()=>{
    const {taskItems , setTaskItems} = useContext(taskContext)

    const handleSetDoneTask = (id)=>{
              const index = taskItems.findIndex(t=>t.id === id)
              let newTaskItems = [... taskItems]
              newTaskItems[index].done = !newTaskItems[index].done;
              setTaskItems(newTaskItems)
            }

            const handleDeleteTask = (id)=>{
                if (window.confirm("شما یک کار را می خواهید حذف کنید . آیا مطمئن هستید ؟") == true) {
                    let newTask = taskItems.filter(t=>t.id != id)
                    setTaskItems(newTask)
                }
            }
    if (taskItems.length) {
            return(
                <ul className="list-group m-0 p-0 mt-2">
                       {
                taskItems.map(t=>(
                    <li className={`list-group-item d-flex  justify-content-between ${t.done ? "list-group-item-success" : "" }`}>
                           {t.title} 
                <span>
                    {
                        t.done ? (
                          <i className="me-3 pointer fas fa-times 
                           text-warning transition-200 text_hover_shadow" onClick={()=>handleSetDoneTask(t.id)}></i>
                            ) : (
                            <i className="me-3 pointer fas fa-check text-success transition-200 text_hover_shadow" onClick={()=>handleSetDoneTask(t.id)}></i>
                            )
                    }
                        <i className="me-3 pointer fas fa-trash text-danger transition-200 text_hover_shadow" onClick={()=> handleDeleteTask(t.id)}></i>
                </span>
                
            </li>
                ))
            }
        </ul>
    )
}else{
    return <h5 className="text-center text-danger mt-4"> هیچ کاری ثبت نشده ...! <br />برای شروع، کار جدید تایپ کنید . </h5>
               

}
}

export  default TaskItems; 