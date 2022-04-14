const { Schema, model } = require("mongoose");

const createProjectSchema = new Schema({
	projectDescription: {
		type: String,
		required: [true, "Please tell us about your project."],
		trim: true,
	},
	projectOwner: {
		
	},
	projectAddress: {
		type: String,
		required: [
			true,
			"Please let us know where our services our needed.",
		],
		trim: true,
	},
	projectETC: {
		type: String,
		required: [true, "Please let us know by when you need this job done."],
		trim: true,
	},
	projectMaterials: {
		type: String,
		required: false,
		trim: true,
	},
	projectCost: {
		type: Number,
		required: [true, "Please give us an estimate on your project."]
	}
});

const Createproject = model("Createproject", CreateprojectSchema);

module.exports = Createproject

