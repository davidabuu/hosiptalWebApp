import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = "/PatientsAuth/";
type User = {
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
};

export const patientsApiSlice = createApi({
  reducerPath: "hospitalApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API_URL,
  }),
  tagTypes: ["Patients"],
  endpoints: (builder) => ({
    addNewPatient: builder.mutation({
      query: (patient: User) => ({
        url: `${baseUrl}RegisterPatients`,
        method: "POST",
        body: patient,
      }),
      invalidatesTags: ["Patients"],
    }),
  }),
});

export const { useAddNewPatientMutation } = patientsApiSlice;
