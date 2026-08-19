import { IoPeople } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { IoTimeOutline } from "react-icons/io5";


function NewConnectionCard(){

    return(
        <>
        <div className="bg-slate-100">
            <h2 className="text-blue-800 border-b-0 border-blue-800 text-2xl md:text-3xl text-center font-bold pt-10">അപേക്ഷിക്കുന്നതിന് മുമ്പ്  അറിയേണ്ടത് </h2>
            <div className="flex-row md:flex gap-5 px-5 ">
               
                <div className="rounded-2xl shadow-2xl bg-white max-w-[450px]  py-10 mt-10">
                    <div className="flex gap-5 justify-center items-center">
                        <IoPeople className="text-blue-800 text-3xl"/>
                        <h5 className="text-blue-800 text-center  font-bold">ആർക്ക്  അപേക്ഷിക്കാം ?</h5>
                    </div>
                    <p className="px-16 text-gray-600 text-left  mt-3 leading-7 text-sm ">ഗൃഹോപയോഗത്തിനായി കുടിവെള്ള കണക്ഷൻ ആവശ്യമായ വീടുകൾക്ക് അപേക്ഷിക്കാം </p>
                </div>
                <div className="rounded-2xl shadow-2xl bg-white max-w-[450px]  py-10 px-2 mt-10">
                    <div className="flex gap-5 justify-center items-center">
                        <IoDocumentTextOutline className="text-blue-800 text-3xl md:text-6xl"/>
                        <h5 className="text-blue-800 text-left font-bold">ആവശ്യമായ ഡോക്യുമെന്റുകൾ</h5>
                    </div>
                        <ul className="list-disc text-gray-600 pl-8 mt-3 leading-7 text-sm">
                            <li>തിരിച്ചറിയൽ രേഖ</li>
                            <li>വിലാസ തെളിവ്</li>
                            <li>വീടിന്റെ ഉടമസ്ഥാവകാശം / താമസം തെളിവ്</li>
                        </ul>
                </div>
                <div className="rounded-2xl shadow-2xl bg-white max-w-[450px]  py-10 mt-10">
                    <div className="flex gap-5 justify-center items-center">
                        <FaIndianRupeeSign className="text-blue-800 text-3xl"/>
                        <h5 className="text-blue-800 text-center  font-bold">കുറഞ്ഞ ചാർജ് </h5>
                    </div>
                    <p className="px-16 text-gray-600 text-left  mt-3 leading-7 text-sm">ഈ നിലയിൽ കണക്ഷൻ കുറഞ്ഞത് 100/- ഈടാക്കുന്നത് </p>
                </div>
                <div className="rounded-2xl shadow-2xl bg-white max-w-[450px]  py-10 mt-10">
                    <div className="flex gap-5 justify-center items-center">
                        <IoTimeOutline className="text-blue-800 text-3xl"/>
                        <h5 className="text-blue-800 text-center font-bold">അപേക്ഷ പ്രോസസിംഗ്</h5>
                    </div>
                    <p className="px-16 text-gray-600 text-left text-sm mt-3 leading-7"> അപേക്ഷ സമർപ്പിച്ച ശേഷം പരിശോധന പൂർത്തിയായാൽ നിങ്ങളുമായി ബന്ധപ്പെടും</p>
                </div>

            </div>
        </div>

        </>
    )
}

export default NewConnectionCard;