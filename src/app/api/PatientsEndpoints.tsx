//Base URL
const baseUrl = "/PatientsAuth/";

import axios from "axios";

// export const PatientsEndpoints = {
//   register: `${baseUrl}RegisterPatients`,
//   login: `${baseUrl}PatientsLogin`,
//   complain: `${baseUrl}PatientsComplain`,
//   getSinglePatient: `${baseUrl}atientsAuth/GetSinglePatientsInfo/`,
//   getPatientsPrescription: `${baseUrl}PatientsAuth/GetSinglePatientsPrescription/`,
//   getPatientsComplain: `${baseUrl}PatientsAuth/GetSinglePatientsComplain/`,
// };
interface PatientsRegistrationData {
  emailAddress: string;
  firstName: string;
  lastName: string;
  password: string;
  gender: string;
  age: number;
  patientsAddress: string;
  patientsState: string;
  confirmPassword: string;
  phoneNumber: string;
}
export const PatientsRegistration = (data: PatientsRegistrationData) => {
  const registerPatients = axios.post(
    `${process.env}${baseUrl}RegisterPatients`,
    data
  );
  return registerPatients;
};
