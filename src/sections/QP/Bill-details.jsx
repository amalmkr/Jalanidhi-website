import { FaMoneyBillWave } from "react-icons/fa6";
import { CiCircleInfo } from "react-icons/ci";
import { IoSpeedometerOutline } from "react-icons/io5";
import { FaReceipt } from "react-icons/fa6";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Bill_details(){
    const navigate=useNavigate();
    return(
        <>
        <section className="mt-20 p-10 px-10">
            <div className="rounded-xl shadow-2xl p-10 max-w-4xl mx-auto" >
                <div className="flex items-center justify-center gap-5">
                    <FaReceipt className="text-blue-800 text-3xl font-bold"/>
                    <h2 className="text-xl md:text-3xl text-blue-800 font-bold">ബില്ല് വിശദാംശം</h2>
                </div>
                    <hr className="my-8 border-gray-200" />

                <div className="flex justify-center mt-10 items-center gap-2 ">
                    <CiCircleInfo className="text-3xl text-blue-500 font-bold"/>
                    <h4 className="text-center text- md:text-2xl font-medium text-blue-800">Consumer Information</h4>
                </div>
                

                <div className="flex justify-between py-2 mt-3">
                    <span className="text-gray-500 font-semibold text-sm md:text-xl">Consumer Name</span>
                    <span className="text-gray-900 font-bold text-sm md:text-xl">Amal M</span>
                </div>
                <div className="flex justify-between py-2">
                    <span className="text-gray-500 font-semibold text-sm md:text-xl">Consumer Number</span>
                    <span className="text-gray-900 font-bold text-sm md:text-xl">JN00123</span>
                </div>
                <div className="flex justify-between py-2">
                    <span className="text-gray-500 font-semibold text-sm md:text-xl">Mobile Number</span>
                    <span className="text-gray-900 font-bold text-sm md:text-xl">1234567890</span>
                </div>
                <div className="flex justify-between py-2">
                    <span className="text-gray-500 font-semibold text-sm md:text-xl">Area</span>
                    <span className="text-gray-900 font-bold text-sm md:text-xl">Iringattiri</span>
                </div>

                <hr className="my-8 border-gray-200" />

                <div className="flex justify-center mt-10 items-center gap-2">
                    <IoSpeedometerOutline className="text-3xl text-blue-500 font-bold"/>
                    <h4 className="text-center text- md:text-2xl font-medium text-blue-800">Meter Reading</h4>
                </div>
                <div className="flex justify-between py-2">
                    <span className="text-gray-500 font-semibold text-sm md:text-xl">Previous Reading</span>
                    <span className="text-gray-900 font-bold text-sm md:text-xl">1830</span>
                </div>
                <div className="flex justify-between py-2">
                    <span className="text-gray-500 font-semibold text-sm md:text-xl">Current Reading</span>
                    <span className="text-gray-900 font-bold text-sm md:text-xl">1850</span>
                </div>
                <div className="flex justify-between py-2">
                    <span className="text-gray-500 font-semibold text-sm md:text-xl">Water Used</span>
                    <span className="text-gray-900 font-bold text-sm md:text-xl">20 KL</span>
                </div>
                <div className="flex justify-between py-2">
                    <span className="text-gray-500 font-semibold text-sm md:text-xl">Bill Month</span>
                    <span className="text-gray-900 font-bold text-sm md:text-xl">August 2026</span>
                </div>
                <div className="flex justify-between py-2">
                    <span className="text-gray-500 font-semibold text-sm md:text-xl">Due Date</span>
                    <span className="text-gray-900 font-bold text-sm md:text-xl">15 August 2026</span>
                </div>
                
                <hr className="my-8 border-gray-200" />

                <div className="flex justify-center mt-10 items-center gap-2">
                    <FaMoneyBillWave className="text-3xl text-blue-500 font-bold"/>
                    <h4 className="text-center md:text-2xl font-medium text-blue-800">Charges</h4>
                </div>
                <div className="flex justify-between py-2">
                    <span className="text-gray-500 font-semibold text-sm md:text-xl">Minimum Charge</span>
                    <span className="text-gray-900 font-bold text-sm md:text-xl">100/-</span>
                </div>
                <div className="flex justify-between py-2">
                    <span className="text-gray-500 font-semibold text-sm md:text-xl">Water Charge</span>
                    <span className="text-gray-900 font-bold text-sm md:text-xl">40/-</span>
                </div>
                <div className="flex justify-between py-2">
                    <span className="text-gray-500 font-semibold text-sm md:text-xl">Previous Unpaid Bill</span>
                    <span className="text-gray-900 font-bold text-sm md:text-xl">0</span>
                </div>

                <hr className="my-8 border-gray-200"/>
                
                <div className="flex justify-between items-center mt-10">
                    <h4 className="text-2xl font-medium text-blue-800">
                        Total Amount
                    </h4>

                    <div className="flex items-center">
                        <MdOutlineCurrencyRupee className="text-2xl text-green-800" />
                        <span className="text-3xl font-bold text-green-800">
                            140
                        </span>
                    </div>
                </div>
                <div className="flex justify-between mt-5">
                    <span className="text-gray-500 text-sm md:text-xl">Status</span>
                    <span className="bg-red-700 rounded-4xl font-medium md:font-bold p-2 md:p-3 text-white"> Unpaid</span>
                </div>
                    <button
                        type="button"
                        className="w-full mt-8 md:w-64 mx-auto block bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-bold py-3 rounded-lg"
                        onClick={()=>navigate("/payment")}
                    >
                        Proceed to Pay
                    </button>
            </div>
        </section>
        </>
    )
}

export default Bill_details;