

const Button = ({ color, text, onClick }) => {

  return (
  <div className='add-btn'>
    <button onClick={onClick} style={{background: color}}>{text}</button>
  </div>
// double curly bracket para sa paglalagay ng style o attribute sa isang element
  )
}

Button.defaultProps = {
  text: '+',
} //defaultProps need kapag may mga gusto kang activity na nagbabago ang name or title ng props

// Button.propTypes = {
//   onClick: PropTypes.func,
// }

export default Button