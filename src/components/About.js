import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='about-container'>
        <h4>Version 1.0.0</h4>
        <Link className='link-btn' to="/">Back</Link> 
    </div>// Link - para wlang reload/loading
  )
}

export default About