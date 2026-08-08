function PaymentSuccess() {
    return (
        <section className="min-h-[70vh] flex items-center justify-center px-5 py-10">

            <div className="w-full max-w-lg rounded-2xl shadow-2xl p-8 md:p-10 text-center">

                {/* Success Icon */}
                <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-5xl text-green-600">
                        ✓
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
                            JN00012
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-gray-500">
                            Amount Paid
                        </span>

                        <span className="font-bold text-green-600">
                            ₹140
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-gray-500">
                            Payment Method
                        </span>

                        <span className="font-bold">
                            UPI
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
                <button
                    type="button"
                    className="w-full mt-8 bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-bold py-3 rounded-lg"
                >
                    Back to Quick Pay
                </button>

            </div>

        </section>
    );
}

export default PaymentSuccess;