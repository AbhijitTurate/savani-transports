import React from 'react'

const LorryDetails = () => {
    return (
        // <div className="flex w-full md:min-w-[33%] md:w-auto items-start space-x-6 bg-gray-100 px-11 py-10 rounded-lg shadow-md">
        //     {/* Image */}
        //     <img
        //         src="/assets/ShippingLorry.svg"
        //         alt="Truck"
        //         className="w-28 h-auto rounded-lg"
        //     />

        //     {/* Details */}
        //     <div>
        //         <div className="flex items-start w-full">
        //             <div className="pr-5 border-r border-gray-300">
        //                 <p className="text-primary-text-color font-medium">
        //                     MH-12-JS-10291
        //                 </p>
        //                 <p className="text-primary-text-color-70 text-sm">
        //                     Lorry Number
        //                 </p>
        //             </div>
        //             <div className="px-5 border-r border-gray-300">
        //                 <p className="text-primary-text-color font-medium">
        //                     Steel
        //                 </p>
        //                 <p className="text-primary-text-color-70 text-sm">
        //                     Item
        //                 </p>
        //             </div>
        //             <div className="pl-5">
        //                 <p className="text-primary-text-color font-medium">
        //                     2 Tonne
        //                 </p>
        //                 <p className="text-primary-text-color-70 text-sm">
        //                     Weight
        //                 </p>
        //             </div>
        //         </div>
        //         <div className="flex  flex-col items-start gap-4 mt-6">
        //             <p className="text-primary-text-color-70 text-sm">
        //                 Invoice ID: <span className="font-medium text-primary-text-color">#012019391012</span>{" "}
        //                 <a
        //                     href="#"
        //                     className="text-blue-600 hover:text-blue-800 font-medium"
        //                 >
        //                     View Invoice
        //                 </a>
        //             </p>
        //             <p className="text-primary-text-color-70 text-sm">
        //                 Pick Up Location: <span className="text-primary-text-color font-medium">Jalna Railway Station</span>
        //             </p>
        //             <p className="text-primary-text-color-70 text-sm">
        //                 Drop Location: <span className="text-primary-text-color font-medium">Nashik, MG Godown</span>
        //             </p>
        //         </div>
        //     </div>
        // </div>
        <div className="flex flex-col md:flex-row w-full md:min-w-[33%] md:w-auto items-start  space-y-6 md:space-y-0 md:space-x-6 bg-gray-100 px-6 md:px-11 py-6 md:py-10 rounded-lg shadow-md">
            {/* Image */}
            <img
                src="/assets/ShippingLorry.svg"
                alt="Truck"
                className="w-20 h-auto md:w-28 rounded-lg"
            />

            {/* Details */}
            <div className="flex flex-col w-full">
                <div className="flex flex-col md:flex-row items-start md:items-center w-full space-y-4 md:space-y-0">
                    <div className="pr-0 md:pr-5 md:border-r border-gray-300">
                        <p className="text-primary-text-color font-medium">
                            MH-12-JS-10291
                        </p>
                        <p className="text-primary-text-color-70 text-sm">
                            Lorry Number
                        </p>
                    </div>
                    <div className="px-0 md:px-5 md:border-r border-gray-300">
                        <p className="text-primary-text-color font-medium">
                            Steel
                        </p>
                        <p className="text-primary-text-color-70 text-sm">
                            Item
                        </p>
                    </div>
                    <div className="pl-0 md:pl-5">
                        <p className="text-primary-text-color font-medium">
                            2 Tonne
                        </p>
                        <p className="text-primary-text-color-70 text-sm">
                            Weight
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-4 mt-4 md:mt-6">
                    <p className="text-primary-text-color-70 text-sm">
                        Invoice ID:{" "}
                        <span className="font-medium text-primary-text-color">#012019391012</span>{" "}
                        <a
                            href="#"
                            className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                            View Invoice
                        </a>
                    </p>
                    <p className="text-primary-text-color-70 text-sm">
                        Pick Up Location:{" "}
                        <span className="text-primary-text-color font-medium">Jalna Railway Station</span>
                    </p>
                    <p className="text-primary-text-color-70 text-sm">
                        Drop Location:{" "}
                        <span className="text-primary-text-color font-medium">Nashik, MG Godown</span>
                    </p>
                </div>
            </div>
        </div>

    )
}

export default LorryDetails