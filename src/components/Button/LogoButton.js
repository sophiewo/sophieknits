import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import logo from '../../sophieknits-hm.png';
import testImg from '../../sophieknits.png';

  export default function ButtonLogo() {

    const [image, setImage] = useState(logo);

    return (

      <Button
        // onClick={}
        title="Home">
        <img src={image} center alt='SophieKnits_'
          onMouseOver={() => { setImage(testImg) }}
          onMouseOut={() => { setImage(logo) }}
          />
      </Button>
    )
  };

