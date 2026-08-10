import PayHis from '../../assets/images/payhistory.png'

function PaymentHistoryHero(){

    return(
        <>
        <div className="relative">
            <img src={PayHis} className='object-cover h-[250px] md:h-[350px] w-full'/>
            <div className='inset-0 absolute bg-black/40'></div>
            <div className='flex justify-center items-center absolute inset-0'>
                <h2 className='text-4xl md:text-6xl font-extrabold absolute text-white'>പണമടച്ച വിവരങ്ങൾ</h2>
            </div>
        </div>
            <h2 className='text-2xl md:text-3xl text-blue-800 font-bold text-center my-8'>Payment History</h2>
        </>
    )
}

export default PaymentHistoryHero;