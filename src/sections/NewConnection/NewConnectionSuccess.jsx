import { IoMdCheckmark } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function NewConnectionSuccess() {

    const navigate = useNavigate();
    const location = useLocation()

    const application = location.state?.application;
    const mobileNumber = location.state?.mobileNumber;

    if (!application) {
    return (
        <div className="min-h-[60vh] flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-center font-bold text-5xl text-red-500">404 error</h1>
                <h2 className="text-2xl mt-4 font-bold text-red-600">
                    Application details not found
                </h2>

                <p className="text-gray-600 mt-2">
                    Please submit the new connection form again.
                </p>
            </div>
        </div>
    );
}


    return (
        <section className="min-h-[70vh] flex items-center justify-center px-5 py-10">

            <div className="w-full max-w-lg rounded-2xl shadow-2xl p-8 md:p-10 text-center">

                {/* Success Icon */}
                <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-5xl text-green-600">
                        <IoMdCheckmark />
                    </span>
                </div>

                {/* Heading */}
                <h1 className="text-2xl md:text-3xl font-bold text-green-600 mt-6">
                    Application Submitted Successfully!
                </h1>

                <p className="text-gray-500 mt-3">
                    Your new water connection application has been submitted successfully.
                </p>

                <hr className="my-8 border-gray-200" />

                {/* Application Details */}
                <div className="space-y-4 text-left">

                    <div className="flex justify-between">
                        <span className="text-gray-500">
                            Application Number
                        </span>

                        <span className="font-bold">
                            {application?.applicationNo || "NULL"}
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-500">
                            Name
                        </span>

                        <span className="font-bold">
                            {application.name}
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-500">
                            Area
                        </span>

                        <span className="font-bold">
                            {application?.area || "Not Provided"}
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-gray-500">
                            Mobile Number
                        </span>

                        <span className="font-bold">
                            {mobileNumber}
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-gray-500">
                            Status
                        </span>

                        <span className="font-bold text-green-600">
                            {application?.status || "Under Process"}
                        </span>
                    </div>

                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-5">

                    <button
                        type="button"
                        className="w-full mt-8 bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-bold py-3 rounded-lg"
                        onClick={() => navigate("/check-connection")}
                    >
                        Check Status
                    </button>

                    <button
                        type="button"
                        className="w-full mt-8 bg-gray-600 hover:bg-gray-700 transition duration-300 text-white font-bold py-3 rounded-lg"
                        onClick={() => navigate("/")}
                    >
                        Home
                    </button>

                </div>

            </div>

        </section>
    );
}

export default NewConnectionSuccess;