const { Schema, model } = require("mongoose");

const CreateprojectSchema = new Schema({
	projectDescription: {
		type: String,
		required: [true, "Please tell us about your project"],
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
	yourName: {
		type: String,
		required: [true, "who is point of conntact for this project?"],
	},
});

const Createproject = model("Createproject", CreateprojectSchema);

module.exports = Createproject