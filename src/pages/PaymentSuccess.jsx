import { IoMdCheckmark } from "react-icons/io";
import { useNavigate,useLocation } from "react-router-dom";
import { useEffect } from "react";

function PaymentSuccess() {
    const navigate=useNavigate()
    const location=useLocation();
    const {bill,paymentMethod}=location.state;
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
},[payment.billNo, payment.month]);



    return (
        <section className="min-h-[70vh] flex items-center justify-center px-5 py-10">

            <div className="w-full max-w-lg rounded-2xl shadow-2xl p-8 md:p-10 text-center">

                {/* Success Icon */}
                <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-5xl text-green-600">
                        <IoMdCheckmark/>
                    </span>
                </div>

                {/* Heading */}
                <h1 className="text-2xl md:text-3xl font-bold text-green-600 mt-6">
                    Payment Successful
                </h1>

                <p className="text-gray-500 mt-3">
                    Your water bill payment has been completed successfully.
                </p>

                <hr className="my-8 border-gray-200" />

                {/* Payment Details */}
                <div className="space-y-4 text-left">

                    <div className="flex justify-between">
                        <span className="text-gray-500">
                            Consumer Number
                        </span>

                        <span className="font-bold">
                            {bill.consumerNumber}
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-gray-500">
                            Amount Paid
                        </span>

                        <span className="font-bold text-green-600">
                            ₹ {bill.amount}
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-gray-500">
                            Payment Method
                        </span>

                        <span className="font-bold">
                            {paymentMethod}
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-gray-500">
                            Status
                        </span>

                        <span className="font-bold text-green-600">
                            Paid
                        </span>
                    </div>

                </div>

                {/* Button */}
                    <div className="flex gap-5">
                    <button
                        type="button"
                        className="w-full mt-8 bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-bold px-1  py-3 rounded-lg text-sm md:text-xl"
                        onClick={()=>navigate('/payment-history')}
                    >
                        Payment History
                    </button>
                    <button
                        type="button"
                        className="w-full mt-8 bg-green-600 hover:bg-green-700 transition duration-300 text-white font-bold md:font-extrabold py-3 rounded-lg"
                        onClick={()=>alert("download bill will available soon")}
                    >
                        Download Bill
                    </button>
                </div>
            </div>

        </section>
    );
}

export default PaymentSuccess;