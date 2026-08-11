import PaymentHistoryHero from "../sections/PaymentHistory/PaymentHistory-Hero";
import PayUserDetails from "../sections/PaymentHistory/PayUserDatails";
import PaymentHistoryTable from "../sections/PaymentHistory/PaymentHistoryTable";
// import PaymentHistoryEmpty from "../sections/PaymentHistory/PaymentHistoryEmpty";

function PaymentHistory() {
    return (
        <>
            <PaymentHistoryHero />

            <PayUserDetails />

            {/* Payment History Section */}
            <section className="max-w-6xl mx-auto px-4 md:px-6 mt-14 mb-16">

                {/* Heading */}
                <div className="mb-7">

                    <h2 className="text-2xl md:text-3xl font-bold text-blue-800 text-center">
                        ബിൽ അടച്ച വിവരങ്ങൾ
                    </h2>

                    <p className="text-gray-500 mt-2 text-center">
                        നിങ്ങളുടെ മുൻകാല ബിൽ പേയ്മെന്റുകളുടെ വിവരങ്ങൾ
                    </p>

                </div>


                {/* Table Card */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

                    {/* Responsive wrapper */}
                    <div className="overflow-x-auto">

                        <table className="w-full min-w-[1000px]">

                            {/* Header */}
                            <thead className="bg-blue-50">

                                <tr>

                                    <th className="px-6 py-5 text-left text-sm font-bold text-blue-800">
                                        ബിൽ മാസം
                                    </th>

                                    <th className="px-6 py-5 text-left text-sm font-bold text-blue-800">
                                        ബിൽ നമ്പർ
                                    </th>

                                    <th className="px-6 py-5 text-left text-sm font-bold text-blue-800">
                                        തുക
                                    </th>

                                    <th className="px-6 py-5 text-left text-sm font-bold text-blue-800">
                                        പണമടച്ച തീയതി
                                    </th>

                                    <th className="px-6 py-5 text-left text-sm font-bold text-blue-800">
                                        പേയ്മെന്റ് രീതി
                                    </th>

                                    <th className="px-6 py-5 text-left text-sm font-bold text-blue-800">
                                        നില
                                    </th>

                                    <th className="px-6 py-5 text-left text-sm font-bold text-blue-800">
                                        രസീത്
                                    </th>

                                </tr>

                            </thead>


                            {/* Payment Rows */}
                            <tbody className="divide-y divide-gray-100">

                                <PaymentHistoryTable />

                            </tbody>

                        </table>

                    </div>

                </div>

            </section>
        </>
    );
}

export default PaymentHistory;