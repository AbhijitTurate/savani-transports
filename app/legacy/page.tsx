import Footer from '@/components/Footer'
import MissionVision from '@/app/legacy/components/MissionVision'
import Navbar from '@/components/Navbar'

import React from 'react'
import AboutusBanner from './components/AboutusBanner'


const Legacy = () => {
    const missionVisionData = [{
        icon: 'mission',
        title: 'Our Mission',
        description: 'We strive to be the most trusted name in transport across India, combining innovative logistics solutions with the highest standards of safety and efficiency. Every day, we work to meet the unique needs of our clients, from handling general cargo to providing specialized logistics for the automobile industry and beyond.'
    },
    {
        icon: 'vision',
        title: 'Our Vision',
        description: '"To be India’s most trusted and innovative transport partner, continuously setting the standard for safe, efficient, and customer-focused logistics solutions that connect every corner of the nation."'
    }
    ]

    const aboutData = [
        {
            imageName: 'abouttruck',
            title: 'Delivering Excellence Across India Since 1942',
            description: 'At Savani Transports Pvt Limited, we’re proud pioneers in surface transport, offering reliable, economic, and fast logistics solutions across the country. Established in 1942, we’ve dedicated over 80 years to moving cargo securely, efficiently, and with a focus on customer satisfaction. Today, with 310+ branches and a robust fleet of containerized trucks and LCVs, we ensure that our clients’ goods reach their destinations safely, no matter where they are.'
        },
        {
            imageName: 'abouttruck',
            title: 'A Legacy of Trust and Innovation',
            description: 'Our journey is marked by milestones that underscore our commitment to growth and excellence. We celebrated our Silver Jubilee in 1967, with 101 branches across India. A decade later, in 1977, we’d expanded to 201 branches. Our Golden Jubilee in 1992 and Diamond Jubilee in 2002 were celebrated with an even stronger network and fleet, and today, we continue to push boundaries, ensuring every cargo is handled with precision and care.'
        }
    ]
    return (
        <div className='flex flex-col min-h-screen '>
            <Navbar />

            <div className='flex flex-col mx-8 md:mx-[5.25rem] my-8 md:my-16 gap-14'>

                {aboutData.map((item, index) => {
                    const shouldReverse = index % 2 != 0
                    const updatedItemObject = { ...item, reverse: shouldReverse }
                    return <AboutusBanner key={index} {...updatedItemObject} />
                })}
            </div>
            <div className='flex flex-col md:flex-row mx-8 md:mx-[5.25rem] my-8 md:my-16 gap-8'>
                {missionVisionData.map((item, index) => <MissionVision key={index} {...item} />)}
            </div>
            <Footer />
        </div>
    )
}

export default Legacy