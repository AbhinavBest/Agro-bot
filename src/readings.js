import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import { onValue, ref } from 'firebase/database';
import { db } from './firebaseConfig';

export default function Readings() {
  const [humidity, setHumidity] = useState(0);
  const [moisture, setMoisture] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const [moistureArray, setMoistureArray] = useState([]);
  const [timeArray, setTimeArray] = useState([]);

  useEffect(() => {
    const valueRef = ref(db, "Sensor/Moisture");
    const humidityRef = ref(db, "Sensor/Humidity");
    const temperatureRef = ref(db, "Sensor/Temperature");

    const moistureListener = onValue(valueRef, (snapshot) => {
      const valueData = snapshot.val();
      setMoisture(valueData);
      setMoistureArray((prevArray) => [...prevArray, valueData]);
    });

    const humidityListener = onValue(humidityRef, (snapshot) => {
      const humidityData = snapshot.val();
      setHumidity(humidityData);
    });

    const temperatureListener = onValue(temperatureRef, (snapshot) => {
      const temperatureData = snapshot.val();
      setTemperature(temperatureData);
    });

    const timer = setInterval(() => {
      setTimeArray((prevArray) => [...prevArray, prevArray.length]);
    }, 1000);

    return () => {
      clearInterval(timer);
      moistureListener();
      humidityListener();
      temperatureListener();
    };
  }, []);

  return (
    <div className='readings-container'>
      <div className='graph-container'>
        <Plot
          data={[
            {
              x: timeArray,
              y: moistureArray,
              type: 'line',
              mode: 'lines+markers',
              marker: { color: 'red' },
            },
          ]}
          layout={{ width: '450', height: '340', title: 'Moisture Data' }}
        />
      </div>
      <div className='values-container'>
        <div className='humidity reading'>
          <h1>Humidity: {humidity}</h1>
        </div>
        <div className='moisture reading'>
          <h1>Moisture: {moisture}</h1>
        </div>
        <div className='temperature reading'>
          <h1>Temperature: {temperature}</h1>
        </div>
      </div>
    </div>
  );
}
