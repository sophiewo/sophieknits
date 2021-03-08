import React from 'react';
import DecreaseCalculator from '../DecreaseCalculator/DecreaseCalculator'
import Card from '@material-ui/core/Card'

const ToolCard = (props) => {
  return (
    <Card >
    <article >
      <h1 > {props.title} </h1>
      <div>
        <p>
         <DecreaseCalculator />
      </p>
      </div>
    </article>
    </Card>
  )
}

export default ToolCard;