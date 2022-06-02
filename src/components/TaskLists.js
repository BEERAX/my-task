import { FaTrash } from 'react-icons/fa'

const TaskLists = ({taskList, onDelete, onDoubleClick}) => { //props or property n galing sa ibang components
  return (
    <div className={`main-task-container ${taskList.reminder ? 'reminder' : ''}`} onDoubleClick={() => onDoubleClick(taskList.id)}>
      <div className='tasklist-container'>
          <h3 className='ttask'>{taskList.task}<FaTrash className='delete-btn'  onClick={() => onDelete(taskList.id)}/></h3>
          <p className='tdate'>{taskList.date}</p>
      </div>
    </div>
  )
}

export default TaskLists