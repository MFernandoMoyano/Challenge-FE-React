import React, { useState } from "react";
import "./App.css";

const transportOptions = {
  data: {
    car: { amount: 100, description: "Car" },
    bus: { amount: 50, description: "Bus" },
    bike: { amount: 10, description: "Bicycle" },
    airplane: { amount: 500, description: "Airplane" },
    helicopter: { amount: 200, description: "Helicopter" },
    boat: { amount: 200, description: "Boat" },
    ship: { amount: 400, description: "Ship" },
    yacht: { amount: 1000, description: "Yacht" },
  },
  transportType: {
    car: "land",
    bus: "land",
    bike: "land",
    airplane: "air",
    helicopter: "air",
    boat: "maritime",
    ship: "maritime",
    yacht: "maritime",
  },
};

/** 1 */
const transportOptionsFormatted = {};

function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const keys = Object.keys(transportOptions.transportType);

  keys.forEach((key) => {
    transportOptionsFormatted[key] = {
      ...transportOptions.data[key],
      type: transportOptions.transportType[key]
    }
  })

  const types = [];
  keys.forEach(key =>{
    const type = transportOptions.transportType[key];
    if(!types.includes(type)) {
      types.push(type);
    }
  })

  const handleChange = (event) => {
    setSelectedOption(event.target.value)
  };

  return (
    <div className="App">
      <p>
        Tipos de medio de transporte:
        {types.map((type, i) => <> { !!i && ' - ' } {type}</>)}
      </p>
      <div className="select-container">
        <label>Selecciona un medio de transporte</label>
        <select value={selectedOption} onChange={handleChange}>
          { keys.map((key) => 
            <option
              key={key} 
              value={transportOptionsFormatted[key]}>
              {transportOptionsFormatted[key].description}
            </option>
          )}
        </select>

        <button
          onClick={() => {setSelectedOption(null)}}
        >
          Limpiar
        </button>
      </div>
      {selectedOption && <ul>
        <li>Opcion1: Valor1</li>
      </ul>}
    </div>
  );
}

export default App;
