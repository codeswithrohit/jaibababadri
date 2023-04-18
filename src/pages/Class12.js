import React, { useState } from 'react';
import { auth, firestore, generateOTP, sendOTP, verifyOTP } from "../Firebase/config";
import { FaSpinner } from "react-icons/fa";
import Head from 'next/head'

const Class12 = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOTP] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSendOTP = async () => {
    try {
      setIsLoading(true);
      const generatedOTP = generateOTP();
      await sendOTP(phoneNumber, generatedOTP);
      setVerificationId(verificationId);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  const handleVerifyOTP = async () => {
    try {
      setIsLoading(true);
      await verifyOTP(phoneNumber, otp);
      const userRef = firestore.collection("users").doc(auth.currentUser.uid);
      await userRef.set({
        phoneNumber,
      });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  return (
    <div className="grid h-screen px-4 bg-white place-content-center">
<Head>
        <title>Class 12-PadhoG</title>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />
        <link rel="icon" href="/icon.png" />
      </Head><div>
      <h1 className="text-xl font-bold mb-4">Phone Verification</h1>
      <div className="mb-4">
        <label className="block font-bold mb-2" htmlFor="phoneNumber">
      Phone Number:
  </label>
  <input
    className="border border-gray-400 p-2 w-full"
    type="text"
    id="phoneNumber"
    value={phoneNumber}
    onChange={(e) => setPhoneNumber(e.target.value)}
  />
</div>
{verificationId ? (
  <div className="mb-4">
    <label className="block font-bold mb-2" htmlFor="otp">
      OTP:
    </label>
    <input
      className="border border-gray-400 p-2 w-full"
      type="text"
      id="otp"
      value={otp}
      onChange={(e) => setOTP(e.target.value)}
    />
  </div>
) : null}
{isLoading ? (
  <div className="flex items-center justify-center">
    <FaSpinner className="animate-spin mr-2" />
    <span>Loading...</span>
  </div>
) : (
  <div>
    {!verificationId ? (
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        onClick={handleSendOTP}
      >
        Send OTP
      </button>
    ) : (
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        onClick={handleVerifyOTP}
      >
        Verify OTP
      </button>
    )}
  </div>
)}
{error && (
  <div className="text-red-500 font-bold mt-4">{error.message}</div>
)}
  </div>
);

</div>
  )
}

export default Class12