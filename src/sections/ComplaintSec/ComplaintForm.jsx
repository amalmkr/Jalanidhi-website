import { MdOutlineReportProblem } from "react-icons/md";
function ComplaintForm(){
    function handleClick(event){
         event.preventDefault();
        alert(`പരാതി വിജയകരമായി സമർപ്പിച്ചു...!!! .     
 നിങ്ങളുടെ പരാതിക്ക് ഉടൻ തന്നെ ആവശ്യമായ നടപടി സ്വീകരിക്കുന്നതാണ്.`)
         event.target.reset();
    }
    return(
        <>
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-6 md:p-10 my-10 ">

                {/* Heading */}
                <div className="flex items-center justify-center gap-3 mb-8">
                    <MdOutlineReportProblem className="text-4xl text-blue-600" />
                    <h2 className="text-xl md:text-3xl font-bold text-gray-800">
                    പരാതി സമർപ്പിക്കുക
                    </h2>
                </div>
                
                <p className='text-center text-xs font-extralight md:text-xl text-gray-600 mt-5 mb-5'>ജലവിതരണവുമായി ബന്ധപ്പെട്ട പരാതികൾ ഇവിടെ രജിസ്റ്റർ ചെയ്യാം </p>


                {/* User Form */}
                <form className="space-y-8" onSubmit={handleClick}>

                    
                    <div>
                    <label className="block text-gray-700 font-semibold mb-2 ">
                        Mobile Number <span className="text-red-500">*</span>
                    </label>

                    <input
                        type="tel"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" required
                    />
                    </div>


                    <div>
                    <label className="block text-gray-700 font-semibold mb-2 gap-2 items-center">
                        Consumer Number <span className="text-xs text-red-500 ">(ഉണ്ടെങ്കിൽ)</span>
                    </label>

                    <input
                        type="text"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    </div>
                        

                    <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                        പരാതി തരം <span className="text-red-500">*</span> 
                    </label>

                    <select required className="border-2 border-blue-100 px-3 py-2 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 w-full">
                        <option>ജലവിതരണ പ്രശ്നം</option>
                        <option>പൈപ്പ് ലൈൻ ചോർച്ച</option>
                        <option>മീറ്റർ സംബന്ധമായ പരാതി</option>
                        <option>കണക്ഷൻ സംബന്ധമായ പരാതി</option>
                        <option>ബിൽ സംബന്ധമായ പരാതി</option>
                        <option>വെള്ളത്തിന്റെ ഗുണനിലവാര പ്രശ്നം</option>
                        <option>മറ്റ് പരാതി</option>
                    </select>
                    </div>
                    <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                        പ്രദേശം <span className="text-red-500">*</span>
                    </label>

                    <select required className="border-2 border-blue-100 px-3 py-2 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 w-full">
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
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">സ്ഥലം / ലൊക്കേഷൻ <span className="text-red-500">*</span></label>
                        <input type="text" required className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">പരാതിയുടെ വിശദാംശങ്ങൾ <span className="text-red-500">*</span></label>
                        <textarea  required className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 max-h-[300px]"></textarea>
                    </div>
                    <div>
                        <label className="text-gray-700 font-semibold mb-2 mr-10">ചിത്രം ചേർക്കുക : </label>
                        <input type="file" accept="image/*" className="border border-gray-500 rounded-xl px-3 py-1 focus:outline-none focus:ring focus:ring-blue-500"/>
                    </div>

                    

                    {/* Button */}
                    <div className="pt-2 flex gap-5">
                    <button
                        type="submit"
                        className="w-full md:w-64 mx-auto block bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-bold py-3 rounded-lg"
                        
                    >
                        പരാതി സമർപ്പിക്കുക
                    </button>

                    </div>

                </form>

                </div >

        </>
    )
}

export default ComplaintForm;