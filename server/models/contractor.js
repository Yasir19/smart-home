const {Schema, model} = require ('mongoose');
const bcrypt = require('bcrypt')

const contractorSchema = new Schema(
    {
        firstName:{
            type:String,
            required:true,
            trim:true
        },
        lastName:{
            type:String,
            required:true,
            trim:true
        },
        email:{ 
            type: String,
            required:true,
            unique:true,
            match: [/.+@.+\..+/, 'Must match an email address!']
        }, 
        password: {
            type: String,
            required: true,
            minlength:10
        },
        address: {
            type:String,
            required:true,
        },
        driverLicense: {
            type:String,
            required:true,
        },
        typeOfServices: {
            type:String,
            required:true,
            trim:true
        },
        cert: {
            type:String,
            required:false,
        },
        serviceZipcode: {
            type:Number,
            required:true,
        },
        bio: {
            type: String,
            required: false,
            maxlength: 150
        },
        photo:{
            type:String,
            required:false,
        },
        phoneNumber: {
            type:Number,
            required:true,
            match:[ /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/, 'must match a phone number']
        }
    }
);
// set up pre-save middleware to create password
contractorSchema.pre('save', async function(next){
    if(this.isNew || this.isModified('password')){
        const saltRound = 10;
        this.password = await bcrypt.hash(this.password, saltRound);
    };
    next();
})
// compare the incoming password with the hashed password
contractorSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
};

const Contractor = model('Contractor', contractorSchema);
module.exports = Contractor;


