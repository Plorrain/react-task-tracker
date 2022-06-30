import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {

  const onClick = () => {
    console.log('Click')
  }
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color='pink' text='Add' onClick={onClick}/>
    </header>
  )
}
Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// in h1 tag : style={{ color: 'red', backgroundColor: 'blue' }}
// OR CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'blue'
//   replace with headingStyle in single{} in h1 style
// }
export default Header
