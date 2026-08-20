import { FaMoneyBillWave, FaReceipt } from "react-icons/fa6";
import { CiCircleInfo } from "react-icons/ci";
import { IoSpeedometerOutline } from "react-icons/io5";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Bill_details() {
    const navigate = useNavigate();

    return (
        <section className="mt-10 md:mt-20 px-4 sm:px-6 lg:px-10 pb-10">
            <div className="w-full max-w-4xl mx-auto rounded-xl shadow-2xl p-5 sm:p-7 md:p-10">

                {/* Header */}
                <div className="flex items-center justify-center gap-3 sm:gap-5">
                    <FaReceipt className="text-blue-800 text-2xl sm:text-3xl" />

                    <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-800 font-bold">
                        ബില്ല് വിശദാംശം
                    </h2>
                </div>

                <hr className="my-6 md:my-8 border-gray-200" />


                {/* Consumer Information */}
                <div className="flex justify-center items-center gap-2 mt-6 md:mt-10">
                    <CiCircleInfo className="text-2xl sm:text-3xl text-blue-500" />

                    <h4 className="text-lg sm:text-xl md:text-2xl font-medium text-blue-800">
                        Consumer Information
                    </h4>
                </div>


                {/* Consumer Details */}
                <div className="mt-4">

                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4 py-2">
                        <span className="text-gray-500 font-semibold text-sm sm:text-base md:text-xl">
                            Consumer Name
                        </span>

                        <span className="text-gray-900 font-bold text-sm sm:text-base md:text-xl sm:text-right">
                            Amal M
                        </span>
                    </div>


                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4 py-2">
                        <span className="text-gray-500 font-semibold text-sm sm:text-base md:text-xl">
                            Consumer Number
                        </span>

                        <span className="text-gray-900 font-bold text-sm sm:text-base md:text-xl sm:text-right">
                            JN00123
                        </span>
                    </div>


                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4 py-2">
                        <span className="text-gray-500 font-semibold text-sm sm:text-base md:text-xl">
                            Mobile Number
                        </span>

                        <span className="text-gray-900 font-bold text-sm sm:text-base md:text-xl sm:text-right">
                            1234567890
                        </span>
                    </div>


                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4 py-2">
                        <span className="text-gray-500 font-semibold text-sm sm:text-base md:text-xl">
                            Area
                        </span>

                        <span className="text-gray-900 font-bold text-sm sm:text-base md:text-xl sm:text-right">
                            Iringattiri
                        </span>
                    </div>

                </div>


                <hr className="my-6 md:my-8 border-gray-200" />


                {/* Meter Reading */}
                <div className="flex justify-center items-center gap-2 mt-6 md:mt-10">
                    <IoSpeedometerOutline className="text-2xl sm:text-3xl text-blue-500" />

                    <h4 className="text-lg sm:text-xl md:text-2xl font-medium text-blue-800">
                        Meter Reading
                    </h4>
                </div>


                <div className="mt-4">

                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4 py-2">
                        <span className="text-gray-500 font-semibold text-sm sm:text-base md:text-xl">
                            Previous Reading
                        </span>

                        <span className="text-gray-900 font-bold text-sm sm:text-base md:text-xl sm:text-right">
                            1830
                        </span>
                    </div>


                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4 py-2">
                        <span className="text-gray-500 font-semibold text-sm sm:text-base md:text-xl">
                            Current Reading
                        </span>

                        <span className="text-gray-900 font-bold text-sm sm:text-base md:text-xl sm:text-right">
                            1850
                        </span>
                    </div>


                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4 py-2">
                        <span className="text-gray-500 font-semibold text-sm sm:text-base md:text-xl">
                            Water Used
                        </span>

                        <span className="text-gray-900 font-bold text-sm sm:text-base md:text-xl sm:text-right">
                            20 KL
                        </span>
                    </div>


                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4 py-2">
                        <span className="text-gray-500 font-semibold text-sm sm:text-base md:text-xl">
                            Bill Month
                        </span>

                        <span className="text-gray-900 font-bold text-sm sm:text-base md:text-xl sm:text-right">
                            August 2026
                        </span>
                    </div>


                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4 py-2">
                        <span className="text-gray-500 font-semibold text-sm sm:text-base md:text-xl">
                            Due Date
                        </span>

                        <span className="text-gray-900 font-bold text-sm sm:text-base md:text-xl sm:text-right">
                            15 August 2026
                        </span>
                    </div>

                </div>


                <hr className="my-6 md:my-8 border-gray-200" />


                {/* Charges */}
                <div className="flex justify-center items-center gap-2 mt-6 md:mt-10">
                    <FaMoneyBillWave className="text-2xl sm:text-3xl text-blue-500" />

                    <h4 className="text-lg sm:text-xl md:text-2xl font-medium text-blue-800">
                        Charges
                    </h4>
                </div>


                <div className="mt-4">

                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4 py-2">
                        <span className="text-gray-500 font-semibold text-sm sm:text-base md:text-xl">
                            Minimum Charge
                        </span>

                        <span className="text-gray-900 font-bold text-sm sm:text-base md:text-xl sm:text-right">
                            ₹100
                        </span>
                    </div>


                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4 py-2">
                        <span className="text-gray-500 font-semibold text-sm sm:text-base md:text-xl">
                            Water Charge
                        </span>

                        <span className="text-gray-900 font-bold text-sm sm:text-base md:text-xl sm:text-right">
                            ₹40
                        </span>
                    </div>


                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4 py-2">
                        <span className="text-gray-500 font-semibold text-sm sm:text-base md:text-xl">
                            Previous Unpaid Bill
                        </span>

                        <span className="text-gray-900 font-bold text-sm sm:text-base md:text-xl sm:text-right">
                            ₹0
                        </span>
                    </div>

                </div>


                <hr className="my-6 md:my-8 border-gray-200" />


                {/* Total Amount */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mt-6 md:mt-10">

                    <h4 className="text-xl sm:text-2xl font-medium text-blue-800">
                        Total Amount
                    </h4>

                    <div className="flex items-center">
                        <MdOutlineCurrencyRupee className="text-2xl sm:text-3xl text-green-800" />

                        <span className="text-3xl sm:text-4xl font-bold text-green-800">
                            140
                        </span>
                    </div>

                </div>


                {/* Status */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mt-5">

                    <span className="text-gray-500 text-sm sm:text-base md:text-xl">
                        Status
                    </span>

                    <span className="bg-red-700 rounded-full font-medium md:font-bold px-4 py-2 text-white text-sm sm:text-base w-fit">
                        Unpaid
                    </span>

                </div>


                {/* Payment Button */}
                <button
                    type="button"
                    className="
                        w-full
                        sm:w-64
                        mx-auto
                        block
                        bg-blue-600
                        hover:bg-blue-700
                        transition
                        duration-300
                        text-white
                        font-bold
                        py-3
                        rounded-lg
                        mt-8
                    "
                    onClick={() =>
                        navigate("/payment", {
                            state: {
                                consumerName: "Amal M",
                                consumerNumber: "JN00123",
                                billMonth: "August 2026",
                                dueDate: "15 August 2026",
                                amount: 140
                            }
                        })
                    }
                >
                    Proceed to Pay
                </button>

            </div>
        </section>
    );
}

export default Bill_details;