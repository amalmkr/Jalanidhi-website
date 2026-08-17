import { useNavigate } from "react-router-dom";
import { useState,} from "react";
import { FaClock, FaTint, FaMapMarkerAlt, FaCalendarAlt, FaPhoneAlt } from "react-icons/fa";
import waterTime from "../assets/images/connection.webp";

const waterDistributionData = [
    {
        id: 1,
        area: "ഇരിങ്ങാട്ടിരി",
        morning: "6:00 AM - 8:00 AM",
        evening: "6:00 PM - 8:00 PM",
        days: "എല്ലാ ദിവസവും",
    },
    {
        id: 2,
        area: "പ്രദേശം 2",
        morning: "6:30 AM - 8:30 AM",
        evening: "6:30 PM - 8:30 PM",
        days: "എല്ലാ ദിവസവും",
    },
    {
        id: 3,
        area: "പ്രദേശം 3",
        morning: "7:00 AM - 9:00 AM",
        evening: "7:00 PM - 9:00 PM",
        days: "എല്ലാ ദിവസവും",
    },
    {
        id: 4,
        area: "പ്രദേശം 4",
        morning: "5:30 AM - 7:30 AM",
        evening: "5:30 PM - 7:30 PM",
        days: "തിങ്കൾ - ശനി",
    },
    {
        id: 5,
        area: "പ്രദേശം 5",
        morning: "6:00 AM - 8:00 AM",
        evening: "6:00 PM - 8:00 PM",
        days: "എല്ലാ ദിവസവും",
    },
    {
        id: 6,
        area: "പ്രദേശം 6",
        morning: "7:00 AM - 9:00 AM",
        evening: "7:00 PM - 9:00 PM",
        days: "എല്ലാ ദിവസവും",
    },
];

function WaterTimePage() {
    const [selectedArea, setSelectedArea] = useState(
        waterDistributionData[0]
    );
    
    const navigate = useNavigate();

    return (
        <div className="bg-slate-50 min-h-screen">

            {/* ================= HERO ================= */}
            <section className="relative">

                <img
                    src={waterTime}
                    alt="Water distribution"
                    className="w-full h-[250px] md:h-[400px] object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-blue-950/60"></div>

                {/* Hero Content */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">

                    <div className="text-white text-4xl md:text-5xl mb-4">
                        <FaClock className="text-xl"/>
                    </div>

                    <h1 className="text-white font-extrabold text-4xl md:text-6xl">
                        ജല വിതരണസമയം
                    </h1>

                    <p className="text-white/90 text-base md:text-xl mt-4 max-w-2xl">
                        നിങ്ങളുടെ പ്രദേശത്തെ ജല വിതരണ സമയവും
                        വിവരങ്ങളും ഇവിടെ പരിശോധിക്കാം
                    </p>

                </div>
            </section>


            {/* ================= INTRO ================= */}
            <section className="max-w-6xl mx-auto px-5 py-12">

                <div className="text-center max-w-3xl mx-auto">

                    <div className="flex justify-center mb-4">
                        <FaTint className="text-blue-700 text-4xl" />
                    </div>

                    <h2 className="text-2xl md:text-4xl font-extrabold text-blue-800">
                        ജല വിതരണ വിവരങ്ങൾ
                    </h2>

                    <p className="text-gray-600 mt-4 leading-7">
                        ഓരോ പ്രദേശത്തെയും ജല വിതരണ സമയവും ദിവസവും
                        ഇവിടെ പരിശോധിക്കാം. നിങ്ങളുടെ പ്രദേശം തിരഞ്ഞെടുക്കുക,
                        അതനുസരിച്ചുള്ള ജല വിതരണ സമയം താഴെ കാണാം.
                    </p>

                </div>

            </section>


            {/* ================= AREA SELECTOR ================= */}
            <section className="max-w-5xl mx-auto px-5 pb-12">

                <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">

                    <div className="flex items-center gap-3 mb-5">

                        <FaMapMarkerAlt className="text-blue-700 text-2xl" />

                        <h2 className="text-xl md:text-2xl font-bold text-blue-800">
                            നിങ്ങളുടെ പ്രദേശം തിരഞ്ഞെടുക്കുക
                        </h2>

                    </div>

                    <select
                        value={selectedArea.id}
                        onChange={(e) => {
                            const area = waterDistributionData.find(
                                (item) => item.id === Number(e.target.value)
                            );

                            setSelectedArea(area);
                        }}
                        className="w-full border border-gray-300 rounded-xl px-4 py-4
                        text-gray-700 bg-white outline-none
                        focus:ring-2 focus:ring-blue-500"
                    >

                        {waterDistributionData.map((area) => (
                            <option key={area.id} value={area.id}>
                                {area.area}
                            </option>
                        ))}

                    </select>

                </div>

            </section>


            {/* ================= SELECTED AREA ================= */}
            <section className="max-w-5xl mx-auto px-5 pb-14">

                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

                    {/* Card Header */}
                    <div className="bg-blue-700 text-white p-6">

                        <div className="flex items-center gap-3">

                            <FaMapMarkerAlt className="text-2xl" />

                            <div>
                                <p className="text-blue-100 text-sm">
                                    തിരഞ്ഞെടുത്ത പ്രദേശം
                                </p>

                                <h2 className="text-2xl md:text-3xl font-bold">
                                    {selectedArea.area}
                                </h2>
                            </div>

                        </div>

                    </div>


                    {/* Timing */}
                    <div className="p-6 md:p-8">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Morning */}
                            <div className="border border-blue-100 bg-blue-50 rounded-2xl p-6">

                                <div className="flex items-center gap-3 mb-4">

                                    <div className="w-12 h-12 rounded-full bg-blue-700 text-white flex justify-center items-center">
                                        <FaClock className="text-4xl"/>
                                    </div>

                                    <h3 className="text-xl font-bold text-blue-800">
                                        രാവിലെ
                                    </h3>

                                </div>

                                <p className="text-2xl font-extrabold text-gray-800">
                                    {selectedArea.morning}
                                </p>

                            </div>


                            {/* Evening */}
                            <div className="border border-blue-100 bg-blue-50 rounded-2xl p-6">

                                <div className="flex items-center gap-3 mb-4">

                                    <div className="w-12 h-12 rounded-full bg-blue-700 text-white flex justify-center items-center">
                                        <FaClock className="text-4xl"/>
                                    </div>

                                    <h3 className="text-xl font-bold text-blue-800">
                                        വൈകുന്നേരം
                                    </h3>

                                </div>

                                <p className="text-2xl font-extrabold text-gray-800">
                                    {selectedArea.evening}
                                </p>

                            </div>

                        </div>


                        {/* Days */}
                        <div className="mt-6 flex items-center gap-4 bg-gray-50 rounded-xl p-5">

                            <FaCalendarAlt className="text-blue-700 text-2xl" />

                            <div>

                                <p className="text-sm text-gray-500">
                                    വിതരണ ദിവസങ്ങൾ
                                </p>

                                <p className="font-bold text-gray-800">
                                    {selectedArea.days}
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= ALL AREAS ================= */}
            <section className="bg-blue-50 py-14">

                <div className="max-w-6xl mx-auto px-5">

                    <div className="text-center mb-10">

                        <h2 className="text-2xl md:text-4xl font-extrabold text-blue-800">
                            പ്രദേശം തിരിച്ചുള്ള ജല വിതരണ സമയം
                        </h2>

                        <p className="text-gray-600 mt-3">
                            എല്ലാ പ്രദേശങ്ങളുടെയും വിതരണ സമയങ്ങൾ
                        </p>

                    </div>


                    {/* Desktop Table */}
                    <div className="hidden md:block bg-white rounded-2xl shadow-md overflow-hidden">

                        <table className="w-full">

                            <thead className="bg-blue-700 text-white">

                                <tr>

                                    <th className="px-6 py-4 text-left">
                                        പ്രദേശം
                                    </th>

                                    <th className="px-6 py-4 text-left">
                                        രാവിലെ
                                    </th>

                                    <th className="px-6 py-4 text-left">
                                        വൈകുന്നേരം
                                    </th>

                                    <th className="px-6 py-4 text-left">
                                        ദിവസങ്ങൾ
                                    </th>

                                </tr>

                            </thead>

                            <tbody>

                                {waterDistributionData.map((area) => (

                                    <tr
                                        key={area.id}
                                        className="border-b hover:bg-blue-50 transition"
                                    >

                                        <td className="px-6 py-5 font-bold text-blue-800">
                                            {area.area}
                                        </td>

                                        <td className="px-6 py-5">
                                            {area.morning}
                                        </td>

                                        <td className="px-6 py-5">
                                            {area.evening}
                                        </td>

                                        <td className="px-6 py-5">
                                            {area.days}
                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>


                    {/* Mobile Cards */}
                    <div className="md:hidden space-y-5">

                        {waterDistributionData.map((area) => (

                            <div
                                key={area.id}
                                className="bg-white rounded-2xl shadow-md p-5"
                            >

                                <div className="flex items-center gap-3 mb-5">

                                    <FaMapMarkerAlt className="text-blue-700" />

                                    <h3 className="font-bold text-xl text-blue-800">
                                        {area.area}
                                    </h3>

                                </div>


                                <div className="space-y-4">

                                    <div className="flex justify-between">

                                        <span className="text-gray-500">
                                            🌅 രാവിലെ
                                        </span>

                                        <span className="font-bold">
                                            {area.morning}
                                        </span>

                                    </div>


                                    <div className="flex justify-between">

                                        <span className="text-gray-500">
                                            🌙 വൈകുന്നേരം
                                        </span>

                                        <span className="font-bold">
                                            {area.evening}
                                        </span>

                                    </div>


                                    <div className="flex justify-between">

                                        <span className="text-gray-500">
                                            📅 ദിവസങ്ങൾ
                                        </span>

                                        <span className="font-bold">
                                            {area.days}
                                        </span>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* ================= NOTICE ================= */}
            <section className="max-w-6xl mx-auto px-5 py-14">

                <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-xl p-6">

                    <h2 className="font-bold text-xl text-yellow-800 mb-3">
                        ⚠️ പ്രധാന അറിയിപ്പ്
                    </h2>

                    <p className="text-gray-700 leading-7">
                        അറ്റകുറ്റപ്പണികൾ, വൈദ്യുതി തടസ്സം, ജലലഭ്യത,
                        അടിയന്തര സാഹചര്യങ്ങൾ എന്നിവ കാരണം ജല വിതരണ
                        സമയത്തിൽ മാറ്റം വരാം. പുതിയ അറിയിപ്പുകൾക്കായി
                        അറിയിപ്പ് വിഭാഗം പരിശോധിക്കുക.
                    </p>

                </div>

            </section>


            {/* ================= HELP ================= */}
            <section className="bg-blue-700 text-white py-14">

                <div className="max-w-5xl mx-auto px-5 text-center">

                    <div className="flex justify-center mb-5">
                        <FaPhoneAlt className="text-4xl" />
                    </div>

                    <h2 className="text-2xl md:text-4xl font-extrabold">
                        സഹായം ആവശ്യമുണ്ടോ?
                    </h2>

                    <p className="mt-4 text-blue-100">
                        ജല വിതരണവുമായി ബന്ധപ്പെട്ട പ്രശ്നങ്ങൾ
                        അറിയിക്കാനോ പരാതി നൽകാനോ ഞങ്ങളെ ബന്ധപ്പെടുക.
                    </p>


                    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">

                        <button
                            className="bg-white text-blue-700 font-bold
                            px-7 py-3 rounded-xl hover:bg-blue-50 transition"
                            onClick={()=>navigate('/complaint')}
                        >
                            പരാതി നൽകുക
                        </button>

                        <button
                            className="border border-white text-white font-bold
                            px-7 py-3 rounded-xl hover:bg-white/10 transition"
                            onClick={()=>navigate('/announcement')}
                        >
                            അറിയിപ്പുകൾ കാണുക
                        </button>

                    </div>

                </div>

            </section>

        </div>
    );
}

export default WaterTimePage;