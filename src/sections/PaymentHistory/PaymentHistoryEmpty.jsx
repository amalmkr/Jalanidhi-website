import { FaFileInvoice } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function PaymentHistoryEmpty() {

    const navigate = useNavigate();

    return (
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm px-6 py-14 text-center">

            {/* Icon */}
            <div className="flex justify-center mb-5">

                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">
                    <FaFileInvoice className="text-2xl text-blue-600" />
                </div>

            </div>


            {/* Heading */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                പേയ്മെന്റ് വിവരങ്ങളില്ല
            </h3>


            {/* Description */}
            <p className="text-gray-500 mt-3 max-w-md mx-auto leading-relaxed">
                ഇതുവരെ ബിൽ പേയ്മെന്റ് നടത്തിയിട്ടില്ല.
            </p>


            {/* Button */}
            <button
                onClick={() => navigate("/quick-pay")}
                className="mt-7 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
            >
                ബിൽ അടയ്ക്കുക
            </button>

        </div>
    );
}

export default PaymentHistoryEmpty;