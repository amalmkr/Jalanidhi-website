import checkConnectionHero from '../assets/images/checkConnection.jpeg';
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { useState } from 'react';


function CheckConnection(){

    const [applicationNumber,setApplicationNumber]=useState("");
    const [showDetails,setShowDetails]=useState(false);
    const handleSearch=()=>{
        if(applicationNumber === "JN-2026-00123"){
            setShowDetails(true);
        }
        else{
            setShowDetails(false);
            alert("Invalid Application Number")
        }
    };
    return(
        <>
        <div className="relative">
            <img src={checkConnectionHero} className='w-full object-cover h-[250px] md:h-[400px]'/>
            <div className='inset-0 absolute bg-black/65'></div>
            <div className='flex inset-0 absolute  justify-center items-center'>
                <h2 className='text-3xl md:text-6xl  text-white font-bold'>Check Your Connection Status</h2>
            </div>
        </div>

        <section>
            <div className='shadow-2xl   max-w-[400px] md:max-w-[600px] p-5 mx-auto rounded-2xl my-10'>
                <div className='flex gap-5 items-center justify-center '>
                    <HiOutlineDocumentSearch className='text-blue-800 md:text-4xl'/>
                    <h2 className='md:text-3xl text-blue-800 font-medium'> Search Application</h2>
                </div>
                <hr className='bg-blue-500/45 mt-3 mx-50' />

                <div className="mt-6">
                        <label
                            htmlFor="applicationNumber"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Application Number
                        </label>

                        <div className="flex gap-3">
                            <input
                                id="applicationNumber"
                                type="text"
                                value={applicationNumber}
                                onChange={(e)=>setApplicationNumber(e.target.value  )}
                                placeholder="Enter Application Number"
                                className="flex-1 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600"
                            />

                            <button
                                type="button"
                                className=" bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800"
                                onClick={handleSearch}
                            >
                                Search
                            </button>
                        </div>

                        <p className="text-sm text-gray-500 mt-2">
                            Example: JN-2026-00123
                        </p>
                    </div>
            </div>

            {showDetails && (
                <div className='shadow-2xl p-5 max-w-[400px] md:max-w-[800px] bg-white rounded-2xl my-10 mx-auto'>
                    <h2 className='text-2xl text-blue-800 font-bold text-center'>Connection Status</h2>
                    <hr className='bg-blue-500 mt-4 mx-50'/>

                </div>
            )}
        </section>
        </>
    )
}

export default CheckConnection;