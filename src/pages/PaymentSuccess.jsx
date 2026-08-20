import { IoMdCheckmark } from "react-icons/io";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

function PaymentSuccess() {
    const navigate = useNavigate();
    const location = useLocation();

    const { bill, paymentMethod } = location.state;

    const payment = {
        month: bill.billMonth,
        billNo: bill.consumerNumber,
        amount: bill.amount,
        date: new Date().toLocaleDateString(),
        method: paymentMethod,
        status: "Paid"
    };

    useEffect(() => {
        const existingPayments =
            JSON.parse(localStorage.getItem("payments")) || [];

        const alreadyPaid = existingPayments.some(
            (item) =>
                item.billNo === payment.billNo &&
                item.month === payment.month
        );

        if (!alreadyPaid) {
            existingPayments.push(payment);

            localStorage.setItem(
                "payments",
                JSON.stringify(existingPayments)
            );
        }
    }, [payment.billNo, payment.month]);

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
                    Payment Successful
                </h1>


                {/* Message */}
                <p className="text-gray-500 text-sm sm:text-base mt-3 leading-relaxed">
                    Your water bill payment has been completed successfully.
                </p>


                <hr className="my-6 sm:my-8 border-gray-200" />


                {/* Payment Details */}
                <div className="space-y-4 text-left">

                    {/* Consumer Number */}
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                        <span className="text-gray-500 text-sm sm:text-base">
                            Consumer Number
                        </span>

                        <span className="font-bold text-sm sm:text-base sm:text-right break-all">
                            {bill.consumerNumber}
                        </span>
                    </div>


                    {/* Amount Paid */}
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                        <span className="text-gray-500 text-sm sm:text-base">
                            Amount Paid
                        </span>

                        <span className="font-bold text-green-600 text-sm sm:text-base">
                            ₹ {bill.amount}
                        </span>
                    </div>


                    {/* Payment Method */}
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                        <span className="text-gray-500 text-sm sm:text-base">
                            Payment Method
                        </span>

                        <span className="font-bold text-sm sm:text-base sm:text-right">
                            {paymentMethod}
                        </span>
                    </div>


                    {/* Status */}
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4">
                        <span className="text-gray-500 text-sm sm:text-base">
                            Status
                        </span>

                        <span className="font-bold text-green-600 text-sm sm:text-base">
                            Paid
                        </span>
                    </div>

                </div>


                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 mt-6 sm:mt-8">

                    {/* Payment History */}
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
                        onClick={() => navigate("/payment-history")}
                    >
                        Payment History
                    </button>


                    {/* Download Bill */}
                    <button
                        type="button"
                        className="
                            w-full
                            bg-green-600
                            hover:bg-green-700
                            transition duration-300
                            text-white
                            font-bold
                            py-3
                            px-3
                            rounded-lg
                            text-sm sm:text-base
                        "
                        onClick={() =>
                            alert("Download bill will be available soon")
                        }
                    >
                        Download Bill
                    </button>

                </div>

            </div>

        </section>
    );
}

export default PaymentSuccess;