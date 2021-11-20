import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
      <label htmlFor="name">Name:</label>
        <input
          type='text'
          name='name'
          placeholder='Beer Name'

        />
        <label htmlFor="brand">Brand:</label>
        <input
          type='text'
          name='brand'
          placeholder='Brand'
    
        />
        <label htmlFor="price">Price:</label>
        <input
          type='double'
          name='price'
          placeholder='Price'

        />
        <label htmlFor="alchoholContent">Alchohol Content:</label>
        <input
          type='double'
          name='alcoholContent'
          placeholder='Alcohol Content'
        />
        <label htmlFor="volume">Update Volume in gallons:</label>
          <input
            type="double"
            name="volume"
        />

        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;