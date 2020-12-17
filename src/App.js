import React from 'react';
import 'tachyons';

import Header from './components/Header/Header';
import Card from './components/Card/Card';


function App() {
  return (
    <div className="App">
      <Header />
      <Card title="Decrease Calculator" />
    </div>

  );
}

export default App;