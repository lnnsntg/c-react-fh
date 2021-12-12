import React, { Fragment, useState } from "react";
import { PropTypes } from "prop-types";
function CounterApp({ value = 10 }) {
  const [counter, setCounter] = useState(value);

  // HandleAdd function
  function handleAdd() {
    setCounter(counter + 1);
  }
  function handleSub() {
    setCounter(counter - 1);
  }
  function handleReset() {
    setCounter(value);
  }
  return (
    <Fragment>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSub}>-1</button>
    </Fragment>
  );
}
CounterApp.propType = {
  value: PropTypes.number,
};

export default CounterApp;
