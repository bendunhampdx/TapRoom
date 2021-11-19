import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props) {
  return (
    <React.Fragment>
      <div className="list">
        <hr />
        {props.kegList.map((keg) =>
          <Keg
          whenKegClicked={props.onKegSelection}
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholContent={keg.alcoholContent}
          volume={keg.volume}
          pints = {keg.volume *8}
          id={keg.id}
          key={keg.id}
          />
          )}
      </div>
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onSelectingKeg: PropTypes.func,
  onSellingPint: PropTypes.func
};

export default KegList;