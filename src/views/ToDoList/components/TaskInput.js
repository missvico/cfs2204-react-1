function TaskInput(props){
    return(
        <>
            <input value={props.currTask} onChange={props.handleChange} placeholder="Enter a new task"/>
            <button onClick={props.handleAdd}>Add</button>
        </>
    )
};

export default TaskInput;