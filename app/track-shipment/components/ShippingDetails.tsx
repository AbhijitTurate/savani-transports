import React from 'react'
import LorryDetails from './LorryDetails'
import TimeDisplay from './TimeDisplay'
import TransportDetails from './TransportDetails'

const ShippingDetails = () => {
    return (
        <div className="mt-10 md:p-10">
            <h1 className="text-3xl font-semibold font-figtree text-primary-text-color mb-8">
                Your Shipment
            </h1>
            <div className="flex flex-wrap gap-8 w-full">
                <LorryDetails />
                <TimeDisplay />
                <TransportDetails />
                {/* <div className="flex w-full md:min-w-[33%] md:w-auto items-start space-x-6 bg-gray-100 px-11 py-10 rounded-lg shadow-md"> */}
                {/* Image */}
                {/* <img
                    src="/assets/ShippingLorry.svg"
                    alt="Truck"
                    className="w-28 h-auto rounded-lg"
                /> */}

                {/* Details */}
                {/* <div>
                    <div className="flex items-start w-full">
                        <div className="pr-5 border-r border-gray-300">
                            <p className="text-primary-text-color font-medium">
                                MH-12-JS-10291
                            </p>
                            <p className="text-primary-text-color-70 text-sm">
                                Lorry Number
                            </p>
                        </div>
                        <div className="px-5 border-r border-gray-300">
                            <p className="text-primary-text-color font-medium">
                                Steel
                            </p>
                            <p className="text-primary-text-color-70 text-sm">
                                Item
                            </p>
                        </div>
                        <div className="pl-5">
                            <p className="text-primary-text-color font-medium">
                                2 Tonne
                            </p>
                            <p className="text-primary-text-color-70 text-sm">
                                Weight
                            </p>
                        </div>
                    </div>
                    <div className="flex  flex-col items-start gap-4 mt-6">
                        <p className="text-primary-text-color-70 text-sm">
                            Invoice ID: <span className="font-medium text-primary-text-color">#012019391012</span>{" "}
                            <a
                                href="#"
                                className="text-brandIndigo hover:text-blue-800 font-medium"
                            >
                                View Invoice
                            </a>
                        </p>
                        <p className="text-primary-text-color-70 text-sm">
                            Pick Up Location: <span className="text-primary-text-color font-medium">Jalna Railway Station</span>
                        </p>
                        <p className="text-primary-text-color-70 text-sm">
                            Drop Location: <span className="text-primary-text-color font-medium">Nashik, MG Godown</span>
                        </p>
                    </div>
                </div>
            </div> */}
                {/* <div className="flex flex-col w-full md:min-w-[20.875rem] md:w-auto justify-center bg-gray-100 px-11 py-[5.625rem] rounded-lg shadow-md">
                <h2 className="text-primary-text-color text-lg font-semibold mb-6">
                    Time left to deliver
                </h2>
                <div className="flex text-center">
                    <div className="pr-8 border-r border-gray-300">
                        <p className="text-primary-text-color text-3xl font-bold ">06</p>
                        <p className="text-primary-text-color-70 text-sm">Days</p>
                    </div>
                    <div className="px-8 border-r border-gray-300">
                        <p className="text-primary-text-color text-3xl font-bold ">12</p>
                        <p className="text-primary-text-color-70 text-sm">Hours</p>
                    </div>
                    <div className="pl-8">
                        <p className="text-primary-text-color text-3xl font-bold ">34</p>
                        <p className="text-primary-text-color-70 text-sm">Minutes</p>
                    </div>
                </div>
            </div> */}

                {/* <div className="flex w-full  md:flex-1 bg-gray-100 rounded-lg shadow-md px-[4.5rem] py-[5.625rem] items-center justify-center flex-col  md:flex-col">
                <div className="flex flex-col  md:flex-row  md:w-full items-center px-6">
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

                        <div className="text-center absolute mt-12">
                            <p className="text-primary-text-color font-medium">Transport</p>
                            <p className="text-primary-text-color font-medium">Order Placed</p>
                        </div>
                    </div>
                    <div className="flex-grow border-t border-dashed border-green-500"></div>
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                        <div className="text-center absolute mt-12">
                            <p className="text-primary-text-color font-medium">Lorry Left</p>
                            <p className="text-primary-text-color font-medium">Go-down</p>
                        </div>
                    </div>
                    <div className="flex-grow border-t border-dashed border-gray-300"></div>
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                        <div className="text-center absolute mt-12">
                            <p className="text-primary-text-color font-medium">Order</p>
                            <p className="text-primary-text-color font-medium">Shipped</p>
                        </div>
                    </div>
                </div>
            </div> */}

            </div>
        </div>
    )
}

export default ShippingDetails