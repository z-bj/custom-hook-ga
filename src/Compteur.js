import React, { useState } from "react";

function useIncrement(initialValue = 0, step = 1) {
  const [count, setCount] = useState(initialValue);

  const increment = function () {
    setCount((c) => c + 1);
  };

  return [count, increment];
}

function useToggle(initialValue = true) {
const [value, setValue] = useState(initialValue);
    const toggle = function () {
        setValue(v=>!v);
    }
    return[value,toggle]
}

function Compteur() {
  const [count, increment] = useIncrement(10);

  return <button onClick={increment}>Increment {count}</button>;
}

function App2() {
    const [compteurVisible, toggleCompteur]=useToggle(true)
  return (
    <div>
      Afficher le compteur{" "}
      <input
        type="checkbox"
        onChange={toggleCompteur}
        checked={compteurVisible}
      />
      <br />
          {compteurVisible && <Compteur />}
    </div>
  );
}

export default App2;
