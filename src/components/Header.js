import { FaPowerOff } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa'
import { useLocation } from 'react-router-dom' // 1 kind of hook to disable the add button when inside of About button 
import Button from "./Button"



const Header = ({ title, onShowAdd, showAdd }) => {
 const location = useLocation()

  return (
    <div className='main-header'>
        <h1 className='my-tasks'>{title} <span>Tasks</span></h1>
          <div className='btn-container'>
            {location.pathname === '/' && <Button text={showAdd ? <FaPowerOff className='off-btn'/> 
            : <FaPlus className='plus-btn'/>}
            color={showAdd ? '#fff' : '#fff'} onClick={onShowAdd}/>}
          </div>
    </div>
  )
}

Header.defaultProps = {
    title: 'My'
}


 
export default Header