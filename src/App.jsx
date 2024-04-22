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

const transportOptionsFormatted = Object.entries(transportOptions.data).reduce(
  ({ data, keys, transportType }, [key, value]) => {
    const type = transportOptions.transportType[key]?.toUpperCase();
    return {
      data: { ...data, [key]: { ...value, type } },
      keys: [...keys, key],
      transportType: new Set([...transportType, type]),
    };
  },
  { data: {}, keys: [], transportType: new Set() }
);

const title = Array.from(transportOptionsFormatted.transportType).join(" - ");

function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (event) => {
    setSelectedOption({
      optionsSelectedKey: event.target.value,
      optionsSelectedData: transportOptionsFormatted.data[event.target.value],
    });
  };

  return (
    <div className="App">
      <p>
        Tipos de medio de transporte: <span>{title}</span>
      </p>
      <div className="select-container">
        <label>Selecciona un medio de transporte</label>
        <select
          value={selectedOption?.optionsSelectedKey}
          onChange={handleChange}
        >
          {transportOptionsFormatted.keys.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button onClick={() => setSelectedOption(null)}>Limpiar</button>
      </div>
      {selectedOption && (
        <ul>
          {Object.entries(selectedOption?.optionsSelectedData).map(
            ([key, value]) => (
              <li key={key}>
                <p>
                  {key}: {value}
                </p>
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
}

export default App;
