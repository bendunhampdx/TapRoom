import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditKegForm (props) {
  const { keg } = props;

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onEditKeg({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, alchoholContent: event.target.alchoholContent.value, id: keg.id});
  }

  return (
    <React.Fragment>
      <div className="container">
        <ReusableForm 
          formSubmissionHandler={handleEditKegFormSubmission}
          buttonText="Update Keg" />
      </div>
    </React.Fragment>
  );
}

EditKegForm.propTypes = {
  keg: PropTypes.object,
  onEditKeg: PropTypes.func
};

export default EditKegForm;