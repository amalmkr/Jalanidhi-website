import jsPDF from "jspdf";
function PaymentHistoryTable() {

    const payment = [
        {
            month: "August 2026",
            billNo: "JN-2026-08-123",
            amount: 100,
            date: "10 Aug 2026",
            method: "UPI",
            status: "Paid"
        },
        {
            month: "July 2026",
            billNo: "JN-2026-07-123",
            amount: 130,
            date: "23 Jul 2026",
            method: "UPI",
            status: "Paid"
        },
        {
            month: "June 2026",
            billNo: "JN-2026-06-123",
            amount: 100,
            date: "15 Jun 2026",
            method: "UPI",
            status: "Paid"
        },
    ]
        function handleDownload(payment) {

            const doc = new jsPDF();

            // Page border
            doc.setDrawColor(200, 200, 200);
            doc.rect(15, 15, 180, 265);

            // Header
            doc.setFontSize(22);
            doc.setFont("helvetica", "bold");
            doc.text("Jalanidhi", 105, 35, { align: "center" });

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
                { align: "center" }
            );

            doc.text(
                "Jalanidhi -Rural Water Supply and Sanitation Agency",
                105,
                240,
                { align: "center" }
            );

            // Download
            doc.save(`${payment.billNo}-receipt.pdf`);
        }



    return (
        <>
            {payment.map((payment, index) => (

                <tr
                    key={index}
                    className="group hover:bg-blue-50/50 transition-all duration-200"
                >

                    {/* Bill Month */}
                    <td className="px-6 py-6">
                        <div className="font-semibold text-gray-800">
                            {payment.month}
                        </div>

                        <div className="text-xs text-gray-400 mt-1">
                            Water Bill
                        </div>
                    </td>


                    {/* Bill Number */}
                    <td className="px-6 py-6">
                        <span className="text-sm font-medium text-gray-600">
                            {payment.billNo}
                        </span>
                    </td>


                    {/* Amount */}
                    <td className="px-6 py-6">
                        <span className="text-base font-bold text-gray-800">
                            ₹{payment.amount}
                        </span>
                    </td>


                    {/* Date */}
                    <td className="px-6 py-6">
                        <span className="text-sm text-gray-600">
                            {payment.date}
                        </span>
                    </td>


                    {/* Payment Method */}
                    <td className="px-6 py-6">
                        <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium">
                            {payment.method}
                        </span>
                    </td>


                    {/* Status */}
                    <td className="px-6 py-6">

                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-100 text-green-700 text-sm font-semibold">

                            <span className="w-2 h-2 rounded-full bg-green-500"></span>

                            {payment.status}

                        </span>

                    </td>


                    {/* Receipt */}
                    <td className="px-6 py-6">

                        <button
                            className="px-4 py-2 rounded-lg border border-blue-200 text-blue-600 text-sm font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
                            onClick={()=>handleDownload(payment)}
                        >
                            Download
                        </button>

                    </td>

                </tr>

            ))}
        </>
    )
}

export default PaymentHistoryTable