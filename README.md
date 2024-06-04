## MedData Api
Welcome to MedData Api. This api is designed to provide a means of managing patient data. The api is built using Node, Express and MongoDB

## Features
- Create Patient: Create a patient.
- Get All Patients: Get all the patients and their data.
- Update Patient Data: Update patient data by id.
- Delete Patient: Delete patient data by id.

## Getting Started

First, install packages:

```bash
npm install
# or
yarn install
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
## Using EndPoints

- POST (api/patients) - CREATE A PATIENT WITH THE FOLLOWING DATA {name, gender, age, dateOfBirth, phoneNumber, emergencyContact, insuranceType, occupation, diagnosis, bill}

- GET (api/patients) - GET ALL THE PATIENTS IN THE DATABASE

- GET (api/patients/:id) - GET THE PATIENT WITH THE ID

- PUT (api/patients/:id) - UPDATE DATA FOR THE PATIENT WITH THE ID

- DELETE (api/patients/:id) - DELETE THE PATIENT WITH THE ID
