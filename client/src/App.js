import React from 'react';
import BeerForm from './components/BeerForm';
import MarijuanaForm from './components/MarijuanaForm';

const App = () => {
  return (
    <div>
      <h1>Tracking App</h1>
      <h2>Beer Consumption</h2>
      <BeerForm />
      <h2>Marijuana Consumption</h2>
      <MarijuanaForm />
    </div>
  );
};

export default App;
