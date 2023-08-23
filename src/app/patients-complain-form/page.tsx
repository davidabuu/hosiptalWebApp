import { Button } from "antd";
import React from "react";

const ComplaintForm: React.FC = () => {
  return (
    <div className="flex justify-center  items-center min-h-screen bg-blue-500">
      <div className="bg-white p-8 mx-4 lg:mx-0 rounded-lg shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-semibold mb-4">Complaint Form</h2>
        <p className="text-blue-500 font-bold mb-6">
          Hospital: Med Sync Solution
        </p>
        <form>
          <div className="mb-4">
            <label
              htmlFor="sickness"
              className="block text-sm font-medium text-gray-700"
            >
              Select Sickness Type
            </label>
            <select
              id="sickness"
              name="sickness"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-300"
            >
              <option value="fever">Fever</option>
              <option value="cough">Cough</option>
              <option value="pain">Pain</option>
              {/* Add more options here */}
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Describe the Problem
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-300"
            ></textarea>
          </div>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full bg-blue-500"
            
          >
            Submit Complaint
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ComplaintForm;
