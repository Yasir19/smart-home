import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { APPROVE_OFFER } from "../../utils/mutation";


const ApproveOffer = (offers) =>{
    console.log("myOffers",offers)
    return(
        <a href="#">approve me</a>
    )

}
export default ApproveOffer;