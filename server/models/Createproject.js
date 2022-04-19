const { Schema, model } = require("mongoose");
const offersSchema = require("./Offers");

const CreateprojectSchema = new Schema(
	{
		projectDescription: {
			type: String,
			required: true,
			trim: true,
		},
		projectZipCode: {
			type: String,
			required: [
				true,
				"Please tell us the project zip code, we will find you smart profisionals in your area",
			],
			trim: true,
		},
		projectMaterials: {
			type: String,
			required: false,
			trim: true,
		},
		userName: {
			type: String,
			required: true,
		},
		initPrice: {
			type: String,
		},
		offers: [offersSchema],
	},
	{
		toJSON: {
			getters: true,
		},
	}
);
CreateprojectSchema.virtual("offerCount").get(function () {
	return this.offers.length;
});

const Createproject = model("Createproject", CreateprojectSchema);

module.exports = Createproject;
