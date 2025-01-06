import React from 'react'

const TransportDetails = () => {
    return (
        <div className="flex w-full h-92 md:h-auto md:flex-1 bg-gray-100 rounded-lg shadow-md px-6 md:px-[4.5rem] py-10 md:py-[5.625rem] items-center justify-center flex-col  md:flex-col">
            <div className="flex flex-col md:gap-0 md:flex-row  md:w-full items-center px-6">
                <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                        <svg
                            className="w-6 h-6 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>

                    <div className="text-center absolute ml-40 md:ml-0 md:mt-12">
                        <p className="text-primary-text-color font-medium font-figtree">Transport</p>
                        <p className="text-primary-text-color font-medium font-figtree">Order Placed</p>
                    </div>
                </div>
                <div className="flex-grow h-16 border-l md:h-0 md:border-t border-dashed border-green-500 "></div>
                <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                    <div className="text-center absolute ml-40 md:ml-0 md:mt-12">
                        <p className="text-primary-text-color font-medium font-figtree">Lorry Left</p>
                        <p className="text-primary-text-color font-medium font-figtree">Go-down</p>
                    </div>
                </div>
                <div className="flex-grow h-16 border-l md:h-0 md:border-t border-dashed border-gray-300 "></div>
                <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                    <div className="text-center absolute ml-40 md:ml-0 md:mt-12">
                        <p className="text-primary-text-color font-medium font-figtree">Order</p>
                        <p className="text-primary-text-color font-medium font-figtree">Shipped</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TransportDetails