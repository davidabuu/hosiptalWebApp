//Base URL
const baseUrl = "/PatientsAuth/";

export const PatientsEndpoints = {
  register: `${baseUrl}RegisterPatients`,
  login: `${baseUrl}PatientsLogin`,
  complain: `${baseUrl}PatientsComplain`,
  getSinglePatient: `${baseUrl}atientsAuth/GetSinglePatientsInfo/`,
  getPatientsPrescription: `${baseUrl}PatientsAuth/GetSinglePatientsPrescription/`,
  getPatientsComplain: `${baseUrl}PatientsAuth/GetSinglePatientsComplain/`,
};
