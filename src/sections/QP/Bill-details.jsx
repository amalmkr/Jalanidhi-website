import { FaMoneyBillWave } from "react-icons/fa6";
import { CiCircleInfo } from "react-icons/ci";
function Bill_details(){
    return(
        <>
        <section className="mt-20 p-10 px-10">
            <div className="rounded-xl shadow-2xl p-10 max-w-4xl mx-auto" >
                <div className="flex items-center justify-center gap-5">
                    <FaMoneyBillWave className="text-blue-800 text-3xl font-bold"/>
                    <h2 className="text-xl md:text-3xl text-blue-800 font-bold">ബില്ല് വിശദാംശം</h2>
                </div>
                <div className="flex justify-center mt-10 items-center gap-2">
                    <CiCircleInfo className="text-3xl text-blue-500 font-bold"/>
                    <h4 className="text-center text- md:text-2xl font-medium text-blue-800">Consumer Information</h4>
                </div>
                
                <hr className="my-8 border-gray-200" />

                <div className="flex justify-between py-2">
                    <span className="text-gray-500 font-semibold">Consumer Name</span>
                    <span className="text-gray-900 font-bold">Amal M</span>
                </div>
                <div className="flex justify-between py-2">
                    <span className="text-gray-500 font-semibold">Consumer Number</span>
                    <span className="text-gray-900 font-bold">JN00123</span>
                </div>
                <div className="flex justify-between py-2">
                    <span className="text-gray-500 font-semibold">Mobile Number</span>
                    <span className="text-gray-900 font-bold">1234567890</span>
                </div>
                <div className="flex justify-between py-2">
                    <span className="text-gray-500 font-semibold">Area</span>
                    <span className="text-gray-900 font-bold">Iringattiri</span>
                </div>

                <hr className="my-8 border-gray-200" />

                <div >

                </div>
            </div>
        </section>
        </>
    )
}

export default Bill_details;