import React from "react";

const OfferList = ({ offers }) => {
  if (!offers.length) {
    return <h3>No Offer Yet</h3>;
  }
  return (
    <div>
      {offers &&
        offers.map((offer) => (
          <div className="card mb-3" key={offer._id}>
            <div className="pill mb-3">
              <p className="card-body"> Offer By:{offer.ContractorName}</p>
              <p>The Offer Value:{offer.newOffer} </p>
            </div>
          </div>
        ))}
    </div>
  );
};
export default OfferList;
