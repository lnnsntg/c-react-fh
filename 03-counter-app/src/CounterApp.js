import React, { Fragment } from "react";
import { PropTypes } from "prop-types";
function CounterApp({ value }) {
    // HandleAdd function
    function handleAdd(e) {
        console.log(e);
    }
    return (
        <Fragment>
            <h1>CounterApp</h1>
            <h2> {value} </h2>
            <button onClick={handleAdd}>+1</button>
        </Fragment>);
}
CounterApp.propType = {
    value: PropTypes.number
};
export default CounterApp;