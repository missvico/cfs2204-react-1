import TaskInput from "./TaskInput"

function TaskList(props){
    console.log(props.taskList)
    return(
        <ul>
            {/* <li>{props.taskList[0]}</li>
            <li>{props.taskList[1]}</li>
            <li>{props.taskList[2]}</li> */}

            {props.taskList.map(function(task){
                return <li>{task}</li>
            })}
        </ul>
    )
}
export default TaskList