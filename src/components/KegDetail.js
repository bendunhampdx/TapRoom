import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {
  const { keg, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h3>Name: {keg.name}</h3>
      <h3>Brand: {keg.brand}</h3>
      <h3>Price Per Pint: ${keg.price}</h3>
      <h3>ABV: {keg.alcoholContent}%</h3>
      <h4>{keg.volume*8} Pints Left</h4>
      <button onClick={ props.onClickingEdit }>Update Keg</button>
      <button onClick={() => onClickingDelete(keg.id)}>Delete Keg</button>
      <hr />
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingSell: PropTypes.func
};

export default KegDetail;