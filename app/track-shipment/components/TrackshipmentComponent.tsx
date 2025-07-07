"use strict";
import React, { useRef, useState } from "react";
import ShippingDetails from "./ShippingDetails";

const TrackshipmentComponent = () => {
    const lorryNumber = useRef("");
    const [lorryDetails, setLorryDetails] = useState(null);
    const [error, setError] = useState("");
    const handleClick = async () => {
        console.log("inaisde handle submit:::", lorryNumber);
        try {
            const response = await fetch(
                `/api/lorry-status?lorryNumber=${lorryNumber.current}`
            );
            const data = await response.json();
            console.log("data:::", data);
            if (response.ok) {
                setLorryDetails(data);
            } else {
                setError(data.error || "Error fetching lorry details.");
            }
        } catch (error) {
            setError("Error connecting to the server.");
        }
    };
    return (
        <div className="flex-grow gap-4 mx-8 md:mx-[5.25rem] my-8 md:my-16 ">
            <div className="flex flex-col gap-2">
                <h1 className="text-4xl md:text-7xl font-figtree font-semibold">
                    Find your shipment
                </h1>
                <p className="text-1xl md:text-2xl text-primary-text-color/70 font-extralight font-figtree">
                    Enter your lorry number and see where your truck is in
                </p>
            </div>
            <div className="flex flex-col gap-4 mt-14 px-8 py-10 bg-gray-100 rounded-lg shadow-md">
                <h1 className="text-lg font-semibold font-figtree">Lorry Number</h1>
                <div className="flex flex-col w-full md:flex-row  items-center gap-0.875">
                    <input
                        onChange={(e) => (lorryNumber.current = e.target.value)}
                        type="text"
                        placeholder="Enter Lorry Number"
                        className="flex-grow w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button onClick={handleClick} className="bg-brandIndigo text-white min-w-[10.125rem] px-10 py-4 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Find Lorry</button>
                </div>
                <h1 className="font-figtree text-base">
                    Don't Have your Lorry number ? React out to our help desk  <a href="/contact" className="text-brandIndigo font-figtree font-semibold hover:underline">
                        Contact
                    </a>.
                </h1>
            </div>


            {error && <p className="text-red-500">{error}</p>}
            {lorryDetails && (<ShippingDetails />)}

        </div>
    );
};

export default TrackshipmentComponent;
