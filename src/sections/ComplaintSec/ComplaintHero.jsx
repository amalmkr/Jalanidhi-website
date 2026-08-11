import CompHero from '../../assets/images/Complaints.jpeg'

function ComplaintHero(){

    return(
        <>
        <div className='relative'>
            <img src={CompHero} className='object-cover w-full h-[250px] md:h-[400px]'/>
            <div className='inset-0 bg-black/35 absolute'></div>
            <div className='flex inset-0 absolute justify-center items-center'>
                <h2 className='text-white font-extrabold text-4xl md:text-6xl'>പരാതികൾ </h2>
            </div>
        </div>
        </>
    )
}

export default ComplaintHero;