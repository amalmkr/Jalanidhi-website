import carousel_1 from "../../assets/images/carousel-1.jpg";
import carousel_2 from "../../assets/images/carousel-2.jpg";
import carousel_3 from "../../assets/images/carousel-3.jpg";
import carousel_4 from "../../assets/images/carousel-4.jpg";
import carousel_5 from "../../assets/images/carousel-5.jpg";
import carousel_6 from "../../assets/images/carousel-6.jpg";
import { useState,useEffect } from "react";

const  slides=[
    {image:carousel_1,
     title:"ഗ്രാമീണ ജനതയുടെ കുടിവെള്ളവും പരിസര ശുചിത്വവും ജലനിധിയുടെ പ്രഖ്യാപിത ലക്‌ഷ്യം"   
    
    },
    {image:carousel_2,
        title:"ഗ്രാമീണ ജനതയ്ക് ശുദ്ധമായ കുടിവെള്ളം ലഭ്യമാക്കുകജലനിധി പദ്ധതിയുടെ സമഗ്ര ലക്‌ഷ്യം"
    },
    {image:carousel_3,
        title:"ശുദ്ധമായ കുടിവെള്ളം എന്ന ഓരോ ഗ്രാമീണന്റെയുംസ്വപ്നമാണ് ജലനിധി പദ്ധതിയിലൂടെ യാഥാര്‍ത്ഥ്യമാകുന്നത്"
    },
    {image:carousel_4},
    {image:carousel_5},
    {image:carousel_6}
]

function Hero(){
    const [current,setCurrent]=useState(0);

    useEffect(()=>{
        const interval =setInterval(()=>{
            setCurrent((prev)=>(prev+1)%slides.length);

        },3000);
        return()=>clearInterval(interval);
    },[])

    return(
        <>
            <div className="w-full" id="hero">
                <div className="relative overflow-hidden">
                    <img src={slides[current].image} alt="carousel" className="w-full h-[300px] sm:h-[350px] md:h-[450px] lg:h-[600px] object-cover transition-all duration-700"/>
                {slides[current].title && (
                <div className="absolute top-1/2 right-10 -translate-y-1/2 text-white max-w-3xl md:text-[#379afd]">
                    <h2 className="sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-bold leading-snug md:leading-[1.4] lg:leading-[1.5] p-30 md:p-0 "   style={{WebkitTextStroke: "0.5px rgba(255,255,255,0.5)", textShadow: "2px 2px 6px rgba(0,0,0,0.5)",}}> 
                        {slides[current].title}
                    </h2>
                </div>
                )}
                </div>
                <div className="flex justify-center gap-3 mt-5">
                    {slides.map((_,index)=>(
                        <button key={index} onClick={()=>setCurrent(index)} className={`w-3 h-2 rounded-full transition-all duration-300 ${
                            current===index?"bg-blue-600 scale-125":"bg-gray-200 hover:bg-gray-600"
                        }`}>
                        </button>
                    ))}
                </div>
            </div>
        </>
    )
};

export default Hero;