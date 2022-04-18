import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { APPROVE_OFFER } from "../../utils/mutation";

const OfferList = ({ offers, projectId }) => {
  const [isOffer, setIsOffer] = useState({newOffer:""});
  const [approveOffer, { error }] = useMutation(APPROVE_OFFER);

  const handleChange = (e) => {
    const {name,value} = e.target
    setIsOffer({
      ...isOffer,
      [name]:value,
    })
  };
  console.log(isOffer)
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await approveOffer({
        variables: { isOffer, projectId },
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
                onSubmit={handleFormSubmit}
              >
                <button name={offer.newOffer+1} value={offer.newOffer} onChange={handleChange}>
                  The Offer Value:{offer.newOffer}{" "}
                </button>
              </form>
            </div>
          </div>
        ))}
    </div>
  );
};
export default OfferList;
