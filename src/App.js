import React from 'react';

import DecreaseCalculator from './components/DecreaseCalculator/DecreaseCalculator';
import Header from './components/Header/Header';
import 'tachyons';

function App() {
  return (
    <div className="App">
      <Header />
      <DecreaseCalculator />
    </div>

  );
}

export default App;