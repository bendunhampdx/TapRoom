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
          // value={props.formData.name}
          // onChange={props.formChangeHandler}
        />
        <label htmlFor="brand">Brand:</label>
        <input
          type='text'
          name='brand'
          placeholder='Brand'
          // value={props.formData.brand}
          // onChange={props.formChangeHandler}
        />
        <label htmlFor="price">Price:</label>
        <input
          type='text'
          name='price'
          placeholder='Price'
          // value={props.formData.price}
          // onChange={props.formChangeHandler}
        />
        <label htmlFor="abv">Alchohol Content:</label>
        <input
          type='text'
          name='alcoholContent'
          placeholder='Alcohol Content'
          // value={props.formData.alcoholContent}
          // onChange={props.formChangeHandler}
        />
        <label htmlFor="pints">Pints left:</label>
          <input
            type="text"
            name="pints"
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