import { useEffect, useRef, useState } from 'react';
import './App.css';

/**
 * React functional component for the main application
 *
 * @function App
 * @returns {JSX.Element} The main application component
 */
function App() {
  const [temp, setTemperature] = useState(17);
  const colorRef = useRef('neutral');
  /**
   * Effect hook that updates the color of the temperature display based on the current temperature
   *
   * @function useEffect
   * @param {Function} effectCallback The effect function
   * @param {Array} dependencies An array of values that trigger the effect
   */
  useEffect(() => {
    if (temp < 10) {
      colorRef.current = 'cold';
    } else if (temp <= 23) {
      colorRef.current = 'neutral';
    } else {
      colorRef.current = 'hot';
    }
  }, [temp]);

  /**
   * Function to handle the increase in temperature
   *
   * @function handleTempIncrease
   * @param {Event} event The event object
   */
  function handleTempIncrease(event) {
    setTemperature((prevTemp) => prevTemp + 1);
  }

  /**
   * Function to handle the decrease in temperature
   *
   * @function handleTempDecrease
   * @param {Event} event The event object
   */
  function handleTempDecrease(event) {
    setTemperature((prevTemp) => prevTemp - 1);
  }

  return (
    <>
      <div className="card">
        <div className="temperature-display-container">
          <div className={`temperature-display ${colorRef.current}`}>
            {temp}°C
          </div>
        </div>
        <div className="button-container">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleTempDecrease}
          >
            -
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleTempIncrease}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
