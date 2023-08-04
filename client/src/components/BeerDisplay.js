// src/components/MarijuanaDisplay.js
import React, { useEffect, useState } from 'react';

const MarijuanaDisplay = () => {
  const [marijuanaData, setMarijuanaData] = useState([]);

  useEffect(() => {
    // Fetch marijuana data from the backend and update the state
    fetch('/api/marijuana')
      .then((response) => response.json())
      .then((data) => setMarijuanaData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Marijuana Data Display</h2>
      <table>
        <thead>
          <tr>
            <th>Amount (grams)</th>
            <th>Time Period</th>
          </tr>
        </thead>
        <tbody>
          {marijuanaData.map((dataEntry, index) => (
            <tr key={index}>
              <td>{dataEntry.marijuanaAmount}</td>
              <td>{dataEntry.timePeriod}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarijuanaDisplay;
