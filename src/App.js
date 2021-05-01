import React from 'react';

import Header from './components/Header/Header';
import Card from './components/Card/Card';
import HomePage from './components/Homepage/HomePage'

import CloudinaryImages from './components/Cloudinary/CloudinaryImages'

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <CloudinaryImages/>
      <br></br>
      <Card title="Decrease Calculator" />
    </div>

  );
}

export default App;