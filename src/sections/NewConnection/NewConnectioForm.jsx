import Accordion from "../../components/Accordian";
import { useLocation } from "react-router-dom";
import { useState } from "react";
function NewConnectionForm(){
    const location = useLocation();

    const[formData,setFormData]=useState({
        name:"",
        email:"",
        identity:"",
        houseNumber:"",
        houseName:"",
        area:"",
        address:"",
        pin:"",
        idProof: null,
        addressProof: null,
        ownershipProof: null
    });

    const handleSubmit = (e)=>{
        // e.preventDefault();

        console.log("form data : ",formData);
        console.log("Mobile number :",mobileNumber);
        alert("The form is Submitted")
    }

    

    const mobileNumber = location.state?.mobileNumber || ""; 

    return(
        <>
            <section className="pt-30 pb-20">       
                <form onSubmit={handleSubmit}> 
                    <Accordion title="USER INFORMATION" >
                        <div className=" bg-white shadow-2xl rounded-2xl max-w-[400px] md:max-w-[850px] p-3 mx-auto pb-10">
                    
                        <h2 className="text-center text-xl md:text-3xl text-blue-800 font-bold">User Information</h2>
                       
                        <div className="flex flex-col mt-10 mx-10 gap-2">
                            <label className="text-gray-800 font-medium">Name  </label>
                            <input type="text" value={formData.name} onChange={(e)=>{setFormData({...formData,name:e.target.value});}} placeholder="Enter your full name" className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 ring-blue-500"></input>
                        </div>
                        
                        <div className="flex flex-col mt-10 mx-10 gap-2">
                            <label className="text-gray-800 font-medium">Mobile Number </label>
                            <input type="text" placeholder="Enter your Mobile Number"  value={mobileNumber} readOnly className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 ring-blue-500"></input>
                        </div>

                        <div className="flex flex-col mt-10 mx-10 gap-2">
                            <label className="text-gray-800 font-medium">Email</label>
                            <input type="email" placeholder="Enter your Email Address" value={formData.email} onChange={(e)=>{setFormData({...formData,email:e.target.value})}} className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 ring-blue-500"></input>
                        </div>

                        <div className="flex flex-col mt-10 mx-10 gap-2">
                            <label className="text-gray-800 font-medium">AADHAR / Identity Information</label>
                            <input type="text" placeholder="Enter your Identity Deatils" value={formData.identity} onChange={(e)=>{setFormData({...formData,identity:e.target.value})}} className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 ring-blue-500"></input>
                        </div>
                        <div className="flex flex-col mt-10 mx-10 gap-2">
                            <label className="text-gray-800 font-medium">House Number</label>
                            <input type="text" placeholder="Enter your house No. "  value={formData.houseNumber} onChange={(e)=>{setFormData({...formData,houseNumber:e.target.value})}} className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 ring-blue-500"></input>
                        </div>
                </div>
                </Accordion>


                <Accordion title='ADDRESS INFORMATION'>
                <div className=" bg-white shadow-2xl rounded-2xl max-w-[400px] md:max-w-[850px] p-3 mt-10 mx-auto pb-10">
                    
                        <h2 className="text-center text-xl md:text-3xl text-blue-800 font-bold">Address Information</h2>
                       
                        <div className="flex flex-col mt-10 mx-10 gap-2">
                            <label className="text-gray-800 font-medium">House Name</label>
                            <input type="text" value={formData.houseName} onChange={(e)=>{setFormData({...formData,houseName:e.target.value})}} placeholder="Enter your House Name / Number" className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 ring-blue-500"></input>
                        </div>
                        
                    <div>
                    <label className="block text-gray-700 font-semibold mt-8 ml-10">
                        പ്രദേശം <span className="text-red-500">*</span>
                    </label>

                    <select required value={formData.area} onChange={(e)=>{setFormData({...formData,area:e.target.value})}} className="border-2 border-blue-100 px-3 py-2 rounded-xl  focus:outline-none focus:ring-1 focus:ring-blue-500 w-100 ml-10">
                        <option>പ്രദേശം തിരഞ്ഞെടുക്കുക</option>
                        <option>പൂളക്കൽ </option>
                        <option>നെല്ലിക്കലടി</option>
                        <option>പുത്തനഴി</option>
                        <option>കോഴിയാരംക്കുന്ന്</option>
                        <option>കളത്തിൽക്കുന്ന് </option>
                        <option>കൂമ്മുള്ളി</option>
                        <option>വീട്ടിക്കുന്ന്</option>
                        <option>വേളിപ്പാടം</option>
                        <option>ഭാവനംപറമ്പ്</option>
                        <option>ചാമാക്കുന്ന് </option>
                    </select>
                    </div>

                        <div className="flex flex-col mt-5 mx-10 gap-2">
                            <label className="text-gray-800 font-medium">Full address</label>
                            <textarea  placeholder="Enter Ward Name" value={formData.address} onChange={(e)=>{setFormData({...formData,address:e.target.value})}} className="w-full rounded-xl border max-h-[200px] border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 ring-blue-500"></textarea>
                        </div>

                        <div className="flex flex-col mt-10 mx-10 gap-2">
                            <label className="text-gray-800 font-medium">Pin Number</label>
                            <input type="text" value={formData.pin} onChange={(e)=>{setFormData({...formData,pin:e.target.value})}} maxLength="6" placeholder="Enter your full name" className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 ring-blue-500"></input>
                        </div>

                </div>
                </Accordion>
                <Accordion title='DOCUMENTS'>
                <div className=" bg-white shadow-2xl rounded-2xl max-w-[400px] md:max-w-[850px] p-3 mt-10 mx-auto pb-10">
                    
                        <h2 className="text-center text-xl md:text-3xl text-blue-800 font-bold">Documents</h2>
                       
                        <div className="flex flex-col mt-10 mx-10 gap-2">
                            <label className="text-gray-800 font-medium">ID Proof</label>
                            <input type="file" onChange={(e)=>{setFormData({...formData,idProof:e.target.files[0]})}} className=" rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 ring-blue-500"></input>
                        </div>
                        <div className="flex flex-col mt-10 mx-10 gap-2">
                            <label className="text-gray-800 font-medium">Address Proof</label>
                            <input type="file" onChange={(e)=>{setFormData({...formData,addressProof:e.target.files[0]})}} className=" rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 ring-blue-500"></input>
                        </div>
                        <div className="flex flex-col mt-10 mx-10 gap-2">
                            <label className="text-gray-800 font-medium">Ownership Proof</label>
                            <input type="file" onChange={(e)=>{setFormData({...formData,ownershipProof:e.target.files[0]})}} className=" rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 ring-blue-500"></input>
                        </div>
                </div>
                </Accordion>
                <Accordion title='DECLARATION'>
                <div className=" bg-white shadow-2xl rounded-2xl max-w-[400px] md:max-w-[850px] p-3 mt-10 mx-auto pb-10">
                    
                        <h2 className="text-center text-xl md:text-3xl text-blue-800 font-bold">Declaration</h2>
                       
                        <div className="flex mt-10 mx-10 gap-2">
                            <input type="checkbox" required/>
                            <label className="text-red-500 font-medium">I conform that the information provided is correct</label>
                        </div>
                        <div className="flex mt-3 mx-10 gap-2">
                            <input type="checkbox" required/>
                            <label className="text-red-500 font-medium">I agree terms and conditions</label>
                        </div>

                </div>
                </Accordion>

                <div className="mx-auto flex justify-center items-center mt-5">
                    <button type="submit"className="px-4 font-bold py-2 bg-blue-500 text-white rounded-3xl" >Submit</button>
                </div>

                </form>
            </section>
        </>
    )
}

export default NewConnectionForm;


