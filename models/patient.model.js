const moongoose = require('mongoose');

const PatientSchema = moongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Pllease enter patient name']
        },

        gender: {
            type: String,
            required: true
        },

        age: {
            type: Number,
            required: [true, 'Enter patient age']
        },

        profilePicture: {
            type: String,
            required: false
        },

        dateOfBirth: {
            type: String,
            required: [true, 'Enter patient Date of Birth']
        },

        phoneNumber: {
            type: String,
            requred: [true, 'Pllease enter patient phone number']
        },

        emergencyContact: {
            type: String,
            required: [true, 'Pllease enter patient emergency contact']
        },

        insuranceType: {
            type: String,
            required: [true, 'Pllease enter insurance type']
        },       

        occupation: {
            type: String,
            required: [true, 'Enter patient occupation']
        },

        diagnosis: {
            type: String,
            required: [true, 'Pllease enter diagnosis']
        },

        bill: {
            type: Number,
            required: [true, 'Pllease enter total payable balance'],
            default: 0
        }
    },
    {
        timestamps: true
    }
);

const Patient = moongoose.model('Patient', PatientSchema);

module.exports = Patient;