// src/App.js
import React from 'react';
import BeerForm from './components/BeerForm';
import MarijuanaForm from './components/MarijuanaForm';

const App = () => {
  return (
    <div>
      <h1>Beer Consumption</h1>
      <BeerForm />

      <h1>Marijuana Consumption</h1>
      <MarijuanaForm />
    </div>
  );
};

export default App;
