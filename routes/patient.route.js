const express = require('express');
const router = express.Router();
const {getPatients, getPatientById, createPatient, updatePatient, deletePatient} = require('../controllers/patient.controller');

//API GET -- Get patients
router.get('/', getPatients);

//API GET BY ID -- Get patient by ID
router.get('/:id', getPatientById);

// API POST -- Create a patient
router.post('/', createPatient);

// API PUT -- Update a patient data
router.put('/:id', updatePatient);

//API DELETE -- Delete a product
router.delete('/:id', deletePatient);



module.exports = router;