import helpHero from '../assets/images/help-hero.jpg'
import { FaPhone, FaCircleInfo } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { FaCreditCard, FaWater, FaMagnifyingGlass, FaTriangleExclamation } from "react-icons/fa6";
import { FaSearch, FaSearchengin, FaSearchMinus } from 'react-icons/fa';


function Help() {

    return (
        <>
            <div className='relative'>
                <img
                    src={helpHero}
                    alt='Jalanidhi Help'
                    className='w-full h-[250px] md:h-[450px] object-cover'
                />

                <div className='bg-black/40 absolute inset-0'></div>

                <div className='absolute inset-0 flex justify-center items-center'>
                    <h2 className='text-5xl md:text-8xl text-white font-extrabold'>
                        സഹായി
                    </h2>
                </div>
            </div>


            <section className='bg-gradient-to-b from-blue-100 to-white pt-5 pb-12'>

                {/* Section Heading */}
                <h2 className='text-3xl md:text-4xl text-center text-blue-800 font-bold mt-5'>
                    നിങ്ങളുടെ സഹായി
                </h2>

                {/* Introduction */}
                <p className='text-center text-gray-600 max-w-3xl mx-auto mt-4 px-5 leading-7'>
                    ജലനിധി സേവനങ്ങൾ എളുപ്പത്തിൽ ഉപയോഗിക്കുന്നതിനുള്ള
                    വീഡിയോ മാർഗ്ഗനിർദ്ദേശങ്ങൾ ഇവിടെ കാണാം.
                </p>


                <div className='bg-white max-w-[1000px] mx-auto rounded-2xl mt-10 p-6 md:p-10 shadow-md hover:shadow-xl transition-all duration-300'>

                    <div className='flex flex-col md:flex-row justify-center items-center gap-4'>

                        <FaCreditCard className='text-4xl text-blue-500' />

                        <h2 className='text-center text-2xl md:text-3xl font-extrabold text-blue-700'>
                            ബിൽ എങ്ങനെ അടയ്ക്കാം ?
                        </h2>

                    </div>

                    {/* Video Placeholder */}
                    <div className='mt-8 aspect-video bg-gray-100 rounded-xl flex flex-col justify-center items-center border-2 border-dashed border-gray-300'>

                        <div className='text-5xl text-gray-300 mb-3'>
                            ▶
                        </div>

                        <p className='text-gray-400 text-lg font-medium'>
                            വീഡിയോ ഉടൻ ലഭ്യമാകും
                        </p>

                    </div>

                </div>


                <div className='bg-white max-w-[1000px] mx-auto rounded-2xl mt-10 p-6 md:p-10 shadow-md hover:shadow-xl transition-all duration-300'>

                    <div className='flex flex-col md:flex-row justify-center items-center gap-4'>

                        <FaWater className='text-4xl text-blue-500' />

                        <h2 className='text-center text-2xl md:text-3xl font-extrabold text-blue-700'>
                            പുതിയ കണക്ഷൻ എങ്ങനെ എടുക്കാം ?
                        </h2>

                    </div>

                    {/* Video Placeholder */}
                    <div className='mt-8 aspect-video bg-gray-100 rounded-xl flex flex-col justify-center items-center border-2 border-dashed border-gray-300'>

                        <div className='text-5xl text-gray-300 mb-3'>
                            ▶
                        </div>

                        <p className='text-gray-400 text-lg font-medium'>
                            വീഡിയോ ഉടൻ ലഭ്യമാകും
                        </p>

                    </div>

                </div>


                <div className='bg-white max-w-[1000px] mx-auto rounded-2xl mt-10 p-6 md:p-10 shadow-md hover:shadow-xl transition-all duration-300'>

                    <div className='flex flex-col md:flex-row justify-center items-center gap-4'>

                        <FaMagnifyingGlass className='text-4xl text-blue-500' />

                        <h2 className='text-center text-2xl md:text-3xl font-extrabold text-blue-700'>
                            കണക്ഷൻ നില എങ്ങനെ പരിശോധിക്കാം ?
                        </h2>

                    </div>

                    {/* Video Placeholder */}
                    <div className='mt-8 aspect-video bg-gray-100 rounded-xl flex flex-col justify-center items-center border-2 border-dashed border-gray-300'>

                        <div className='text-5xl text-gray-300 mb-3'>
                            ▶
                        </div>

                        <p className='text-gray-400 text-lg font-medium'>
                            വീഡിയോ ഉടൻ ലഭ്യമാകും
                        </p>

                    </div>

                </div>


                <div className='bg-white max-w-[1000px] mx-auto rounded-2xl mt-10 p-6 md:p-10 shadow-md hover:shadow-xl transition-all duration-300'>

                    <div className='flex flex-col md:flex-row justify-center items-center gap-4'>

                        <FaTriangleExclamation className='text-4xl text-blue-500' />

                        <h2 className='text-center text-2xl md:text-3xl font-extrabold text-blue-700'>
                            എങ്ങനെ പരാതിപ്പെടാം ?
                        </h2>

                    </div>

                    {/* Video Placeholder */}
                    <div className='mt-8 aspect-video bg-gray-100 rounded-xl flex flex-col justify-center items-center border-2 border-dashed border-gray-300'>

                        <div className='text-5xl text-gray-300 mb-3'>
                            ▶
                        </div>

                        <p className='text-gray-400 text-lg font-medium'>
                            വീഡിയോ ഉടൻ ലഭ്യമാകും
                        </p>

                    </div>

                </div>
                <div className='bg-white max-w-[1000px] mx-auto rounded-2xl mt-10 p-6 md:p-10 shadow-md hover:shadow-xl transition-all duration-300'>

                    <div className='flex flex-col md:flex-row justify-center items-center gap-4'>

                        <FaSearchMinus className='text-4xl text-blue-500' />

                        <h2 className='text-center text-1xl md:text-2xl font-bold text-blue-700'>
                            നിങ്ങൾ നൽകിയ പരാതിയുടെ നില  എങ്ങനെ പരിശോധിക്കാം ?
                        </h2>

                    </div>

                    {/* Video Placeholder */}
                    <div className='mt-8 aspect-video bg-gray-100 rounded-xl flex flex-col justify-center items-center border-2 border-dashed border-gray-300'>

                        <div className='text-5xl text-gray-300 mb-3'>
                            ▶
                        </div>

                        <p className='text-gray-400 text-lg font-medium'>
                            വീഡിയോ ഉടൻ ലഭ്യമാകും
                        </p>

                    </div>

                </div>


                <div className='max-w-[1100px] mx-auto mt-14 px-5'>

                    <div className='bg-blue-500/15 rounded-2xl p-8 md:p-10 shadow-lg'>

                        {/* Contact Heading */}
                        <div className='text-center mb-8'>

                            <FaCircleInfo className='text-5xl text-blue-500 mx-auto mb-4' />

                            <h2 className='text-2xl md:text-3xl font-extrabold text-blue-800'>
                                ഇനിയും സഹായം ആവശ്യമുണ്ടോ?
                            </h2>

                            <p className='text-gray-600 mt-3'>
                                ഞങ്ങളുടെ സഹായകേന്ദ്രവുമായി ബന്ധപ്പെടുക.
                            </p>

                        </div>


                        {/* Contact Details */}
                        <div className='flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16'>

                            {/* Phone */}
                            <div className='flex justify-center items-center gap-4'>

                                <FaPhone className='text-blue-500 text-2xl md:text-3xl' />

                                <div>
                                    <p className='text-sm text-gray-500'>
                                        ഫോൺ
                                    </p>

                                    <p className='text-blue-800 text-lg md:text-xl font-bold'>
                                        9088585778
                                    </p>
                                </div>

                            </div>


                            {/* Email */}
                            <div className='flex justify-center items-center gap-4'>

                                <TfiEmail className='text-blue-500 text-3xl' />

                                <div>
                                    <p className='text-sm text-gray-500'>
                                        ഇമെയിൽ
                                    </p>

                                    <p className='text-blue-800 text-lg md:text-xl font-bold'>
                                        info@gmail.com
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </>
    );
}

export default Help;