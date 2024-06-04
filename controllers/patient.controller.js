const Patient = require('../models/patient.model');

const getPatients = async (req,res) => {
    try {
        const products = await Patient.find({});
        res.status(200).json(products);
      } catch (error) {
        res.status(500).json({message: error.message});
      }
};

const getPatientById = async (req,res) => {
    try {
        const { id } = req.params;
        const patient = await Patient.findById(id);
        res.status(200).json(patient);
      } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const createPatient = async (req,res) => {
    try {
        const patient = await Patient.create(req.body);
        res.status(200).json(patient);
      } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const updatePatient = async (req,res) => {
    try {
        const {id} = req.params;
    
        const patient = await Patient.findByIdAndUpdate(id, req.body);
    
        if (!patient) {
          return res.status(500).json({message: error.message});
        }
    
        const updatedPatient = await Patient.findById(id);
        res.status(200).json(updatedPatient);
    
      } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const deletePatient = async (req, res) => {
    try {
        const { id } = req.params;
        const patient = await Patient.findByIdAndDelete(id);
        if (!patient) {
          return res.status(404).json({message: "Patient not Found"});
        }
    
        res.status(200).json({message: "Patient deleted succesfuly"});
      } catch (error) {
        res.status(500).json({message: error.message});
    }
};

module.exports = {
    getPatients,
    getPatientById,
    createPatient,
    updatePatient,
    deletePatient
};