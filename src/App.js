import React from 'react';
import 'tachyons';

import Header from './components/Header/Header';
import Card from './components/Card/Card';
import bgImages from './assets/img/knit-bg1.jpg'


function App() {
  return (
    <div className="App">
      <Header />
      <Card title="Decrease Calculator" />
      <img src={bgImages} alt="background" />
    </div>

  );
}

export default App;