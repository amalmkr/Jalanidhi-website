import { MdOutlineReportProblem } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ComplaintForm() {

    const [formData, setFormData] = useState({
        mobileNumber: "",
        consumerNumber: "",
        complaintType: "",
        area: "",
        location: "",
        complaintDetails: "",
        image: null,
    });

    const navigate = useNavigate()

    function handleClick(event) {
        event.preventDefault();

        const complaintID="JN-CMP-"+Date.now()

        const complaint={
            ...formData,
            complaintID:complaintID,
            status:"submitted"

        };

        const complaints = JSON.parse(localStorage.getItem("complaints")) || [];

        complaints.push(complaint);

        localStorage.setItem("complaints", JSON.stringify(complaints));

        console.log(formData);


        // Reset React state
        setFormData({
            mobileNumber: "",
            consumerNumber: "",
            complaintType: "",
            area: "",
            location: "",
            complaintDetails: "",
            image: null
        });
    
        navigate('/complaint-success',{
            state:{
                complaint:complaint
            }
        })

        
    }

    function handleFileChange(e) {
        const file = e.target.files[0];

        if (!file) {
            return;
        }

        const maxSize = 5 * 1024 * 1024;

        if (file.size > maxSize) {
            alert("Image size must be less than 5 MB");
            e.target.value = "";
            return;
        }

        setFormData(prev => ({
            ...prev,
            image: file
        }));
    }

    return (
        <>
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-6 md:p-10 my-10">

                {/* Heading */}
                <div className="flex items-center justify-center gap-3 mb-8">
                    <MdOutlineReportProblem className="text-4xl text-blue-600" />

                    <h2 className="text-xl md:text-3xl font-bold text-gray-800">
                        പരാതി സമർപ്പിക്കുക
                    </h2>
                </div>

                <p className="text-center text-xs font-extralight md:text-xl text-gray-600 mt-5 mb-5">
                    ജലവിതരണവുമായി ബന്ധപ്പെട്ട പരാതികൾ ഇവിടെ രജിസ്റ്റർ ചെയ്യാം
                </p>

                {/* Form */}
                <form
                    className="space-y-8"
                    onSubmit={handleClick}
                >

                    {/* Mobile Number */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                            Mobile Number{" "}
                            <span className="text-red-500">*</span>
                        </label>

                        <input
                            type="tel"
                            maxLength={10}
                            minLength={10}
                            required
                            pattern="[6-9][0-9]{9}"
                            value={formData.mobileNumber}
                            onChange={(e) => {
                                setFormData(prev => ({
                                    ...prev,
                                    mobileNumber: e.target.value
                                }));
                            }}
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Consumer Number */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                            Consumer Number{" "}
                            <span className="text-xs text-red-500">
                                (ഉണ്ടെങ്കിൽ)
                            </span>
                        </label>

                        <input
                            type="text"
                            value={formData.consumerNumber}
                            onChange={(e) => {
                                setFormData(prev => ({
                                    ...prev,
                                    consumerNumber: e.target.value
                                }));
                            }}
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Complaint Type */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                            പരാതി തരം{" "}
                            <span className="text-red-500">*</span>
                        </label>

                        <select
                            required
                            value={formData.complaintType}
                            onChange={(e) => {
                                setFormData(prev => ({
                                    ...prev,
                                    complaintType: e.target.value
                                }));
                            }}
                            className="border-2 border-blue-100 px-3 py-2 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                        >
                            <option value="">
                                പരാതി തരം തിരഞ്ഞെടുക്കുക
                            </option>

                            <option value="ജലവിതരണ പ്രശ്നം">
                                ജലവിതരണ പ്രശ്നം
                            </option>

                            <option value="പൈപ്പ് ലൈൻ ചോർച്ച">
                                പൈപ്പ് ലൈൻ ചോർച്ച
                            </option>

                            <option value="മീറ്റർ സംബന്ധമായ പരാതി">
                                മീറ്റർ സംബന്ധമായ പരാതി
                            </option>

                            <option value="കണക്ഷൻ സംബന്ധമായ പരാതി">
                                കണക്ഷൻ സംബന്ധമായ പരാതി
                            </option>

                            <option value="ബിൽ സംബന്ധമായ പരാതി">
                                ബിൽ സംബന്ധമായ പരാതി
                            </option>

                            <option value="വെള്ളത്തിന്റെ ഗുണനിലവാര പ്രശ്നം">
                                വെള്ളത്തിന്റെ ഗുണനിലവാര പ്രശ്നം
                            </option>

                            <option value="മറ്റ് പരാതി">
                                മറ്റ് പരാതി
                            </option>
                        </select>
                    </div>

                    {/* Area */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                            പ്രദേശം{" "}
                            <span className="text-red-500">*</span>
                        </label>

                        <select
                            required
                            value={formData.area}
                            onChange={(e) => {
                                setFormData(prev => ({
                                    ...prev,
                                    area: e.target.value
                                }));
                            }}
                            className="border-2 border-blue-100 px-3 py-2 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                        >
                            <option value="">
                                പ്രദേശം തിരഞ്ഞെടുക്കുക
                            </option>

                            <option value="പൂളക്കൽ">
                                പൂളക്കൽ
                            </option>

                            <option value="നെല്ലിക്കലടി">
                                നെല്ലിക്കലടി
                            </option>

                            <option value="പുത്തനഴി">
                                പുത്തനഴി
                            </option>

                            <option value="കോഴിയാരംക്കുന്ന്">
                                കോഴിയാരംക്കുന്ന്
                            </option>

                            <option value="കളത്തിൽക്കുന്ന്">
                                കളത്തിൽക്കുന്ന്
                            </option>

                            <option value="കൂമ്മുള്ളി">
                                കൂമ്മുള്ളി
                            </option>

                            <option value="വീട്ടിക്കുന്ന്">
                                വീട്ടിക്കുന്ന്
                            </option>

                            <option value="വേളിപ്പാടം">
                                വേളിപ്പാടം
                            </option>

                            <option value="ഭാവനംപറമ്പ്">
                                ഭാവനംപറമ്പ്
                            </option>

                            <option value="ചാമാക്കുന്ന്">
                                ചാമാക്കുന്ന്
                            </option>
                        </select>
                    </div>

                    {/* Location */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                            സ്ഥലം / ലൊക്കേഷൻ{" "}
                            <span className="text-red-500">*</span>
                        </label>

                        <input
                            type="text"
                            required
                            value={formData.location}
                            onChange={(e) => {
                                setFormData(prev => ({
                                    ...prev,
                                    location: e.target.value
                                }));
                            }}
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Complaint Details */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                            പരാതിയുടെ വിശദാംശങ്ങൾ{" "}
                            <span className="text-red-500">*</span>
                        </label>

                        <textarea
                            required
                            value={formData.complaintDetails}
                            onChange={(e) => {
                                setFormData(prev => ({
                                    ...prev,
                                    complaintDetails: e.target.value
                                }));
                            }}
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 max-h-[300px]"
                        ></textarea>
                    </div>

                    {/* Image */}
                    <div>
                        <label className="text-gray-700 font-semibold mb-2 mr-10">
                            ചിത്രം ചേർക്കുക :
                        </label>

                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="border border-gray-500 rounded-xl px-3 py-1 focus:outline-none focus:ring focus:ring-blue-500"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2 flex gap-5">
                        <button
                            type="submit"
                            className="w-full md:w-64 mx-auto block bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-bold py-3 rounded-lg"
                        >
                            പരാതി സമർപ്പിക്കുക
                        </button>
                    </div>

                </form>
            </div>
            <div className="mb-15 md:mx-50  rounded-2xl flex-col gap-5 p-5 mt-10 justify-center items-center bg-red-600/20 border-l-6 border-red-600">
                <h2 className=" text-2xl md:text-3xl text-center font-bold text-red-900">ഇതിനകം പരാതി നൽകിയോ?</h2>
                <p className="text-xs text-center mt-2 text-red-950 md:text-sm">നിങ്ങൾ നൽകിയ പരാതിയുടെ നില അറിയാൻ താഴെ കാണുന്ന ബട്ടൺ ക്ലിക്ക് ചെയ്യുക </p>
                <button onClick={()=>navigate('/complaint-status')} className="px-8 py-3 text-xl rounded-3xl hover:bg-red-700 bg-red-500 text-white font-bold block mx-auto mt-5  ">check status</button>
            </div>

        </>
    );
}

export default ComplaintForm;