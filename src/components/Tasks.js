import Task from './Task'
// tasks.push X -> state is immutable, need to recreate & send it down using setTasks
// ContextAPI or Redux to store the state hover above the UI
const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
        <>
            {tasks.map((task, index) => (
            <Task 
                key={index} 
                task={task} 
                onDelete={onDelete}
                onToggle={onToggle}/>))}
        </>
    )
}

export default Tasks
