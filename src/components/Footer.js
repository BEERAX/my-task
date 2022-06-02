import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer-container'>
        <p>Copyright &copy; 2022 | All rights reserved.</p>
        <Link className='link-btn' to="/about">About</Link>
    </footer>
  )
}

export default Footer