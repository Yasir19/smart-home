import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_OFFER } from '../../utils/mutation'


const OfferForm = ({projectId}) => {
  const [newOffer, setOffer] = useState('');
  const [addOffer, {error}] = useMutation(ADD_OFFER);
  const handleChange = (e) => {
    setOffer(e.target.value)
  }
  
  const handleFormSubmit = async( event ) => {
    event.preventDefault();
    try {
      await addOffer({
        variables: {newOffer, projectId}
      });
      setOffer('')
    } catch(e) {
      console.log(e);
    }
  } 


  return (
    <div>
      <p className="m-0">
      </p>
      <form className="flex-row justify-center justify-space-between-md align-stretch"
      onSubmit={handleFormSubmit}
      >
        <input
          placeholder="Enter your Offer"
          value={newOffer}
          onChange={handleChange}
          className="form-input col-12 col-md-9"
        ></input>
        <p></p>
        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>
      {error && <div> please check you offer value </div>}
    </div>
  );
};

export default OfferForm;