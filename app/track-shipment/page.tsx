"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TrackshipmentComponent from "@/app/track-shipment/components/TrackshipmentComponent";
import React from 'react'

const TrackShipment = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <TrackshipmentComponent />
            <Footer />
        </div>
    )
}

export default TrackShipment