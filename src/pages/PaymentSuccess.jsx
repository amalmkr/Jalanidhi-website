import { IoMdCheckmark } from "react-icons/io";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import jsPDF from "jspdf";

function PaymentSuccess() {
    const navigate = useNavigate();
    const location = useLocation();

    const { bill, paymentMethod } = location.state || {};

    const payment = bill
        ? {
              month: bill.billMonth,
              billNo: bill.consumerNumber,
              amount: bill.amount,
              date: new Date().toLocaleDateString(),
              method: paymentMethod,
              status: "Paid"
          }
        : null;

    // Redirect if payment data is missing
    useEffect(() => {
        if (!bill) {
            navigate("/quick-pay");
        }
    }, [bill, navigate]);

    // Save payment to localStorage
    useEffect(() => {
        if (!payment) {
            return;
        }

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
    }, [payment?.billNo, payment?.month]);

    // Don't render anything while redirecting
    if (!bill) {
        return null;
    }

    function handleDownload() {
        const doc = new jsPDF();

        // Border
        doc.setDrawColor(200, 200, 200);
        doc.rect(15, 15, 180, 265);

        // Header
        doc.setFontSize(22);
        doc.setFont("helvetica", "bold");
        doc.text("Jalanidhi", 105, 35, {
            align: "center"
        });

        doc.setFontSize(14);
        doc.setFont("helvetica", "normal");
        doc.text("Water Supply Payment Receipt", 105, 45, {
            align: "center"
        });

        // Divider
        doc.line(25, 55, 185, 55);

        // Receipt title
        doc.setFontSize(16);
        doc.setFont("helvetica", "bold");
        doc.text("PAYMENT RECEIPT", 105, 70, {
            align: "center"
        });

        // Payment details
        doc.setFontSize(11);
        doc.setFont("helvetica", "normal");

        doc.text("Bill Number", 30, 90);
        doc.text(`: ${payment.billNo}`, 75, 90);

        doc.text("Bill Month", 30, 105);
        doc.text(`: ${payment.month}`, 75, 105);

        doc.text("Amount Paid", 30, 120);
        doc.text(`: Rs. ${payment.amount}`, 75, 120);

        doc.text("Payment Date", 30, 135);
        doc.text(`: ${payment.date}`, 75, 135);

        doc.text("Payment Method", 30, 150);
        doc.text(`: ${payment.method}`, 75, 150);

        doc.text("Payment Status", 30, 165);
        doc.text(`: ${payment.status}`, 75, 165);

        // Success message
        doc.setFontSize(12);
        doc.setFont("helvetica", "bold");
        doc.text("Payment Successful", 105, 190, {
            align: "center"
        });

        // Footer
        doc.setFontSize(9);
        doc.setFont("helvetica", "normal");

        doc.text(
            "Thank you for your payment.",
            105,
            230,
            {
                align: "center"
            }
        );

        doc.text(
            "Jalanidhi - Rural Water Supply and Sanitation Agency",
            105,
            240,
            {
                align: "center"
            }
        );

        // Download PDF
        doc.save(`${payment.billNo}-receipt.pdf`);
    }

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
                        onClick={handleDownload}
                    >
                        Download Bill
                    </button>

                </div>

            </div>

        </section>
    );
}

export default PaymentSuccess;