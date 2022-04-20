import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { APPROVE_OFFER } from "../../utils/mutation";
import ApprovedList from "../ApprovedList";
import Auth from "../../utils/auth";

const OfferList = ({ offers, projectId }) => {
  const [isOffer, setIsOffer] = useState({ contractorName: "", newOffer: "" });
  const [approveOffer, { error }] = useMutation(APPROVE_OFFER);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setIsOffer({
      ...isOffer,
      [name]: value,
    });
  };
 
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await approveOffer({
        variables: { ...isOffer, projectId },
      });
      console.log('my',isOffer)
    } catch (err) {
      console.log(err);
    }
  };
  if (!offers.length) {
    return <h3>No Offer Yet</h3>;
  }
  return (
    <div>
      {offers &&
        offers.map((offer) => (
          <div className="card mb-3" key={offer.newOffer}>
            <div className="pill mb-3">
              <form
                className="flex-row justify-center justify-space-between-md align-stretch"
                onSubmit={handleFormSubmit}
              >
                <label >
                  <h3>Offer By:</h3>
                  <input
                value={offer.ContractorName}
                // onLoadCapture={handleChange}
                name= "contractorName"
                className="form-input col-12 col-md-9"
                ></input>
                <br />
                <h3>
                Offer Price
                </h3>
                <input
                value={offer.newOffer}
                // onLoadCapture={handleChange}
                name= "newOffer"
                className="form-input col-12 col-md-9"
                ></input>
                </label>
                <br />
                <button className="btn" type="submit">
                Approve Offer
                </button>
              </form>
            </div>
            <div className="flex-row justify-space-between mb-3">
              <div className="col-12 mb-3 col-lg mb-3">
                {Auth.contractorLoggedIn() && (
                  <ApprovedList projects={projectId}></ApprovedList>
                )}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default OfferList;
