import React from 'react'
import logo from '../../sophieknits-hm.png'

const header = () => {

  return (
    <header class="bg-green sans-serif">
      <nav class="pa3 pa4-ns">
        <a 
          class="link dim black b f1 f-headline-ns tc db mb3 mb4-ns" 
          href="#" 
          title="Home">
            <img src={logo} center alt='avatar' />
        </a>
        <div class="tc pb3">
          <a class="link dim black f1 f3-ns dib mr3" href="#" title="Home">TOOLS</a>
          <a class="link dim black f1 f3-ns dib mr3" href="#" title="Instagram">INSTAGRAM</a>
        </div>
      </nav>
    </header>
  )
};

export default header;