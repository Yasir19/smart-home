import React, {useState} from "react";
import ApproveOffer from "../ApproveOffer";

const OfferList = ({ offers }) => {
  const [isOffer, setIsOffer] = useState('');

  const handleChange =(e)=>{
  setIsOffer(e.target.value)
  }

  console.log('m',isOffer)
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
              <button value={isOffer} onChange={handleChange}>The Offer Value:{offer.newOffer} </button>
            
            </div>
          </div>
        ))}
    </div>
  );
};
export default OfferList;
