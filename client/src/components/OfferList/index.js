import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { APPROVE_OFFER } from "../../utils/mutation";
import ApprovedList from "../ApprovedList";
import Auth from "../../utils/auth";

const OfferList = ({ offers, projectId }) => {
<<<<<<< HEAD
  const [isOffer, setIsOffer] = useState({ contractorName: "", newOffer: "" });
  const [approveOffer, { error }] = useMutation(APPROVE_OFFER);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setIsOffer({
      ...isOffer,
      [name]: value,
    });
  };
=======
	const [isOffer, setIsOffer] = useState({ contractorName: "", newOffer: "" });
	const [approveOffer, { error }] = useMutation(APPROVE_OFFER);
	const handleChange = (e) => {
		const { name, value } = e.target;
>>>>>>> 5cddb10e206c7190a80bbd12d5ee7b9281acb3f8

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await approveOffer({
        variables: { ...isOffer, projectId },
      });
      console.log("my", isOffer);
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
          <div className=" card-body" key={offer.newOffer}>
            <div className="pill mb-3">
              <form
                className="flex-row justify-center justify-space-between-md align-stretch"
                onSubmit={handleFormSubmit}
              >
                <label>
                  <h4>To Accept checkbox and Submit!</h4>
                  <input
                    value={offer.ContractorName}
                    onClick={handleChange}
                    type="checkbox"
                    name="contractorName"
                    className="form-input col-12 col-md-9"
                  ></input>
                  <h4>By: {offer.ContractorName}</h4>
                  <input
                    value={offer.newOffer}
                    onClick={handleChange}
                    type="checkbox"
                    name="newOffer"
                    className="form-input col-12 col-md-9"
                  ></input>

                  <h3>Offer price: ${offer.newOffer}</h3>
                </label>
                <br />
                <button className="btn btn" type="submit">
                  Approve
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
