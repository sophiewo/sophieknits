import React from 'react'
import logo from '../../sophieknits.png'

const header = () => {

  return (
    <header className="bg-green sans-serif">
      <div class="mw9 center pa4 pt5-ns ph7-l">
      <img src={logo} center alt='avatar' />
        <h2>Handmade in London</h2>
      </div>
    </header>
  )
};

export default header;