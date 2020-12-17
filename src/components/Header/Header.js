import React from 'react'
import NavBar from '../NavBar/NavBar'
import background from '../../assets/img/knit-bg1.jpg'


const header = () => {

  return (
    <article data-name="article-full-bleed-background">
      <div class="no-repeat center center fixed; background-size: cover" style={{ backgroundImage: `url(${background})` }}>
      <NavBar/>
      </div>
    </article>
  )
};

export default header;

