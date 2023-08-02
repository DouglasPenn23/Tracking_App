// src/components/BeerForm.js
import React, { useState } from 'react';

const BeerForm = () => {
  const [beerAmount, setBeerAmount] = useState('');
  const [timePeriod, setTimePeriod] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Prepare the data to be sent to the server
    const data = {
      beerAmount,
      timePeriod,
    };
  
    // Make a POST request to your backend endpoint
    try {
      const response = await fetch('/api/beer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        // Data submitted successfully, do something if needed
        console.log('Data submitted successfully');
      } else {
        // Handle errors if needed
        console.error('Error submitting data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Amount of Beer:
        <input type="number" value={beerAmount} onChange={(e) => setBeerAmount(e.target.value)} />
      </label>
      <label>
        Time Period:
        <input type="text" value={timePeriod} onChange={(e) => setTimePeriod(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BeerForm;
