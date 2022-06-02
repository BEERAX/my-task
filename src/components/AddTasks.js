import { useState } from 'react'

const AddTasks = ({onAdd}) => { //props or property galing sa ibang component
    const [task, setTask] = useState('')
    const [date, setDate] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault() //way to prevent the default action of web page

    if(!task) {
        alert ('Please add Task!')
        return
    }

    onAdd ({task, date, reminder})

    setTask('')
    setDate('')
    setReminder(false)

    }

  return (
    <form className='form-container' onSubmit={onSubmit}>
        <div>
            <label className='lbl-style'>Task</label>
            <input className='form-textbox' type="text" value={task} placeholder='Add Task here' onChange={(e) => setTask(e.target.value)} />
        </div>
        <div>
            <label className='lbl-style'>Date & Time</label>
            <input className='form-textbox' type="text" value={date} placeholder='Add Date & Time here' onChange={(e) => setDate(e.target.value)} />
        </div> 
        <div>   
            <label className='lbl-style'>Set Reminder</label>
            <input className='form-checkbox' type="checkbox" value={reminder} checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
        </div>
            <input className='submit-btn' type="submit" value='Save Task'/>

    </form>
  )
}

export default AddTasks