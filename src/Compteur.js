import React, { useState, useEffect } from "react";

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
    setValue((v) => !v);
  };
  return [value, toggle];
}

function useAutoIncrement(initialValue = 0, step = 1) {
  const [count, increment] = useIncrement(initialValue, step);

  useEffect(function () {
    const timer = window.setInterval(function () {
      increment()
    }, 1000);

    return function () {
      clearInterval(timer);
    };
  }, []);

  return count;
}

function Compteur() {
  const count = useAutoIncrement(0, 10);

  return <button>Increment {count}</button>;
}

function App2() {
  const [compteurVisible, toggleCompteur] = useToggle(true);
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
