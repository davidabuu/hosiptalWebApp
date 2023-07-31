"use client";
import React, { useState } from "react";
import { Form, Input, Button } from "antd";

const SignupPage: React.FC = () => {
  const [show, hide] = useState<Boolean>(true);
  const showSignPage = () => {
    hide(!show);
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
         {show ? 'Sign Up':'Sign In'}
        </h2>
        {show ? (
          <Form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
              <div>
                <Input
                  name="firstName"
                  placeholder="First Name"
                  className="input-field"
                  required
                />
              </div>
              <div>
                <Input
                  name="lastName"
                  placeholder="Last Name"
                  className="input-field"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
              <div>
                <Input
                  name="gender"
                  placeholder="Gender"
                  className="input-field"
                  required
                />
              </div>
              <div>
                <Input
                  type="number"
                  name="age"
                  placeholder="Age"
                  className="input-field"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
              <div>
                <Input
                  name="emailAddress"
                  placeholder="Email Address"
                  className="input-field"
                  required
                />
              </div>

              <div>
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input-field"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
              <div>
                <Input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="input-field"
                  required
                />
              </div>
              <div>
                <Input
                  name="phoneNumber"
                  placeholder="Phone Number"
                  className="input-field"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
              <div>
                <Input
                  name="patientsState"
                  placeholder="State"
                  className="input-field"
                  required
                />
              </div>
              <div>
                <Input
                  type="file"
                  name="image"
                  accept="image/*"
                  className="input-field"
                  required
                />
              </div>
            </div>
            <div>
              <Input
                name="patientsAddress"
                placeholder="Address"
                className="input-field"
                required
              />
            </div>
            <div className="text-center">
              <Button
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
              <li className='cursor-pointer'> Already have an account?</li>
            </div>
          </Form>
        ) : (
          <Form className="flex-col items-center  justify-center">
            <div className=" flex-col items-center justify-center grid-cols-1 gap-4 mb-3">
              <div>
                <Input
                  name="emailAddress"
                  placeholder="Email Address"
                  className="input-field"
                  required
                />
              </div>
<br></br>
              <div>
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input-field"
                  required
                />
              </div>
            </div>
            <div className="text-center">
              <Button
                type="primary"
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
              <li className='cursor-pointer'> Don&apos;t have an account?</li>
            </div>
          </Form>
        )}
      </div>
    </div>
  );
};

export default SignupPage;
