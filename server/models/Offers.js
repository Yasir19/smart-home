const { Schema } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const offersSchema = new Schema(
  {
    newOffer: {
      type: String,
      required: true,
    },
    ContractorName: {
        type:String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);
module.exports = offersSchema