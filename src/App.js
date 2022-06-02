import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header';
import Tasks from './components/Tasks';
import './App.css';
import { useState } from 'react'
import AddTasks from './components/AddTasks';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  const [showAddTask, setShowAddTask] = useState (false) //not showing the addTask form
  const [ tasks, setTasks ] = useState ([
    {
      id: 1,
      task: 'Birthday of My Daughter Gave',
      date: '18th July at 5pm Haim Chicken',
      reminder: true
    },
    {
      id: 2,
      task: 'Birthday of My Wife',
      date: '20th July at 5pm',
      reminder: true
    },
    {
      id: 3,
      task: 'Birthday ME',
      date: '14th July at 7pm',
      reminder: false
    }
  ]) //nilagay eto sa App.js para maging global state, kapag nasa Tasks Component lng kasi
  //di sya magagalaw o maaccess ng ibang component maliban nlng kung may naka embed n ibang component sa tasks component



  //ADD FUNCTION
  const addTasks = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1 //Generating random IDs

    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  //SET REMINDER/TOGGLE REMINDER
  const onDoubleClick = (id) => {
      setTasks(tasks.map((task)=> task.id === id ? {...task, reminder: !task.reminder} : task
      )
    )
  }
  

  //DELETE FUNCTION
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  } //setTasks para syang innerHTML, binabago nya ang current value.
  
  return (
    <Router>
    <div className="main-container">
      <Header onShowAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      <Route path='/' exact render={(props) => (
        <>
        {showAddTask && <AddTasks onAdd={addTasks}/>}
        {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onDoubleClick={onDoubleClick}/>) : ('WALA NG TASK NA GAGAWIN')}
        </>
      )} />
      <Route path='/about' component={About}/>
      <Footer />
    </div>
    </Router> //&& - short way of doing ternary without an else
    //showAddTask closing the addTask form
    
  );
}

export default App;
