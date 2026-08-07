import { useState } from "react";
import { LuUserSearch } from "react-icons/lu";

function Search_bill({onSearch}){
    return(
        <>
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-6 md:p-10 my-10 ">

                {/* Heading */}
                <div className="flex items-center justify-center gap-3 mb-8">
                    <LuUserSearch className="text-4xl text-blue-600" />
                    <h2 className="text-xl md:text-3xl font-bold text-gray-800">
                    ഉപയോക്താവിന്റെ വിവരങ്ങൾ
                    </h2>
                </div>

                {/* User Form */}
                <form className="space-y-8">

                    {/* Consumer Number */}
                    <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                        Consumer Number
                    </label>

                    <input
                        type="text"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    </div>

                    {/* OR */}
                    <div className="flex items-center gap-4">
                    <hr className="flex-1 border-gray-300" />
                    <span className="font-semibold text-gray-500">OR</span>
                    <hr className="flex-1 border-gray-300" />
                    </div>

                    {/* Mobile Number */}
                    <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                        Mobile Number
                    </label>

                    <input
                        type="text"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    </div>

                    {/* Button */}
                    <div className="pt-2">
                    <button
                        type="button"
                        className="w-full md:w-64 mx-auto block bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-bold py-3 rounded-lg"
                        onClick={onSearch}
                    >
                        Search
                    </button>
                    </div>

                </form>

                </div >

        </>
    )
}

export default Search_bill;