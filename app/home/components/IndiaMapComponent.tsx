import React from 'react'

const IndiaMapComponent = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row md:w-full items-center gap-8 md:justify-between" >
            <div className="relative">
                <img
                    src={`/assets/indiamap1.png`}
                    alt={'Delivering greatness with one of the best fleet.'}
                    className="relative z-10"
                />
        
                {/* <div className="absolute inset-0 z-20 pointer-events-none">
                    {/* North region dots */}
                    {/*
                    <div className="absolute top-[0%] left-[22%] w-1 h-1 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                    <div className="absolute top-[1%] left-[18%] w-1 h-1 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                    <div className="absolute top-[3%] left-[15%] w-1 h-1 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>

                    <div className="absolute top-[12%] left-[35%] w-1 h-1 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                    <div className="absolute top-[10%] left-[18%] w-1 h-1 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                    
                    {/* Northwest region dots */}
                    {/*
                    <div className="absolute top-[25%] left-[25%] w-1 h-1 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                    <div className="absolute top-[30%] left-[20%] w-1 h-1 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                    
                    {/* Northeast region dots */}
                    {/*
                    <div className="absolute top-[15%] left-[20%] w-1 h-1 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                    <div className="absolute top-[30%] left-[35%] w-1 h-1 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                    
                    {/* Central region dots */}
                    {/*
                    <div className="absolute top-[40%] left-[45%] w-1 h-1 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                    <div className="absolute top-[45%] left-[35%] w-1 h-1 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                    <div className="absolute top-[50%] left-[55%] w-1 h-1 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                    
                    {/* Western region dots */}
                    {/*
                    <div className="absolute top-[35%] left-[15%] w-1 h-1 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                    <div className="absolute top-[45%] left-[10%] w-1 h-1 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                    
                    {/* Eastern region dots */}
                    {/*
                    <div className="absolute top-[38%] left-[80%] w-1 h-1 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                    <div className="absolute top-[48%] left-[85%] w-1 h-1 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                    
                    {/* Southern region dots */}
                    {/*
                    <div className="absolute top-[65%] left-[45%] w-1 h-1 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                    <div className="absolute top-[70%] left-[35%] w-1 h-1 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                    <div className="absolute top-[75%] left-[30%] w-1 h-1 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                    <div className="absolute top-[80%] left-[40%] w-1 h-1 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                    
                    {/* Southwest region dots */}
                    {/*
                    <div className="absolute top-[60%] left-[20%] w-1 h-1 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                    <div className="absolute top-[70%] left-[25%] w-1 h-1 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                    <div className="absolute top-[63%] left-[20%] w-1 h-1 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                    <div className="absolute top-[75%] left-[25%] w-1 h-1 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                    <div className="absolute top-[50%] left-[23%] w-1 h-1 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                    <div className="absolute top-[60%] left-[35%] w-1 h-1 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                    <div className="absolute top-[50%] left-[20%] w-1 h-1 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                    <div className="absolute top-[55%] left-[19%] w-1 h-1 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>


                    {/* Southeast region dots */}
                    {/*
                    <div className="absolute top-[62%] left-[55%] w-1 h-1 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                    <div className="absolute top-[72%] left-[19%] w-1 h-1 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                    <div className="absolute top-[62%] left-[55%] w-1 h-1 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                    <div className="absolute top-[72%] left-[19%] w-1 h-1 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>

                    {/* Additional scattered dots */}
                    {/*
                    <div className="absolute top-[55%] left-[30%] w-1 h-1 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                    <div className="absolute top-[60%] left-[25%] w-1 h-1 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                    <div className="absolute top-[45%] left-[60%] w-1 h-1 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                    <div className="absolute top-[55%] left-[50%] w-1 h-1 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>

                    <div className="absolute top-[62%] left-[55%] w-1 h-1 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                    <div className="absolute top-[72%] left-[19%] w-1 h-1 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                    <div className="absolute top-[62%] left-[55%] w-1 h-1 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                    <div className="absolute top-[72%] left-[19%] w-1 h-1 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>


                    <div className="absolute top-[82%] left-[39%] w-1 h-1 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                    <div className="absolute top-[85%] left-[29%] w-1 h-1 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                    <div className="absolute top-[90%] left-[33%] w-1 h-1 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                    <div className="absolute top-[92%] left-[29%] w-1 h-1 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                    <div className="absolute top-[88%] left-[35%] w-1 h-1 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                    <div className="absolute top-[78%] left-[28%] w-1 h-1 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                    
                </div>
                 */}
                
            </div>
            <div className='flex flex-col items-start max-w-[680px]'>
                <h1 className="font-figtree font-semibold tracking-[-0.02em] text-24 md:text-40 leading-none">Savani Transports is committed to delivering excellence throughout India.</h1>
                <p className='text-lg mt-2  text-primary-text-color tracking-[-0.02em] text-base font-figtree font-regular'>With over 110+ outlets, Savani Transports guarantees quick and secure delivery to every part of India.</p>
                {/* <button className="px-14 py-4 bg-transparent border border-brandIndigo text-brandIndigo font-semibold text-base hover:bg-brandIndigo hover:text-white transition">
                    Contact Us
                </button> */}
            </div>
        </div>
    )
}

export default IndiaMapComponent