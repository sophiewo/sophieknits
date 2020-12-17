import React from 'react';

const navItem = (props) => {

  return (
    <div class="tc pb3">
      <a
        class="link dim black f1 f3-ns dib mr3"
        target="_blank"
        href={props.url}
        title={props.title}>
          {props.name} 
      </a>
    </div>
  )
};

export default navItem;