
function NewConnectionForm(){

    return(
        <>
            <section className="bg-slate-100 pt-30 pb-20">       
                <form> 
                <div className=" bg-white shadow-2xl rounded-2xl max-w-[400px] md:max-w-[850px] p-3 mx-auto pb-10">
                    
                        <h2 className="text-center text-xl md:text-3xl text-blue-800 font-bold">User Information</h2>
                       
                        <div className="flex flex-col mt-10 mx-10 gap-2">
                            <label className="text-gray-800 font-medium">Name  </label>
                            <input type="text" placeholder="Enter your full name" className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 ring-blue-500"></input>
                        </div>
                        
                        <div className="flex flex-col mt-10 mx-10 gap-2">
                            <label className="text-gray-800 font-medium">Mobile Number </label>
                            <input type="text" placeholder="Enter your Mobile Number" className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 ring-blue-500"></input>
                        </div>

                        <div className="flex flex-col mt-10 mx-10 gap-2">
                            <label className="text-gray-800 font-medium">Email</label>
                            <input type="text" placeholder="Enter your full name" className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 ring-blue-500"></input>
                        </div>

                        <div className="flex flex-col mt-10 mx-10 gap-2">
                            <label className="text-gray-800 font-medium">AADHAR / Identity Information</label>
                            <input type="text" placeholder="Enter your full name" className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 ring-blue-500"></input>
                        </div>
                        <div className="flex flex-col mt-10 mx-10 gap-2">
                            <label className="text-gray-800 font-medium">House Number</label>
                            <input type="text" placeholder="Enter your house No. " className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 ring-blue-500"></input>
                        </div>
                </div>
                
                
                {/* <div className=" bg-white shadow-2xl rounded-2xl max-w-[400px] md:max-w-[850px] p-3 mt-10 mx-auto pb-10">
                    
                        <h2 className="text-center text-xl md:text-3xl text-blue-800 font-bold">User Information</h2>
                       
                        <div className="flex flex-col mt-10 mx-10 gap-2">
                            <label className="text-gray-800 font-medium">Name  </label>
                            <input type="text" placeholder="Enter your full name" className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 ring-blue-500"></input>
                        </div>
                        
                        <div className="flex flex-col mt-10 mx-10 gap-2">
                            <label className="text-gray-800 font-medium">Mobile Number </label>
                            <input type="text" placeholder="Enter your Mobile Number" className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 ring-blue-500"></input>
                        </div>

                        <div className="flex flex-col mt-10 mx-10 gap-2">
                            <label className="text-gray-800 font-medium">Email</label>
                            <input type="text" placeholder="Enter your full name" className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 ring-blue-500"></input>
                        </div>

                        <div className="flex flex-col mt-10 mx-10 gap-2">
                            <label className="text-gray-800 font-medium">AADHAR / Identity Information</label>
                            <input type="text" placeholder="Enter your full name" className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 ring-blue-500"></input>
                        </div>
                        <div className="flex flex-col mt-10 mx-10 gap-2">
                            <label className="text-gray-800 font-medium">House Number</label>
                            <input type="text" placeholder="Enter your house No. " className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 ring-blue-500"></input>
                        </div>
                </div> */}

                </form>
            </section>
        </>
    )
}

export default NewConnectionForm;


