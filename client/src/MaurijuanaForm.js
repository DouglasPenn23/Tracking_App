// src/components/MarijuanaForm.js
import React, { useState } from 'react';

const MarijuanaForm = () => {
  const [marijuanaAmount, setMarijuanaAmount] = useState('');
  const [timePeriod, setTimePeriod] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to be sent to the server
    const data = {
      marijuanaAmount,
      timePeriod,
    };

    // Make a POST request to your backend endpoint
    try {
      const response = await fetch('/api/marijuana', {
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
        Amount of Marijuana (in grams):
        <input type="number" value={marijuanaAmount} onChange={(e) => setMarijuanaAmount(e.target.value)} />
      </label>
      <label>
        Time Period:
        <input type="text" value={timePeriod} onChange={(e) => setTimePeriod(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MarijuanaForm;
