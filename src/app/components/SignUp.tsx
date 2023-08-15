"use client";
import React, { useState } from "react";
import { Form, Input, Button, notification } from "antd";
import Aos from "aos";
import axios from "axios";
import { useRouter } from "next/router";
import { PatientsEndpoints } from "../api/PatientsEndpoints";
import { Controller, useForm } from "react-hook-form";

const SignupPage: React.FC = () => {
  const [show, hide] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const showSignPage = () => {
    hide(!show);
  };
  interface FormValues {
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
  const { handleSubmit, control } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    console.log(data);
    if (data.password !== data.confirmPassword) {
      notification.error({
        message: "Error",
        description: `Password Do Not Match`,
        duration: 2,
      });
    } else {
      try {
        setLoading(true);
        const res = await axios.post(
          `${process.env.API_URL}${PatientsEndpoints.register}`,
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (res.data) {
          notification.success({
            message: "Success",
            description: "Registration Success, proceed to login",
            duration: 5,
          });
          hide(!show);
          setLoading(false);
        }
      } catch (error) {
        notification.error({
          message: "Error",
          description: `Patient Already Exists with this email address ${data.emailAddress}`,
          duration: 2,
        });
        setLoading(false);
      }
    }
  };
  const Login = async (data: FormValues) => {
    let loginData = {
      emailAddress: data.emailAddress,
      password: data.password,
    };
    console.log(loginData)
    try {
      setLoading(true);
      const res = await axios.post(
        `${process.env.API_URL}${PatientsEndpoints.login}`,
        loginData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.data) {
        notification.success({
          message: "Success",
          description: "Login Success",
          duration: 5,
        });

        setLoading(false);
      }
    } catch (error) {
      notification.error({
        message: "Error",
        description: `Password or Email Address is incorrect`,
        duration: 2,
      });
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="hidden sm:flex min-h-screen flex-col justify-center items-center md:w-1/2 bg-blue-500 text-white  md:py-0">
        <h1
          data-aos="fade-right"
          className="text-3xl md:text-4xl  font-bold mb-4"
        >
          Let&apos;s Get Started
        </h1>
        <p
          data-aos="fade-right"
          className="text-lg md:text-xl"
        >
          Welcome to our platform. Sign up to get started on your journey!
        </p>
      </div>
      <div className="md:w-1/2 p-8 md:p-16 bg-white flex-col items-center justify-center   rounded-lg">
        <h2 className="text-3xl font-bold text-center  text-blue-500 mb-8">
          {show ? "Sign Up" : "Sign In"}
        </h2>
        {show ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
              <div>
                <Controller
                  name="firstName"
                  control={control}
                  rules={{ required: "This field is required" }}
                  render={({ field }: any) => (
                    <>
                      <Input
                        {...field}
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        className="input-field"
                        required
                      />
                    </>
                  )}
                />
              </div>
              <div>
                <Controller
                  name="firstName"
                  control={control}
                  rules={{ required: "This field is required" }}
                  render={({ field }: any) => (
                    <>
                      <Input
                        {...field}
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        className="input-field"
                        required
                      />
                    </>
                  )}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
              <div>
                <Controller
                  name="gender"
                  control={control}
                  rules={{ required: "This field is required" }}
                  render={({ field }: any) => (
                    <>
                      <Input
                        {...field}
                        type="text"
                        name="gender"
                        placeholder="Gender"
                        className="input-field"
                        required
                      />
                    </>
                  )}
                />
              </div>
              <div>
                <Controller
                  name="age"
                  control={control}
                  rules={{ required: "This field is required" }}
                  render={({ field }: any) => (
                    <>
                      <Input
                        {...field}
                        type="number"
                        name="age"
                        placeholder="Age"
                        className="input-field"
                        required
                      />
                    </>
                  )}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
              <div>
                <Controller
                  name="emailAddress"
                  control={control}
                  rules={{ required: "This field is required" }}
                  render={({ field }: any) => (
                    <>
                      <Input
                        {...field}
                        name="emailAddress"
                        placeholder="Email Address"
                        className="input-field"
                        required
                      />
                    </>
                  )}
                />
              </div>

              <div>
                <Controller
                  name="password"
                  control={control}
                  rules={{ required: "This field is required" }}
                  render={({ field }: any) => (
                    <>
                      <Input
                        {...field}
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="input-field"
                        required
                      />
                    </>
                  )}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
              <div>
                <Controller
                  name="confirmPassword"
                  control={control}
                  rules={{ required: "This field is required" }}
                  render={({ field }: any) => (
                    <>
                      <Input
                        {...field}
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        className="input-field"
                        required
                      />
                    </>
                  )}
                />
              </div>
              <div>
                <Controller
                  name="phoneNumber"
                  control={control}
                  rules={{ required: "This field is required" }}
                  render={({ field }: any) => (
                    <>
                      <Input
                        {...field}
                        type="text"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        className="input-field"
                        required
                      />
                    </>
                  )}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
              <div>
                <Controller
                  name="patientsState"
                  control={control}
                  rules={{ required: "This field is required" }}
                  render={({ field }: any) => (
                    <>
                      <Input
                        {...field}
                        type="text"
                        name="patientsState"
                        placeholder="State"
                        className="input-field"
                        required
                      />
                    </>
                  )}
                />
              </div>
            </div>
            <div>
              <Controller
                name="patientsAddress"
                control={control}
                rules={{ required: "This field is required" }}
                render={({ field }: any) => (
                  <>
                    <Input
                      {...field}
                      type="text"
                      name="patientsAddress"
                      placeholder="Address"
                      className="input-field"
                      required
                    />
                  </>
                )}
              />
            </div>
            <div className="text-center">
              <Button
                loading={loading}
                type="primary"
                htmlType="submit"
                className="w-full mt-8 bg-blue-500"
              >
                Sign Up
              </Button>
            </div>
            <div
              onClick={showSignPage}
              className="text-center text-blue-500"
            >
              <li className="cursor-pointer"> Already have an account?</li>
            </div>
          </form>
        ) : (
          <form
            onSubmit={handleSubmit(Login)}
            className="flex-col items-center  justify-center"
          >
            <div className=" flex-col items-center justify-center grid-cols-1 gap-4 mb-3">
              <div>
                <Controller
                  name="emailAddress"
                  control={control}
                  rules={{ required: "This field is required" }}
                  render={({ field }: any) => (
                    <>
                      <Input
                        {...field}
                        type="text"
                        name="emailAddress"
                        placeholder="Email Address"
                        className="input-field"
                        required
                      />
                    </>
                  )}
                />
              </div>
              <br></br>
              <div>
                <Controller
                  name="password"
                  control={control}
                  rules={{ required: "This field is required" }}
                  render={({ field }: any) => (
                    <>
                      <Input
                        {...field}
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="input-field"
                        required
                      />
                    </>
                  )}
                />
              </div>
            </div>
            <div className="text-center">
              <Button
                type="primary"
              loading={loading}
                htmlType="submit"
                className="w-full  bg-blue-500"
              >
                Login
              </Button>
            </div>
            <div
              onClick={showSignPage}
              className="text-center text-blue-500"
            >
              <li className="cursor-pointer"> Don&apos;t have an account?</li>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignupPage;
