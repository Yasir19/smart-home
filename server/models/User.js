const { Schema, model } = require("mongoose");
const bcrypt = require('bcrypt')

const UserSchema = new Schema({
	userName: {
		type: String,
		unique: true,
		required: [true, "username is required"],
		trim: true,
	},
	firstName: {
		type: String,
		required: [true, "firstname is required"],
		trim: true,
	},
	lastName: {
		type: String,
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
		type:String,
		required:true,
		match:[ /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/, 'must match a phone number']
	},
	address: {
		type:String,
		required:true,

	},
	role: {
		type: String,
		required: true,
		enum: ['Customer','Contractor'],
		default:'Customer'
	},
	projects: [
		{
		  type: Schema.Types.ObjectId,
		  ref: 'Createproject'
		}
	  ],

});
UserSchema.pre('save', async function(next){
    if(this.isNew || this.isModified('password')){
        const saltRound = 10;
        this.password = await bcrypt.hash(this.password, saltRound);
    };
    next();
})
// compare the incoming password with the hashed password
UserSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
};

// create the User model using UserSchema
const User = model("User", UserSchema);

// expoert the user model
module.exports = User;
