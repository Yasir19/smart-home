import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { APPROVE_OFFER } from "../../utils/mutation";
import ApprovedList from "../ApprovedList";
import Auth from "../../utils/auth";

const OfferList = ({ offers, projectId }) => {
  const [newOffer, setIsOffer] = useState("");
  const [approveOffer, { error }] = useMutation(APPROVE_OFFER);

  const handleChange = (e) => {
    setIsOffer(e.target.value);
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await approveOffer({
        variables: { newOffer, projectId },
      });
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
              <p className="card-body"> Offer By:{offer.ContractorName}</p>
              <form
                className="flex-row justify-center justify-space-between-md align-stretch"
                onSubmit={(e) => handleFormSubmit(e, offer.newOffer)}
              >
                <button
                  name={offer.ContractorName}
                  value={offer.newOffer}
                  onClick={handleChange}
                >
                  The Offer Value:{offer.newOffer}{" "}
                </button>
              </form>
            </div>
            <div className="flex-row justify-space-between mb-3">
              {/* <div className="col-12 mb-3 col-lg mb-3">
                {Auth.customerLoggedIn() && (
                  <ApprovedList projects={projectId}></ApprovedList>
                )}
              </div> */}
            </div>
          </div>
        ))}
    </div>
  );
};
export default OfferList;
