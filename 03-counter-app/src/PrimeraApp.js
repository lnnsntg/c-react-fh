import React, { Fragment } from "react";
import { PropTypes } from "prop-types";
// Functionals Components
const PrimeraApp = ({ saludo, subtitulo }) => {
  return (
    <Fragment>
      <h1>{saludo}</h1>
      <p>ESTE ES EL PARRAFÓ</p>
      <p>{subtitulo}</p>
    </Fragment>
  );
};

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
};
PrimeraApp.defaultProps = {
  subtitulo: "fh es un rolitranco de MM",
};

export default PrimeraApp;
