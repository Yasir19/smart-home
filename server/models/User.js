const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
	userName: {
		type: String,
		unique: true,
		required: [true, "username is required"],
		trim: true,
	},
	firstName: {
		type: String,
		unique: true,
		required: [true, "firstname is required"],
		trim: true,
	},
	lastName: {
		type: String,
		unique: true,
		required: [true, "lastname is required"],
		trim: true,
	},
	email: {
		type: String,
		required: [true, "email is required"],
		unique: true,
		validate: {
			validator: function (v) {
				//email@yahoo.com
				return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
			},
			message: (props) => `${props.value} is not a valid email`,
		},
	},
	password: {
		type: String,
		required: true,
		minlength: 9,
	},
	phoneNumber: {
		type: String,
		required: [true, "phone number is required"],
		unique: true,
		validate: {
			validator: function (v) {
				return /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/.test(v);
			},
			message: (props) => `${props.value} is not a valid phone number`,
		},
	},
	address: {
		streetAddress: {
			type: String,
			trim: true,
		},
		city: {
			type: String,
			trim: true,
		},
		state: {
			type: String,
			trim: true,
		},
		zipCode: {
			type: Number,
			trim: true,
		},
	},
});

// create the User model using UserSchema
const User = model("User", UserSchema);

// expoert the user model
module.exports = User;
