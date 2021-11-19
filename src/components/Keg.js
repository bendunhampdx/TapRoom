import React from "react";
import PropTypes from "prop-types";

function Keg() {
  return (
    <React.Fragment>
      <div onClick={() => props.whenKegClicked(props.id)}>
        <h3>{props.name}</h3>
        <h4>{props.brand}</h4>
        <h4>{props.price}</h4>
        <h4>{props.alcoholContent}</h4>
        <h4>{props.pints}</h4>
        <hr />
      </div>
    </React.Fragment>
  )
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.number.isRequired,
  pints: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  whenKegClicked: PropTypes.func
}

export default Keg;
