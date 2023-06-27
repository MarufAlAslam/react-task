import { Button, Checkbox, Input, Select } from "antd";
import React, { useEffect, useState } from "react";

import upload from "../../assets/images/svgs/upload.svg";

const Main = () => {
  const [error, setError] = useState("");
  const [identityType, setIdentityType] = useState("");
  const [idFrontName, setIdFrontName] = useState("");
  const [idBackName, setIdBackName] = useState("");
  const [selfieWithIdName, setSelfieWithIdName] = useState("");
  const [selfieForProfilePictureName, setSelfieForProfilePictureName] =
    useState("");

  useEffect(() => {
    setIdFrontName("Government ID Front");
    setIdBackName("Government ID Back");
    setSelfieWithIdName("Selfie with Government ID");
    setSelfieForProfilePictureName("Selfie for Profile Picture");
  }, []);

  const formSubmitHandle = (e) => {
    e.preventDefault();

    const form = e.target;

    const fullName = form.fullName.value;
    const email = form.email.value;
    const tyoeOfIdentity = identityType;
    const governmentIdNumber = form.governmentIdNumber.value;

    // get the file name
    const governmentIdFront = form.governmentIdFront.files[0].name;
    const governmentIdBack = form.governmentIdBack.files[0].name;
    const selfieWithGovernmentId = form.selfieWithGovernmentId.files[0].name;
    const selfieForProfilePicture = form.selfieForProfilePicture.files[0].name;

    const address = form.address.value;
    const governmentIdNumber2 = form.governmentIdNumber2.value;

    const kycData = {
      fullName,
      email,
      tyoeOfIdentity,
      governmentIdNumber,
      governmentIdFront,
      governmentIdBack,
      selfieWithGovernmentId,
      selfieForProfilePicture,
      address,
      governmentIdNumber2,
    };

    console.log(kycData);
    // setError("Please fill all the fields");
  };

  //   disable the submit button until all the fields are filled

  //   useEffect(() => {
  //     const form = document.querySelector("form");
  //     const submitBtn = document.querySelector(".submit-btn");

  //     form.addEventListener("change", () => {
  //       if (form.checkValidity()) {
  //         submitBtn.disabled = false;
  //       } else {
  //         submitBtn.disabled = true;
  //       }
  //     });

  //     // get the form data
  //   }, []);

  return (
    <div className="main p-10">
      <h2 className="text-[22px] mt-8">KYC Verification </h2>

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
                name="fullName"
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
                name="identityType"
                onChange={(value) => {
                  setIdentityType(value);
                  if (value) {
                    setError("");
                  } else {
                    setError("Identity type is required");
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
                  name="governmentIdFront"
                  id="file1"
                  className="inputfile hidden"
                  onChange={(e) => {
                    setIdFrontName(e.target.files[0].name);
                  }}
                />
                <label
                  htmlFor="file1"
                  className="text-sm mb-2 font-semibold bg-[#F2F2F2] flex w-full h-[130px] justify-center items-center"
                >
                  <img src={upload} alt="upload" className="" />
                </label>
                <p className="text-xs mt-2 text-[#757575]">{idFrontName}</p>
              </div>
              <div className="form-group mb-4">
                <input
                  type="file"
                  name="governmentIdBack"
                  id="file2"
                  className="inputfile hidden"
                  onChange={(e) => {
                    setIdBackName(e.target.files[0].name);
                  }}
                />
                <label
                  htmlFor="file2"
                  className="text-sm mb-2 font-semibold bg-[#F2F2F2] flex w-full h-[130px] justify-center items-center"
                >
                  <img src={upload} alt="upload" className="" />
                </label>
                <p className="text-xs mt-2 text-[#757575]">{idBackName}</p>
              </div>
            </div>

            <div className="form-group mb-4">
              <label htmlFor="" className="text-sm mb-2 font-semibold">
                Full address<span className="text-red-600">*</span>
              </label>
              <Input
                placeholder="Enter your full address "
                className="border-none bg-[#F2F2F2] text-[16px] h-[45px] mt-2 rounded"
                name="address"
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
                name="email"
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
                name="governmentIdNumber"
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
                  name="selfieWithGovernmentId"
                  id="file3"
                  className="inputfile hidden"
                  onChange={(e) => {
                    setSelfieWithIdName(e.target.files[0].name);
                  }}
                />
                <label
                  htmlFor="file3"
                  className="text-sm mb-2 font-semibold bg-[#F2F2F2] flex w-full h-[130px] justify-center items-center"
                >
                  <img src={upload} alt="upload" className="" />
                </label>
                <p className="text-xs mt-2 text-[#757575]">
                  {selfieWithIdName}
                </p>
              </div>
              <div className="form-group mb-4">
                <input
                  type="file"
                  name="selfieForProfilePicture"
                  id="file4"
                  className="inputfile hidden"
                  onChange={(e) => {
                    setSelfieForProfilePictureName(e.target.files[0].name);
                  }}
                />
                <label
                  htmlFor="file4"
                  className="text-sm mb-2 font-semibold bg-[#F2F2F2] flex w-full h-[130px] justify-center items-center"
                >
                  <img src={upload} alt="upload" className="" />
                </label>
                <p className="text-xs mt-2 text-[#757575]">
                  {selfieForProfilePictureName}
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
                name="governmentIdNumber2"
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
