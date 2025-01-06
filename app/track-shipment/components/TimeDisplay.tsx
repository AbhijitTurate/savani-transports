import React from 'react'

const TimeDisplay = () => {
    return (
        // <div className="flex flex-col w-full md:min-w-[20.875rem] md:w-auto justify-center bg-gray-100 px-11 py-[5.625rem] rounded-lg shadow-md">
        //     <h2 className="text-primary-text-color text-lg font-semibold mb-6">
        //         Time left to deliver
        //     </h2>
        //     <div className="flex text-center">
        //         <div className="pr-8 border-r border-gray-300">
        //             <p className="text-primary-text-color text-3xl font-bold ">06</p>
        //             <p className="text-primary-text-color-70 text-sm">Days</p>
        //         </div>
        //         <div className="px-8 border-r border-gray-300">
        //             <p className="text-primary-text-color text-3xl font-bold ">12</p>
        //             <p className="text-primary-text-color-70 text-sm">Hours</p>
        //         </div>
        //         <div className="pl-8">
        //             <p className="text-primary-text-color text-3xl font-bold ">34</p>
        //             <p className="text-primary-text-color-70 text-sm">Minutes</p>
        //         </div>
        //     </div>
        // </div>
        <div className="flex flex-col w-full md:min-w-[20.875rem] md:w-auto justify-center bg-gray-100 px-6 md:px-11 py-[5.625rem] rounded-lg shadow-md">
            <h2 className="text-primary-text-color text-2xl font-medium mb-6 text-center font-figtree md:text-left">
                Time left to deliver
            </h2>
            <div className="flex flex-col md:flex-row text-center font-figtree md:text-left">
                <div className="flex flex-col items-center md:items-start pr-0 md:pr-8 md:border-r border-gray-300 mb-6 md:mb-0">
                    <p className="text-primary-text-color text-32 font-figtree font-medium">06</p>
                    <p className="text-primary-text-color text-xs font-light font-figtree">Days</p>
                </div>
                <div className="flex flex-col items-center md:items-start px-0 md:px-8 md:border-r border-gray-300 mb-6 md:mb-0">
                    <p className="text-primary-text-color text-32 font-figtree font-medium">12</p>
                    <p className="text-primary-text-color text-xs font-light font-figtree">Hours</p>
                </div>
                <div className="flex flex-col items-center md:items-start pl-0 md:pl-8">
                    <p className="text-primary-text-color text-32 font-figtree font-medium">34</p>
                    <p className="text-primary-text-color text-xs font-light font-figtree">Minutes</p>
                </div>
            </div>
        </div>

    )
}

export default TimeDisplay