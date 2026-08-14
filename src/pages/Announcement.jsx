import AnnouncePic from '../assets/images/announcement.jpeg';
import { GrAnnounce } from "react-icons/gr";

function Announcemnt() {
    const announcement = [
        {
            date: 14,
            month: 'AUG',
            year: 2026,
            title: "വാട്ടർ ബില്ല് കൃത്യസമയത്ത് അടയ്ക്കുക",
            description: "ഉപയോക്താക്കൾ ബില്ല് കൃത്യസമയത്ത് അടക്കണമെന്ന് അറിയിക്കുന്നു",
            category: "ബിൽ"
        },
        {
            date: 10,
            month: 'AUG',
            year: 2026,
            title: "അറ്റകുറ്റപ്പണികൾ നടക്കുന്നതിനാൽ ജലവിതരണം തടസ്സപ്പെടും",
            description: "അറ്റകുറ്റപ്പണികളുടെ ഭാഗമായി ചില പ്രദേശങ്ങളിൽ താൽക്കാലികമായി ജലവിതരണം തടസ്സപ്പെടുന്നതാണ്. ഉപഭോക്താക്കൾ സഹകരിക്കണമെന്ന് അഭ്യർത്ഥിക്കുന്നു.",
            category: "സേവനം"
        },
        {
            date: 5,
            month: 'AUG',
            year: 2026,
            title: "വെള്ളം പാഴാക്കാതെ ഉപയോഗിക്കുക",
            description: "ജലത്തിന്റെ ലഭ്യത ഉറപ്പാക്കുന്നതിനായി ആവശ്യത്തിന് മാത്രം വെള്ളം ഉപയോഗിക്കുകയും വെള്ളം പാഴാക്കുന്നത് ഒഴിവാക്കുകയും ചെയ്യുക.",
            category: "ജാഗ്രത"
        },
        {
            date: 1,
            month: 'AUG',
            year: 2026,
            title: "പരാതികൾ ഓൺലൈനായി സമർപ്പിക്കാം",
            description: "ജലവിതരണം, ബിൽ, മീറ്റർ തുടങ്ങിയ സേവനങ്ങളുമായി ബന്ധപ്പെട്ട പരാതികൾ വെബ്സൈറ്റിലൂടെ എളുപ്പത്തിൽ സമർപ്പിക്കാം.",
            category: "പൊതുഅറിയിപ്പ്"
        },
    ]

    return (
        <>
            {/* Hero */}
            <div className="relative">
                <img
                    src={AnnouncePic}
                    className="w-full h-[250px] md:h-[450px] object-cover"
                />

                <div className="absolute inset-0 bg-black/35"></div>

                <div className="absolute inset-0 flex justify-center items-center">
                    <h2 className="text-white font-bold text-4xl md:text-6xl">
                        അറിയിപ്പ്
                    </h2>
                </div>
            </div>

            {/* Announcements */}
            <section className="bg-gradient-to-b from-blue-50 to-white pt-5 pb-16">

                <div className='flex gap-5 justify-center items-center'>
                    <span className='text-5xl text-blue-800 '><GrAnnounce/></span>

                    <h2 className="text-center text-2xl md:text-4xl font-extrabold text-blue-800">
                        ഏറ്റവും പുതിയ അറിയിപ്പുകൾ 
                    </h2>
                </div>

                <div className="flex flex-col  gap-6  mt-12 md:mt-16 mx-4 sm:mx-6 lg:mx-10">

                    {announcement.map((announcement, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl 
                            hover:-translate-y-2 transition-all duration-300 
                            p-5 sm:p-6 md:p-7"
                        >

                            <div className="flex gap-4 items-start">

                                {/* Date */}
                                <div
                                    className="p-3 sm:p-4 md:p-5 
                                    bg-blue-500 rounded-2xl shrink-0 
                                    text-center min-w-[70px] sm:min-w-[80px]"
                                >
                                    <p className="text-white font-extrabold text-lg sm:text-xl">
                                        {announcement.date}
                                    </p>

                                    <p className="text-white text-xs sm:text-sm font-semibold">
                                        {announcement.month}
                                    </p>

                                    <p className="text-white text-xs sm:text-sm">
                                        {announcement.year}
                                    </p>
                                </div>

                                {/* Content */}
                                <div className="min-w-0 flex-1">

                                    <div
                                        className="flex flex-col sm:flex-row 
                                        sm:justify-between sm:items-start gap-2"
                                    >

                                        <h4
                                            className="text-blue-800 font-bold 
                                            text-base sm:text-lg leading-6"
                                        >
                                            {announcement.title}
                                        </h4>

                                        {/* Category */}
                                        <span
                                            className="self-start 
                                            bg-red-100 text-red-700 
                                            px-3 py-1 rounded-full 
                                            text-xs font-semibold shrink-0"
                                        >
                                            {announcement.category}
                                        </span>

                                    </div>

                                    <p
                                        className="text-gray-500 text-xs sm:text-sm 
                                        leading-8 sm:leading-6 mt-2"
                                    >
                                        {announcement.description}
                                    </p>

                                </div>

                            </div>

                        </div>
                    ))}

                </div>

            </section>
        </>
    )
}

export default Announcemnt;