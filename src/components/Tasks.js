import TaskLists from "./TaskLists"

const Tasks = ({tasks, onDelete, onDoubleClick}) => { //props or properties galing sa ibang components

  return (
    <div>
        {tasks.map(taskList => (<TaskLists key={taskList.id} taskList={taskList} onDelete={onDelete} onDoubleClick={onDoubleClick} />))}
    </div>
    //Mapping - other way of looping need unique key para hindi nag error
    //yung task is sariling declare
    //nag map para mabitbit nya yung array galing s app.js
  )
}

export default Tasks