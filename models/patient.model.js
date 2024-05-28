const moongoose = require('mongoose');

const PatientSchema = moongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Pllease enter patient name']
        },

        age: {
            type: Number,
            required: [true, 'Enter patient age']
        },

        sex: {
            type: String,
            required: true
        },

        occupation: {
            type: String,
            required: [true, 'Enter patient occupation']
        },

        diagnosis: {
            type: String,
            required: true
        },

        bill: {
            type: Number,
            required: true,
            default: 0
        },

        image: {
            type: String,
            required: false
        },
    },
    {
        timestamps: true
    }
);

const Patient = moongoose.model('Patient', PatientSchema);

module.exports = Patient;