import React from 'react'

const ContactUsbanner = () => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-[35rem]" >
            <div className='flex flex-col  items-start'>
                <h1 className="font-figtree font-semibold text-40 mb-4 md:mb-6">Delivering greatness with one of the best fleet.</h1>
                <p className='text-lg mt-2 md:mt-6 text-primary-text-color text-base font-figtree font-regular mb-8'>With our modern fleet of 70+ vehicles we ensure smooth delivery across cities propelling your dreams forward</p>
                <button className="px-14 py-4 bg-transparent border border-blue-600 text-blue-600 font-semibold test-base hover:bg-blue-600 hover:text-white transition">
                    Contact Us
                </button>
            </div>
            <img
                src={`/assets/abouttruck.png`}
                alt={'Delivering greatness with one of the best fleet.'}
            />
        </div>
    )
}

export default ContactUsbanner