import checkConnectionHero from "../assets/images/checkConnection.jpeg";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { useState } from "react";

function CheckConnection() {
    const [applicationNumber, setApplicationNumber] = useState("");
    const [application, setApplication] = useState(null);
    const [error, setError] = useState("");


    const applications = [
        {
            applicationNumber: "JN-2026-00123",
            applicantName: "Amal M",
            mobileNumber: "8281418574",
            area: "Puthanazhi",
            applicationDate: "04/08/2026",
            status: "Under Process",
        },
        {
            applicationNumber: "JN-2026-00124",
            applicantName: "simbu",
            mobileNumber: "9876543210",
            area: "Iringattiri",
            applicationDate: "06/08/2026",
            status: "Approved",
        },
    ];

    const handleSearch = () => {
        const searchNumber = applicationNumber.trim();

    
        if (!searchNumber) {
            setApplication(null);
            setError("Please enter your application number.");
            return;
        }

        // Search application
        const foundApplication = applications.find(
            (item) =>
                item.applicationNumber.toLowerCase() ===
                searchNumber.toLowerCase()
        );

        if (foundApplication) {
            setApplication(foundApplication);
            setError("");
        } else {
            setApplication(null);
            setError("Application number not found. Please check and try again.");
        }
    };

    const handleSearchAgain = () => {
        setApplication(null);
        setError("");
        setApplicationNumber("");
    };

    return (
        <>
            {/* Hero */}
            <div className="relative">
                <img
                    src={checkConnectionHero}
                    alt="Check connection status"
                    className="w-full object-cover h-[250px] md:h-[400px]"
                />

                <div className="inset-0 absolute bg-black/65"></div>

                <div className="flex inset-0 absolute justify-center items-center px-4">
                    <h2 className="text-3xl md:text-6xl text-white font-bold text-center">
                        Check Your Connection Status
                    </h2>
                </div>
            </div>

            <section className="px-4">

                {/* Search Card */}
                <div className="shadow-2xl max-w-[600px] p-5 mx-auto rounded-2xl my-10">

                    <div className="flex gap-3 md:gap-5 items-center justify-center">
                        <HiOutlineDocumentSearch className="text-blue-800 text-3xl md:text-4xl" />

                        <h2 className="text-xl md:text-3xl text-blue-800 font-medium">
                            Search Application
                        </h2>
                    </div>

                    <hr className="border-blue-500/45 mt-3" />

                    <div className="mt-6">

                        <label
                            htmlFor="applicationNumber"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Application Number
                        </label>

                        <div className="flex flex-col sm:flex-row gap-3">

                            <input
                                id="applicationNumber"
                                type="text"
                                value={applicationNumber}
                                onChange={(e) => {
                                    setApplicationNumber(e.target.value);
                                    setError("");
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        handleSearch();
                                    }
                                }}
                                placeholder="Enter Application Number"
                                className="flex-1 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600"
                            />

                            <button
                                type="button"
                                className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
                                onClick={handleSearch}
                            >
                                Search
                            </button>

                        </div>

                        <p className="text-sm text-gray-500 mt-2">
                            Example: JN-2026-00123
                        </p>

                        {/* Error */}
                        {error && (
                            <div className="mt-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">
                                {error}
                            </div>
                        )}
                    </div>
                </div>


                {application && (
                    <div className="shadow-2xl p-5 max-w-[600px] bg-white rounded-2xl my-10 mx-auto">

                        <h2 className="text-2xl text-blue-800 font-bold text-center">
                            Connection Status
                        </h2>

                        <hr className="border-blue-500 mt-4" />

                        <div className="space-y-5 mt-5">

                            <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                                <p className="text-gray-600">
                                    Application Number
                                </p>

                                <p className="font-bold">
                                    {application.applicationNumber}
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                                <p className="text-gray-600">
                                    Applicant Name
                                </p>

                                <p className="font-bold">
                                    {application.applicantName}
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                                <p className="text-gray-600">
                                    Mobile Number
                                </p>

                                <p className="font-bold">
                                    {application.mobileNumber}
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                                <p className="text-gray-600">
                                    Area
                                </p>

                                <p className="font-bold">
                                    {application.area}
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                                <p className="text-gray-600">
                                    Application Date
                                </p>

                                <p className="font-bold">
                                    {application.applicationDate}
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:justify-between gap-1 items-start sm:items-center">
                                <p className="text-gray-600">
                                    Current Status
                                </p>

                                <span
                                    className={`font-semibold text-sm px-3 py-1 rounded-full ${
                                        application.status === "Approved"
                                            ? "bg-green-100 text-green-700"
                                            : application.status === "Rejected"
                                            ? "bg-red-100 text-red-700"
                                            : "bg-yellow-100 text-yellow-700"
                                    }`}
                                >
                                    {application.status}
                                </span>
                            </div>

                        </div>

                        <button
                            type="button"
                            onClick={handleSearchAgain}
                            className="w-full mt-8 bg-blue-100 hover:bg-gray-200 text-blue-700 py-3 rounded-lg transition"
                        >
                            Search Another Application
                        </button>

                    </div>
                )}

            </section>
        </>
    );
}

export default CheckConnection;