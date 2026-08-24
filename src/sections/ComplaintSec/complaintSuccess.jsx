import { IoMdCheckmark } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";

function ComplaintSuccess() {

    const navigate = useNavigate();
    const location = useLocation();

    const formData = location.state?.formData;

    return (
        <section className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 py-10">

            <div className="w-full max-w-lg rounded-2xl shadow-2xl p-5 sm:p-7 md:p-10 text-center">

                {/* Success Icon */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-4xl sm:text-5xl text-green-600">
                        <IoMdCheckmark />
                    </span>
                </div>

                {/* Heading */}
                <h1 className="text-2xl sm:text-3xl font-bold text-green-600 mt-5 sm:mt-6">
                    Complaint Submitted Successfully
                </h1>

                {/* Message */}
                <p className="text-gray-500 text-sm sm:text-base mt-3 leading-relaxed">
                    Your complaint has been submitted successfully. We will look into it.
                </p>

                <hr className="my-6 sm:my-8 border-gray-200" />

                {/* Complaint Details */}
                <div className="space-y-4 text-left">

                    {/* Complaint ID */}
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                        <span className="text-gray-500 text-sm sm:text-base">
                            Complaint ID
                        </span>

                        <span className="font-bold text-sm sm:text-base sm:text-right">
                            CMP1001
                        </span>
                    </div>

                    {/* Mobile Number */}
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                        <span className="text-gray-500 text-sm sm:text-base">
                            Mobile Number
                        </span>

                        <span className="font-bold text-sm sm:text-base sm:text-right">
                            {formData?.mobileNumber || "N/A"}
                        </span>
                    </div>

                    {/* Consumer Number */}
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                        <span className="text-gray-500 text-sm sm:text-base">
                            Consumer Number
                        </span>

                        <span className="font-bold text-sm sm:text-base sm:text-right">
                            {formData?.consumerNumber || "Not provided"}
                        </span>
                    </div>

                    {/* Complaint Type */}
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                        <span className="text-gray-500 text-sm sm:text-base">
                            പരാതി തരം
                        </span>

                        <span className="font-bold text-sm sm:text-base sm:text-right">
                            {formData?.complaintType || "N/A"}
                        </span>
                    </div>

                    {/* Area */}
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                        <span className="text-gray-500 text-sm sm:text-base">
                            പ്രദേശം
                        </span>

                        <span className="font-bold text-sm sm:text-base sm:text-right">
                            {formData?.area || "N/A"}
                        </span>
                    </div>

                    {/* Location */}
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                        <span className="text-gray-500 text-sm sm:text-base">
                            സ്ഥലം / ലൊക്കേഷൻ
                        </span>

                        <span className="font-bold text-sm sm:text-base sm:text-right break-all">
                            {formData?.location || "N/A"}
                        </span>
                    </div>

                </div>

                {/* Home Button */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 mt-6 sm:mt-8">

                    <button
                        type="button"
                        className="
                            w-full
                            bg-blue-600
                            hover:bg-blue-700
                            transition duration-300
                            text-white
                            font-bold
                            py-3
                            px-3
                            rounded-lg
                            text-sm sm:text-base
                        "
                        onClick={() => navigate("/")}
                    >
                        Home
                    </button>

                </div>

            </div>

        </section>
    );
}

export default ComplaintSuccess;