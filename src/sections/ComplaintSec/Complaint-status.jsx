import complaintStatusHero from "../../assets/images/complaint-status.jpg"
import { HiOutlineDocumentSearch } from "react-icons/hi";


function ComplaintStatus(){

    return(
        <>
                <div className='relative'>
                    <img src={complaintStatusHero} className='object-cover w-full h-[250px] md:h-[400px]'/>
                    <div className='inset-0 bg-gray-900/35 absolute'></div>
                    <div className='flex inset-0 absolute justify-center items-center'>
                        <h2 className='text-white font-extrabold text-4xl md:text-6xl'>പരാതിയുടെ നില </h2>
                    </div>
                </div>

            <div className='shadow-2xl   max-w-[400px] md:max-w-[600px] p-5 mx-auto rounded-2xl my-10'>
                <div className='flex gap-5 items-center justify-center '>
                    <HiOutlineDocumentSearch className='text-blue-800 md:text-4xl'/>
                    <h2 className='md:text-3xl text-blue-800 font-medium'> Search Complaint</h2>
                </div>
                <hr className='bg-blue-500/45 mt-3 mx-50' />

                <div className="mt-6">
                        <label
                            htmlFor="applicationNumber"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Complaint ID
                        </label>

                        <div className="flex gap-3">
                            <input
                                id="applicationNumber"
                                type="text"
                                // value={applicationNumber}
                                // onChange={(e)=>setApplicationNumber(e.target.value  )}
                                placeholder="Enter Complaint ID"
                                className="flex-1 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-600"
                            />

                            <button
                                type="button"
                                className=" bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800"
                                // onClick={handleSearch}
                            >
                                Search
                            </button>
                        </div>

                        <p className="text-sm text-gray-500 mt-2">
                            Example: JN-2026-00123
                        </p>
                    </div>
            </div>
                
        
        </>
    )
} 


export default ComplaintStatus;