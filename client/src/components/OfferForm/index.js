import React, { useState } from 'react';


const OfferForm = ({projectId}) => {
  return (
    <div>
      <p className="m-0">
      </p>
      <form className="flex-row justify-center justify-space-between-md align-stretch">
        <input
          placeholder="Enter your Offer"
          className="form-input col-12 col-md-9"
        ></input>
           <input
          placeholder="Enter your Name "
          className="form-input col-12 col-md-9"
        ></input>
        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default OfferForm;