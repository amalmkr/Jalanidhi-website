import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NumberVerification() {
    const [mobileNumber, setMobileNumber] = useState("");
    const [showOtp, setShowOtp] = useState(false);
    const [otp, setOtp] = useState("");
    const [error, setError] = useState(false);
    const [otpError, setOtpError] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();

        if (mobileNumber === "" || mobileNumber.length !== 10) {
            setError(true);
            return;
        }

        setError(false);
        console.log("Mobile Number:", mobileNumber);

        setShowOtp(true);
    };

    const handleVerifyOtp = () => {
    if (otp === "" || otp.length !== 6) {
        setOtpError(true);
        return;
    }

    setOtpError(false);

    alert('OTP validation Successfull')

    // OTP is valid -- go to connection form
    navigate("/connection-form",{
        state:{
            mobileNumber:mobileNumber
        }
    });

};

    const navigate=useNavigate();

    return (
        <section className="pb-10">
        <div className="rounded-2xl bg-white shadow-2xl mx-auto max-w-[450px] md:max-w-[700px] mt-20 p-8">

            <h2 className="text-center text-2xl md:text-3xl font-bold text-blue-800">
                Verify Your Mobile Number
            </h2>

            {!showOtp ? (

                <form onSubmit={handleSubmit}>

                    <div className="flex flex-col gap-2 mt-10 justify-center px-10">

                        <label className="text-gray-600 font-bold">
                            Enter your mobile number:
                        </label>

                        <input
                            type="tel"
                            value={mobileNumber}
                            onChange={(e) => {
                                setMobileNumber(e.target.value);
                                setError(false);
                            }}
                            placeholder="Enter 10 digit mobile number"
                            maxLength={10}
                            className="w-full px-3 py-2 border border-gray-300
                            focus:outline-none focus:ring-2
                            focus:ring-blue-500 rounded"
                        />

                        {error && (
                            <p className="text-red-500 text-sm">
                                Please enter a valid 10 digit mobile number.
                            </p>
                        )}

                    </div>

                    <div className="flex justify-center mt-10">

                        <button
                            type="submit"
                            className="text-white bg-blue-500 rounded-xl
                            font-bold px-5 py-2 hover:bg-blue-600"
                        >
                            Send OTP
                        </button>

                    </div>

                </form>

            ) : (

                <div className="mt-10 px-10">

                    <p className="text-gray-600 text-center mb-6">
                        OTP sent to <span className="text-blue-800 font-bold">{mobileNumber}</span> 
                    </p>

                    <label className="text-gray-600 font-bold">
                        Enter OTP:
                    </label>

                    <input
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        placeholder="Enter 6 digit OTP"
                        maxLength={6}
                        className="w-full px-3 py-2 mt-2
                        border border-gray-300
                        focus:outline-none focus:ring-2
                        focus:ring-blue-500 rounded"
                    />
                    {otpError && (
                        <p className="text-sm mt-2 text-red-600">
                            Enter Valid OTP
                        </p>
                    )}

                    <div className="flex justify-center mt-8">

                        <button
                            type="button"
                            className="text-white bg-blue-500
                            rounded-xl font-bold px-5 py-2
                            hover:bg-blue-600"
                            onClick={handleVerifyOtp}

                        >
                            Verify OTP
                        </button>

                    </div>

                </div>

            )}
        </div>
        </section>
    );
}

export default NumberVerification;