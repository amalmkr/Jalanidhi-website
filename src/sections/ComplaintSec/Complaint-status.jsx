import complaintStatusHero from "../../assets/images/complaint-status.jpg"
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { useState } from "react";

function ComplaintStatus(){

        const[complaint,setComplaint]=useState(null);
        const[complaintID,setComplaintID]=useState("");
        const[error,setError]=useState("")

        const complaints = [
            {
                complaintID:"JN-CMP-2026-06-0123",
                mobileNumber:"8281415287",
                complaintType:"pipe line leakage",
                location:"puthanazhi",
                complaintDetails:"Road side pipe line leaked.",
                status: "Under Review",
            },
            {
                complaintID:"JN-CMP-2026-06-0124",
                mobileNumber:"9056341826",
                complaintType:"about bill",
                location:"poolakkal",
                complaintDetails:"bill details is incorrect.",
                status:"Resolved"
            }
        ]

        const handleSearch=()=>{
            const searchComplaint = complaintID.trim()


            if(!searchComplaint){
                setComplaint(null);
                setError("PLEASE ENTER COMPLAINT ID TO GET COMPLAINT STATUS")
                return;
            }

            const foundComplaint = complaints.find(
                (item)=>
                    item.complaintID.toLowerCase()===searchComplaint.toLowerCase()

            );

            if(foundComplaint){
                setComplaint(foundComplaint)
                setError("")
            }
            else{
                setComplaint(null)
                setError("Please enter valid complaint ID")
            }



            

        }
            const handleSearchAgain=()=>{
                setComplaint(null)
                setComplaintID("")
                setError("")
            }



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
                            htmlFor="complaintID"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Complaint ID
                        </label>

                        <div className="flex gap-3">
                            <input
                                id="complaintID"
                                type="text"
                                value={complaintID}
                                onChange={(e)=>{setComplaintID(e.target.value);
                                    setError("")
                                }}
                                onKeyDown={(e)=>{
                                    if(e.key==="Enter"){
                                        handleSearch();
                                    }
                                }}
                                placeholder="Enter Complaint ID"
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
                            Example: JN-CMP-2026-06-0123
                        </p>

                        {error && (
                            <div className="mt-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">
                                {error}
                            </div>
                        )}

                    </div>
            </div>

            {complaint && (
                <div className="shadow-2xl p-5 max-w-[600px] bg-white rounded-2xl my-10 mx-auto">
                    <h2 className="text-center text-2xl text-blue-800">Complaint status</h2>
                    <hr className="border-blue-500 mt-4"/>

                        <div className="space-y-5 mt-5">

                            <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                                <p className="text-gray-600">
                                    Complaint ID
                                </p>

                                <p className="font-bold">
                                    {complaint.complaintID}
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                                <p className="text-gray-600">
                                    Mobile Number
                                </p>

                                <p className="font-bold">
                                    {complaint.mobileNumber}
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                                <p className="text-gray-600">
                                    Complaint Type
                                </p>

                                <p className="font-bold">
                                    {complaint.complaintType}
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                                <p className="text-gray-600">
                                    Location
                                </p>

                                <p className="font-bold">
                                    {complaint.location}
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                                <p className="text-gray-600">
                                    Complaint Details
                                </p>

                                <p className="font-bold">
                                    {complaint.complaintDetails}
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:justify-between gap-1 items-start sm:items-center">
                                <p className="text-gray-600">
                                    Current Status
                                </p>

                                <span
                                    className={`font-semibold px-3 py-1 rounded-full ${
                                        complaint.status === "Resolved"
                                            ? "bg-green-100 text-green-700"
                                            : complaint.status === "Rejected"
                                            ? "bg-red-100 text-red-700"
                                            : "bg-yellow-100 text-yellow-700"
                                    }`}
                                >
                                    {complaint.status}
                                </span>
                            </div>

                        </div>

                            <button
                                type="button"
                                onClick={handleSearchAgain}
                                className="w-full mt-8 bg-blue-100 hover:bg-gray-200 text-blue-700 py-3 rounded-lg transition"
                            >
                                Search Another Complaint
                            </button>
                        
                        </div>
            )}
                
        
        </>
    )
} 


export default ComplaintStatus;