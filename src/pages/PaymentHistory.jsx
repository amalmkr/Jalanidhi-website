import PaymentHistoryHero from "../sections/PaymentHistory/PaymentHistory-Hero";
import PayUserDetails from "../sections/PaymentHistory/PayUserDatails";
import PaymentHistoryTable from "../sections/PaymentHistory/PaymentHistoryTable";

function PaymentHistory(){

    return(
        <>
            <PaymentHistoryHero/>
            <PayUserDetails/>
            <div className="max-w-6xl mx-auto mt-10">

    <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-5">
        ബിൽ അടച്ച വിവരങ്ങൾ
    </h2>



    {/* Table Card */}
    <div className="bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden">

        {/* Table */}
        <div className="overflow-x-auto">

            <table className="w-full min-w-[900px]">

                {/* Header */}
                <thead className="bg-blue-50 border-b border-blue-100">

                    <tr>

                        <th className="px-6 py-4 text-left text-sm font-bold text-blue-800">
                            ബിൽ മാസം
                        </th>

                        <th className="px-6 py-4 text-left text-sm font-bold text-blue-800">
                            ബിൽ നമ്പർ
                        </th>

                        <th className="px-6 py-4 text-left text-sm font-bold text-blue-800">
                            തുക
                        </th>

                        <th className="px-6 py-4 text-left text-sm font-bold text-blue-800">
                            പണമടച്ച തീയതി
                        </th>

                        <th className="px-6 py-4 text-left text-sm font-bold text-blue-800">
                            പേയ്മെന്റ് രീതി
                        </th>

                        <th className="px-6 py-4 text-left text-sm font-bold text-blue-800">
                            നില
                        </th>

                        <th className="px-6 py-4 text-left text-sm font-bold text-blue-800">
                            രസീത്
                        </th>

                    </tr>

                </thead>


                {/* Rows */}
                <tbody className="divide-y divide-gray-100">

                    <PaymentHistoryTable />

                </tbody>

            </table>

        </div>

    </div>

</div>            
        </>
    )
}

export default PaymentHistory;