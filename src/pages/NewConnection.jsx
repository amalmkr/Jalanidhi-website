import connection from '../assets/images/connection.webp'
import NewConnectionCard from '../sections/NewConnection/NewConnectionCard';
import NumberVerification from '../sections/NewConnection/NumberVerification';

function NewConnection(){

    return(
        <>
        <section className='bg-slate-100'>
            <div className="relative">

                <img
                    src={connection}
                    alt="Water distribution"
                    className="w-full h-[250px] md:h-[400px] object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-blue-950/50"></div>

                {/* Hero Content */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">

                    <h1 className="text-white font-extrabold text-4xl md:text-6xl">
                        പുതിയ കണക്ഷൻ 
                    </h1>

                    <p className="text-white/90 text-base md:text-xl mt-4 max-w-2xl">
                        നിങ്ങളുടെ വീട്ടിലേക്ക് പുതിയ കുടിവെള്ള കണക്ഷനായി ഓൺലൈനായി അപേക്ഷിക്കുക.
                    </p>

                </div>
            </div>
        
            <NewConnectionCard/>
            <NumberVerification/>
            
            
        </section>
        </>
    )
}

export default NewConnection;