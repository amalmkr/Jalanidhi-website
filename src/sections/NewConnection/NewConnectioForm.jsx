import Accordion from "../../components/Accordian";
import { useLocation,useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
function NewConnectionForm(){
    const location = useLocation();
    const navigate = useNavigate();   
  


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
        e.preventDefault();

        console.log("form data : ",formData);
        console.log("Mobile number :",mobileNumber);
        navigate('/connection-success',{
            state:{
                mobileNumber:mobileNumber,
                formData:formData
            }
        })
    }

     

    const mobileNumber = location.state?.mobileNumber || ""; 
    
        useEffect(() => {
            if (!mobileNumber) {
                navigate("/number-verification", { replace: true });
            }
        }, [mobileNumber, navigate]);

        const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];

    if (!file) {
        return;
    }

    const maxSize = 5 * 1024 * 1024; // 5 MB

    if (file.size > maxSize) {
        alert("File size must be less than 5 MB.");
        e.target.value = "";
        return;
    }

    setFormData({
        ...formData,
        [fieldName]: file
    });
};

    return(
        <>
            <section className="pt-30 pb-20">       
                <form onSubmit={handleSubmit}> 
                    <Accordion title="USER INFORMATION" >
                        <div className=" bg-white shadow-2xl rounded-2xl max-w-[400px] md:max-w-[850px] p-3 mx-auto pb-10">
                    
                        <h2 className="text-center text-xl md:text-3xl text-blue-800 font-bold">User Information</h2>
                       
                        <div className="flex flex-col mt-10 mx-10 gap-2">
                            <label className="text-gray-800 font-medium">Name  </label>
                            <input type="text" required value={formData.name} pattern="[A-Za-z]+( [A-Za-z]+)*"
                            onChange={(e)=>{const value=e.target.value;
                            if(!/^[A-Za-z ]*$/.test(value)){
                                return;
                            }
                            setFormData({...formData,name:e.target.value});
                        }} 
                            placeholder="Enter your full name"
                             className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 ring-blue-500"></input>
                        </div>
                        
                        <div className="flex flex-col mt-10 mx-10 gap-2">
                            <label className="text-gray-800 font-medium">Mobile Number </label>
                            <input type="text"  placeholder="Enter your Mobile Number"  value={mobileNumber} readOnly className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 ring-blue-500"></input>
                        </div>

                        <div className="flex flex-col mt-10 mx-10 gap-2">
                            <label className="text-gray-800 font-medium">Email</label>
                            <input type="email" placeholder="Enter your Email Address" value={formData.email} onChange={(e)=>{setFormData({...formData,email:e.target.value})}} className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 ring-blue-500"></input>
                        </div>

                        <div className="flex flex-col mt-10 mx-10 gap-2">
                            <label className="text-gray-800 font-medium">AADHAR / Identity Information</label>
                            <input
                                type="text"
                                required
                                maxLength={12}
                                minLength={12}
                                pattern="[0-9]{12}"
                                className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 ring-blue-500"
                                value={formData.identity}
                                onChange={(e) => {
                                    const value = e.target.value;

                                    if (!/^[0-9]*$/.test(value)) {
                                        return;
                                    }

                                    setFormData({
                                        ...formData,
                                        identity: value
                                    });
                                }}
                            />                        
                        </div>
                        <div className="flex flex-col mt-10 mx-10 gap-2">
                            <label className="text-gray-800 font-medium">House Number</label>
                            <input
                                type="text"
                                pattern="[A-Za-z0-9/-]+"
                                required
                                placeholder="Enter your house No. "
                                value={formData.houseNumber}
                                onChange={(e) => {
                                    const value = e.target.value;

                                    if (!/^[0-9A-Za-z/-]*$/.test(value)) {
                                        return;
                                    }

                                    setFormData({
                                        ...formData,
                                        houseNumber: value
                                    });
                                }}
                                className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 ring-blue-500"
                            />
                        </div>
                </div>
                </Accordion>


                <Accordion title='ADDRESS INFORMATION'>
                <div className=" bg-white shadow-2xl rounded-2xl max-w-[400px] md:max-w-[850px] p-3 mt-10 mx-auto pb-10">
                    
                        <h2 className="text-center text-xl md:text-3xl text-blue-800 font-bold">Address Information</h2>
                       
                        <div className="flex flex-col mt-10 mx-10 gap-2">
                            <label className="text-gray-800 font-medium">House Name</label>
                            <input type="text" required value={formData.houseName} 
                            pattern="[A-Za-z]+( [A-Za-z]+)*"
                            onChange={(e)=>{
                                const value=e.target.value;
                                if(!/^[A-Za-z ]*$/.test(value)){
                                    return;
                                }
                                setFormData({...formData,houseName:e.target.value})}} 

                            placeholder="Enter your House Name" 
                            className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 ring-blue-500"></input>
                        </div>
                        
                    <div>
                    <label className="block text-gray-700 font-semibold mt-8 ml-10">
                        പ്രദേശം <span className="text-red-500">*</span>
                    </label>

                    <select required value={formData.area} onChange={(e)=>{setFormData({...formData,area:e.target.value})}} className="border-2 border-blue-100 px-3 py-2 rounded-xl  focus:outline-none focus:ring-1 focus:ring-blue-500 w-100 ml-10">
                        <option value="">പ്രദേശം തിരഞ്ഞെടുക്കുക</option>
                        <option value="പൂളക്കൽ">പൂളക്കൽ </option>
                        <option value="നെല്ലിക്കലടി">നെല്ലിക്കലടി</option>
                        <option value="പുത്തനഴി">പുത്തനഴി</option>
                        <option value="കോഴിയാരംക്കുന്ന്">കോഴിയാരംക്കുന്ന്</option>
                        <option value="കളത്തിൽക്കുന്ന്">കളത്തിൽക്കുന്ന് </option>
                        <option value="കൂമ്മുള്ളി">കൂമ്മുള്ളി</option>
                        <option value="വീട്ടിക്കുന്ന്">വീട്ടിക്കുന്ന്</option>
                        <option value="വേളിപ്പാടം">വേളിപ്പാടം</option>
                        <option value="ഭാവനംപറമ്പ്">ഭാവനംപറമ്പ്</option>
                        <option value="ചാമാക്കുന്ന്">ചാമാക്കുന്ന് </option>
                    </select>
                    </div>

                        <div className="flex flex-col mt-5 mx-10 gap-2">
                            <label className="text-gray-800 font-medium">Full address</label>
                        <textarea
                            placeholder="Enter Full Address"
                            required
                            value={formData.address}
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    address: e.target.value
                                });
                            }}
                            className="w-full rounded-xl border max-h-[200px] border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 ring-blue-500">
                            </textarea>                        
                        </div>

                        <div className="flex flex-col mt-10 mx-10 gap-2">
                            <label className="text-gray-800 font-medium">Pin Number</label>
                            <input type="text"
                            inputMode="numeric"
                             required
                             pattern="[0-9]{6}"
                              value={formData.pin}
                               onChange={(e)=>{
                                const value = e.target.value;
                                if(!/^[0-9]*$/.test(value)){
                                    return;
                                }
                                setFormData({...formData,pin:e.target.value})}}
                                maxLength="6"
                                minLength={6}
                                 placeholder="Enter your PIN number"
                                  className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 ring-blue-500"></input>
                        </div>

                </div>
                </Accordion>
                <Accordion title='DOCUMENTS'>
                <div className=" bg-white shadow-2xl rounded-2xl max-w-[400px] md:max-w-[850px] p-3 mt-10 mx-auto pb-10">
                    
                        <h2 className="text-center text-xl md:text-3xl text-blue-800 font-bold">Documents</h2>
                       
                        <div className="flex flex-col mt-10 mx-10 gap-2">
                            <label className="text-gray-800 font-medium">ID Proof</label>
                            <input
                                type="file"
                                accept=".pdf,.jpg,.jpeg,.png"
                                required
                                onChange={(e) => handleFileChange(e, "idProof")}
                                className="rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 ring-blue-500"
                            />                    
                        </div>
                        <div className="flex flex-col mt-10 mx-10 gap-2">
                            <label className="text-gray-800 font-medium">Address Proof</label>
                            <input
                                type="file"
                                accept=".pdf,.jpg,.jpeg,.png"
                                required
                                onChange={(e) => handleFileChange(e, "addressProof")}
                                className="rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 ring-blue-500"
                            />                        
                        </div>
                        <div className="flex flex-col mt-10 mx-10 gap-2">
                            <label className="text-gray-800 font-medium">Ownership Proof</label>
                            <input
                                type="file"
                                accept=".pdf,.jpg,.jpeg,.png"
                                required
                                onChange={(e) => handleFileChange(e, "ownershipProof")}
                                className="rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 ring-blue-500"
                            />                       
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


