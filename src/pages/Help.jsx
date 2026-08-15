import helpHero from '../assets/images/help-hero.jpg'

function Help(){

    return(
        <>
        <div className='relative'>
            <img src={helpHero} className='w-full h-[250px] md:h-[450px] object-cover'/>
            <div className='bg-black/40 absolute inset-0'></div>
            <div className='absolute inset-0 flex justify-center items-center'>
                <h2 className='text-5xl md:text-8xl text-white font-extrabold'>സഹായി </h2>
            </div>
        </div>
        <section>
            <h2 className='text-3xl text-center text-blue-800 font-bold mt-5'>നിങ്ങളുടെ സഹായി </h2>
        </section>
        </>
    )
}

export default Help;