import PH from "../../assets/images/payment-hero.webp"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PaymentSec(){
    const [paymentMethod,setPaymentMethod]=useState("");
    const navigate=useNavigate();
    function handlePayment() {
    if (paymentMethod === "") {
        alert("Please select a payment method");
        return;
    }

     navigate("/payment-success");
}
    return(
        <>
        <section>
            <div className="relative">
                <img src={PH} className="w-full h-[250px] md:h-[350px] object-cover"/>
                <div className="absolute bg-black/60 inset-0"></div>
                <h2 className="text-white "></h2>
                <div className="absolute flex justify-center items-center inset-0">
                    <h2 className="text-3xl md:text-5xl font-bold text-white">പണം അടക്കാം </h2>
                </div>
            </div>  
        </section>
        <section>
            <div className="max-w-3xl mx-auto rounded-2xl shadow-2xl p-6 md:p-10 my-10 ">
                <h2 className="text-blue-800 font-bold text-center text-xl md:text-3xl">Payment Summary</h2>
                <hr className="border-gray-200 my-8 "/>
                <div className="flex justify-between py-2">
                    <span className="text-gray-600">Consumer Name</span>
                    <span className="text-gray-800 font-bold">Amal M</span>
                </div>
                <div className="flex justify-between py-2">
                    <span className="text-gray-600">Consumer Number</span>
                    <span className="text-gray-800 font-bold">JN00012</span>
                </div>
                <div className="flex justify-between py-2">
                    <span className="text-gray-600">Bill Month</span>
                    <span className="text-gray-800 font-bold">August 2026</span>
                </div>
                <div className="flex justify-between py-2">
                    <span className="text-gray-600">Due Date</span>
                    <span className="text-gray-800 font-bold">15 Aug 2026</span>
                </div>
                <div className="flex justify-between py-2 mt-5">
                    <span className="text-gray-600 text-xl font-bold">Total Amount</span>
                    <span className="text-gray-800  text-xl font-bold text-green-500">140/-</span>
                </div>
                <hr className="border-gray-200 my-8 "/>
                <h2 className="text-center text-blue-800 font-bold text-xl md:text-3xl">Select Payment Method</h2>
                
                <form className="mt-8">

                    <label className="flex items-center gap-3 py-3 cursor-pointer">
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="upi"
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />

                        <span className="text-gray-700 font-semibold">
                            UPI
                        </span>
                    </label>
                    <label className="flex items-center gap-3 py-3 cursor-pointer">
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="card"
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />

                        <span className="text-gray-700 font-semibold">
                            Debit/Credit
                        </span>
                    </label>
                    <label className="flex items-center gap-3 py-3 cursor-pointer">
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="netbanking"
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
 
                        <span className="text-gray-700 font-semibold">
                            Net Banking
                        </span>
                    </label>
                    <p className="mt-5 text-center text-gray-600">
                         Selected: {paymentMethod}
                    </p>

                </form>   
                <div className="mt-8">
                <button
                    type="button"
                    className="w-full md:w-64 mx-auto block bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-bold py-3 rounded-lg"
                    onClick={handlePayment}                
                >
                    Pay ₹140
                </button>
                </div>             
            </div>
        </section>
        
        </>
    )
}

export default PaymentSec;