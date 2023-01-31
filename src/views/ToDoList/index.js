import {useState} from "react"
import TaskInput from "./components/TaskInput"
import TaskList from "./components/TaskList"


function ToDoList(){
    const [currTask, setCurrTask] = useState("")
    const [taskList, setTaskList] = useState([])

    const handleChange = function(event){
        setCurrTask(event.target.value)
    };

    const handleAdd = function(event){
        setTaskList([...taskList, currTask]) //spread operator
        setCurrTask("")
    };


    return(
        <section>
            <h1>To Do List</h1>
            <TaskInput handleChange={handleChange} handleAdd={handleAdd} currTask={currTask}/>
            <TaskList taskList={taskList}/>
        </section>
    );
};

export default ToDoList;