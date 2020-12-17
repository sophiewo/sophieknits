import React from 'react';

const navItem = (props) => {

  return (
      <a
        class="link dim black f3 dib mr3"
        target="_blank"
        href={props.url}
        title={props.title}>
          {props.name} 
      </a>
  )
};

export default navItem;