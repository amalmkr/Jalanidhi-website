function PayUserDetails(){

    return(
        <>
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mt-8 my-10">

    <div className="border border-blue-200 rounded-2xl p-6 shadow-sm">
        <p className="text-gray-500">
            ഉപയോക്താവിന്റെ പേര് 
        </p>

        <p className="text-3xl font-bold text-blue-700 mt-2">
            Amal M
        </p>
    </div>


    <div className="border border-green-200 rounded-2xl p-6 shadow-sm">
        <p className="text-gray-500">
            കൺസ്യൂമർ നമ്പർ 
        </p>

        <p className="text-3xl font-bold text-green-600 mt-2">
            JN001
        </p>
    </div>


    <div className="border border-orange-200 rounded-2xl p-6 shadow-sm">
        <p className="text-gray-500">
            അവസാന പേയ്മെന്റ്
        </p>

        <p className="text-xl font-bold text-orange-500 mt-2">
            10 Aug 2026
        </p>
    </div>

</div>
        </>
    )
}

export default PayUserDetails;