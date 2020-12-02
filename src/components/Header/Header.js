import React from 'react'
import logo from '../../sophieknits.png'


const header = () => {

  return (
    <header className='tc pv4 pv5-ns'>
      <img src={logo} className='br-100 pa1 ba b--black-10 h3 w3' alt='avatar' />
      <h2 className='f6 gray fw2 ttu tracked'>Handmade in London</h2>
    </header>
  )
};

export default header;