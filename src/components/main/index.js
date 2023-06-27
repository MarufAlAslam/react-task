import { Button, Checkbox, Input, Select } from "antd";
import React, { useEffect, useState } from "react";

import upload from "../../assets/images/svgs/upload.svg";

const Main = () => {
  const [error, setError] = useState("");

  const formSubmitHandle = (e) => {
    e.preventDefault();
    setError("Please fill all the fields");
  };

  //   disable the submit button until all the fields are filled

  useEffect(() => {
    const form = document.querySelector("form");
    const submitBtn = document.querySelector(".submit-btn");

    form.addEventListener("change", () => {
      if (form.checkValidity()) {
        submitBtn.disabled = false;
      } else {
        submitBtn.disabled = true;
      }
    });
  }, []);

  return (
    <div className="main p-10">
      <h2 className="text-[22px]">KYC Verification </h2>

      <p>
        {error && (
          <span className="text-red-600 text-sm font-semibold">{error}</span>
        )}
      </p>

      <form onSubmit={formSubmitHandle}>
        <div className="form grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10 gap-6">
          <div className="first">
            <div className="form-group mb-4">
              <label htmlFor="" className="text-sm mb-2 font-semibold">
                Full name<span className="text-red-600">*</span>
              </label>
              <Input
                placeholder="Please enter your full name"
                className="border-none bg-[#F2F2F2] text-[16px] h-[45px] mt-2 rounded"
                onChange={(e) => {
                  if (e.target.value) {
                    setError("");
                  } else {
                    setError("Full name is required");
                  }
                }}
              />
            </div>
            <div className="form-group mb-8">
              <label htmlFor="" className="text-sm mb-2 font-semibold">
                Select identity type<span className="text-red-600">*</span>
              </label>
              <Select
                className="w-full border-none bg-[#F2F2F2] text-[16px] h-[45px] mt-2 rounded"
                placeholder="Select your identity type"
                onChange={(e) => {
                  if (e.target.value) {
                    setError("");
                  } else {
                    setError("Identity Type is required");
                  }
                }}
              >
                <Select.Option value="Driver's License">
                  Driver's License
                </Select.Option>
                <Select.Option value="National ID">National ID</Select.Option>
                <Select.Option value="Passport">Passport</Select.Option>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="form-group mb-4">
                <input
                  type="file"
                  name="file"
                  id="file1"
                  className="inputfile hidden"
                />
                <label
                  htmlFor="file1"
                  className="text-sm mb-2 font-semibold bg-[#F2F2F2] flex w-full h-[130px] justify-center items-center"
                >
                  <img src={upload} alt="upload" className="" />
                </label>
                <p className="text-xs mt-2 text-[#757575]">
                  Government ID Front
                </p>
              </div>
              <div className="form-group mb-4">
                <input
                  type="file"
                  name="file"
                  id="file2"
                  className="inputfile hidden"
                />
                <label
                  htmlFor="file2"
                  className="text-sm mb-2 font-semibold bg-[#F2F2F2] flex w-full h-[130px] justify-center items-center"
                >
                  <img src={upload} alt="upload" className="" />
                </label>
                <p className="text-xs mt-2 text-[#757575]">
                  Government ID Back
                </p>
              </div>
            </div>

            <div className="form-group mb-4">
              <label htmlFor="" className="text-sm mb-2 font-semibold">
                Full address<span className="text-red-600">*</span>
              </label>
              <Input
                placeholder="Enter your full address "
                className="border-none bg-[#F2F2F2] text-[16px] h-[45px] mt-2 rounded"
                onChange={(e) => {
                  if (e.target.value) {
                    setError("");
                  } else {
                    setError("Address is required");
                  }
                }}
              />
            </div>
          </div>
          <div className="second">
            <div className="form-group mb-4">
              <label htmlFor="" className="text-sm mb-2 font-semibold">
                Your email<span className="text-red-600">*</span>
              </label>
              <Input
                placeholder="Please enter your email"
                className="border-none bg-[#F2F2F2] text-[16px] h-[45px] mt-2 rounded"
                onChange={(e) => {
                  if (e.target.value) {
                    setError("");
                  } else {
                    setError("Email is required");
                  }
                }}
              />
            </div>
            <div className="form-group mb-8">
              <label htmlFor="" className="text-sm mb-2 font-semibold">
                Government ID number<span className="text-red-600">*</span>
              </label>
              <Input
                placeholder="Enter your government id number"
                className="border-none bg-[#F2F2F2] text-[16px] h-[45px] mt-2 rounded"
                onChange={(e) => {
                  if (e.target.value) {
                    setError("");
                  } else {
                    setError("Government ID Number is required");
                  }
                }}
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="form-group mb-4">
                <input
                  type="file"
                  name="file"
                  id="file1"
                  className="inputfile hidden"
                />
                <label
                  htmlFor="file1"
                  className="text-sm mb-2 font-semibold bg-[#F2F2F2] flex w-full h-[130px] justify-center items-center"
                >
                  <img src={upload} alt="upload" className="" />
                </label>
                <p className="text-xs mt-2 text-[#757575]">
                  Selfie with Government ID
                </p>
              </div>
              <div className="form-group mb-4">
                <input
                  type="file"
                  name="file"
                  id="file2"
                  className="inputfile hidden"
                />
                <label
                  htmlFor="file2"
                  className="text-sm mb-2 font-semibold bg-[#F2F2F2] flex w-full h-[130px] justify-center items-center"
                >
                  <img src={upload} alt="upload" className="" />
                </label>
                <p className="text-xs mt-2 text-[#757575]">
                  Selfie for profile picture
                </p>
              </div>
            </div>
            <div className="form-group mb-4">
              <label htmlFor="" className="text-sm mb-2 font-semibold">
                Government ID number<span className="text-red-600">*</span>
              </label>
              <Input
                placeholder="Enter your government id number"
                className="border-none bg-[#F2F2F2] text-[16px] h-[45px] mt-2 rounded"
                onChange={(e) => {
                  if (e.target.value) {
                    setError("");
                  } else {
                    setError("Government ID Number is required");
                  }
                }}
              />
            </div>
          </div>
          <div>
            <div className="alert bg-[#F2F2F2] rounded px-[30px] py-[40px]">
              <p className="text-sm text-[#757575]">
                <b className="text-black block mb-[6px]">Please Note:</b> File
                accepted: JPEG/JPS/PNG (Max size: 250 KB) Document should be
                good condition Document must be valid period Face must be clear
                visible
              </p>
            </div>
          </div>
        </div>

        <div className="form grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-2 gap-6">
          <div className="first">
            <div className="flex justify-start items-center">
              <Checkbox className="text-[#757575] text-sm" />
              <p className="text-sm text-[#757575] ml-2">
                I accept the{" "}
                <span className="text-[#2d7ff9] cursor-pointer">
                  Terms and Conditions
                </span>{" "}
                and{" "}
                <span className="text-[#2d7ff9] cursor-pointer">
                  Terms and Conditions
                </span>
              </p>
            </div>

            <div className="flex justify-start items-center mt-5">
              <Button
                htmlType="submit"
                className="bg-[#2E2F30] text-white text-sm font-semibold h-[45px] rounded mt-4 w-full uppercase mulish"
              >
                SUBMIT KYC
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Main;
