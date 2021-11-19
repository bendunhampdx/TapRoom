import React from "react";
import Keg from "./Keg";

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
          pints={keg.pints}
          id={keg.id}
          key={keg.id}
          />
          )}
      </div>
    </React.Fragment>
  );
}

export default KegList;