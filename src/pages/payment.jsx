import PH from "../assets/images/payment-hero.webp";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Payment() {
    const [paymentMethod, setPaymentMethod] = useState("");

    const navigate = useNavigate();
    const location = useLocation();

    const bill = location.state;

    function handlePayment() {
        if (paymentMethod === "") {
            alert("Please select a payment method");
            return;
        }

        navigate("/payment-success", {
            state: {
                bill: bill,
                paymentMethod: paymentMethod
            }
        });
    }

    if (!bill) {
        return (
            <div className="min-h-screen flex flex-col justify-center items-center px-5 text-center">

                <h2 className="text-2xl md:text-3xl font-bold text-blue-800">
                    ബിൽ വിവരങ്ങൾ ലഭ്യമല്ല
                </h2>

                <p className="text-gray-600 mt-3">
                    പേയ്മെന്റ് നടത്തുന്നതിന് ആദ്യം നിങ്ങളുടെ ബിൽ പരിശോധിക്കുക.
                </p>

                <button
                    onClick={() => navigate("/quick-pay")}
                    className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
                >
                    Quick Pay ലേക്ക് പോകുക
                </button>

            </div>
        );
    }

    return (
        <>
            {/* Hero Section */}
            <section>
                <div className="relative">
                    <img
                        src={PH}
                        alt="payment"
                        className="w-full h-[220px] sm:h-[280px] md:h-[350px] object-cover"
                    />

                    <div className="absolute bg-black/60 inset-0"></div>

                    <div className="absolute flex justify-center items-center inset-0 px-5 text-center">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                            പണം അടക്കാം
                        </h2>
                    </div>
                </div>
            </section>


            {/* Payment Section */}
            <section className="px-4 sm:px-6">
                <div className="max-w-3xl mx-auto rounded-2xl shadow-2xl p-5 sm:p-7 md:p-10 my-8 md:my-10">

                    {/* Payment Summary */}
                    <h2 className="text-blue-800 font-bold text-center text-xl sm:text-2xl md:text-3xl">
                        Payment Summary
                    </h2>

                    <hr className="border-gray-200 my-6 md:my-8" />


                    {/* Consumer Name */}
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4 py-2">
                        <span className="text-gray-600">
                            Consumer Name
                        </span>

                        <span className="text-gray-800 font-bold sm:text-right break-words">
                            {bill.consumerName}
                        </span>
                    </div>


                    {/* Consumer Number */}
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4 py-2">
                        <span className="text-gray-600">
                            Consumer Number
                        </span>

                        <span className="text-gray-800 font-bold sm:text-right">
                            {bill.consumerNumber}
                        </span>
                    </div>


                    {/* Bill Month */}
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4 py-2">
                        <span className="text-gray-600">
                            Bill Month
                        </span>

                        <span className="text-gray-800 font-bold sm:text-right">
                            {bill.billMonth}
                        </span>
                    </div>


                    {/* Due Date */}
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4 py-2">
                        <span className="text-gray-600">
                            Due Date
                        </span>

                        <span className="text-gray-800 font-bold sm:text-right">
                            {bill.dueDate}
                        </span>
                    </div>


                    {/* Total Amount */}
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-2 mt-5 py-2">
                        <span className="text-gray-700 text-lg sm:text-xl font-bold">
                            Total Amount
                        </span>

                        <span className="text-green-500 text-xl sm:text-2xl font-bold">
                            ₹ {bill.amount}
                        </span>
                    </div>


                    <hr className="border-gray-200 my-6 md:my-8" />


                    {/* Payment Method */}
                    <h2 className="text-center text-blue-800 font-bold text-xl sm:text-2xl md:text-3xl">
                        Select Payment Method
                    </h2>


                    <form className="mt-6 md:mt-8">

                        {/* UPI */}
                        <label className="flex items-center gap-3 py-3 px-3 rounded-lg cursor-pointer hover:bg-gray-50 transition">
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="upi"
                                checked={paymentMethod === "upi"}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                                className="w-4 h-4"
                            />

                            <span className="text-gray-700 font-semibold">
                                UPI
                            </span>
                        </label>


                        {/* Card */}
                        <label className="flex items-center gap-3 py-3 px-3 rounded-lg cursor-pointer hover:bg-gray-50 transition">
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="card"
                                checked={paymentMethod === "card"}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                                className="w-4 h-4"
                            />

                            <span className="text-gray-700 font-semibold">
                                Debit/Credit Card
                            </span>
                        </label>


                        {/* Net Banking */}
                        <label className="flex items-center gap-3 py-3 px-3 rounded-lg cursor-pointer hover:bg-gray-50 transition">
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="netbanking"
                                checked={paymentMethod === "netbanking"}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                                className="w-4 h-4"
                            />

                            <span className="text-gray-700 font-semibold">
                                Net Banking
                            </span>
                        </label>


                        {/* Selected Method */}
                        {paymentMethod && (
                            <p className="mt-5 text-center text-gray-600">
                                Selected:{" "}
                                <span className="font-bold text-blue-700">
                                    {paymentMethod}
                                </span>
                            </p>
                        )}

                    </form>


                    {/* Pay Button */}
                    <div className="mt-7 md:mt-8">
                        <button
                            type="button"
                            className="w-full sm:w-64 mx-auto block bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-bold py-3 rounded-lg"
                            onClick={handlePayment}
                        >
                            Pay ₹ {bill.amount}
                        </button>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Payment;