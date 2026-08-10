import QP from '../../assets/images/QP-hero.webp'

function QP_hero(){
return(
    <>
          <div className='relative'>
            <img src={QP} className='object-cover w-full h-[220px] md:h-[450px]'/>
            <div className="absolute inset-0 bg-black/40"></div>
            <div className='inset-0 flex justify-center items-center absolute'>
              <h1 className=' text-3xl md:text-5xl font-black text-white '>ബില്ല് അടക്കാം</h1>
            </div>
          </div>
        <div className='mt-10'>
              <div className="flex items-center gap-5 my-12">
                <hr className="flex-1 border-t-2 border-blue-300" />
    
                <h3 className="text-blue-600 text-xl md:text-3xl font-bold whitespace-nowrap">
                  വാട്ടർ ചാർജ്
                </h3>
    
                <hr className="flex-1 border-t-2 border-blue-300" />
              </div>
        </div>
    
    </>
)
}


export default QP_hero;