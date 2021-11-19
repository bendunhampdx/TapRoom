import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenKegClicked(props.id)}>
        <h3>Name: {props.name}</h3>
        <h4>Brand: {props.brand}</h4>
        <h4>Price: ${props.price}</h4>
        <h4>ABV: {props.alcoholContent}%</h4>
        <h4>{props.volume*8} Pints Left</h4>
        <div className="sell">
          <button onClick = {() => props.whenSellClicked(props.id)}>Sell Pint</button>
        </div>
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
  volume: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  whenKegClicked: PropTypes.func,
  whenSellClicked: PropTypes.func
}

export default Keg;
