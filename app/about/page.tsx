import Footer from '@/components/Footer'
import MissionVision from '@/app/about/components/MissionVision'
import Navbar from '@/components/Navbar'

import React from 'react'
import AboutusBanner from './components/AboutusBanner'
import Awards from './components/Awards'
import DirectorInfo from '../home/components/DirectorInfo'
import AboutFounder from './components/AboutFounder'
import FooterBillboard from '../home/components/FooterBillboard'


const About = () => {
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
            imageName: 'aboutusbanner',
            title: 'About Savani Transports Private Limited.',
            description: `Savani Transports Private Limited is one of India’s pioneering and most trusted transport companies, serving businesses across the country for over 80 years.

As a family managed enterprise, Savani has been built on long-term relationships, ethical business practices, and a deep understanding of India’s transport ecosystem. Over the decades, we have supported the growth of industries by ensuring safe, timely, and efficient movement of goods across the nation.

Today, Savani Transports operates through a network of over 110+ outlets and franchises across India, offering comprehensive road transport solutions to businesses of all sizes. We serve a wide range of industries including textiles, pharmaceuticals, chemicals, FMCG, automotive, engineering, and manufacturing.`
        },
       
    ]
    const aboutData2 = [ {
        imageName: 'aboutBanner2',
        title: 'Our Legacy and Foundation',
        description: 'Founded in 1942, Savani Transports Private Limited has grown from its early beginnings as a railway agency into a pan-India logistics network, known for reliability, consistency, and care.\n\nThe foundation of Savani Transports was laid by Shri Vadilal Nathubhai Savani and Shri Tarachand Nathubhai Savani, whose vision and determination helped establish a dependable transport operation during a time when infrastructure and logistics systems in India were still evolving.\n\nThe company was later expanded under the leadership of Shri Maneklal V. Savani who was the main spirit behind the success, he played a pivotal role in transforming Savani into one of India\'s early nationwide transport networks. His leadership strengthened the company\'s values of discipline, service excellence, and social responsibility principles that continue to guide Savani today.'
    }]
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
            <div className='flex flex-col px-8 md:px-[5.25rem] my-8 md:my-16 gap-14 bg-gray-100'>
                <AboutFounder />
            </div>
            <div className='flex flex-col md:flex-row mx-8 md:mx-[5.25rem] my-8 md:my-16 gap-8'>
                {missionVisionData.map((item, index) => <MissionVision key={index} {...item} />)}
            </div>

            <div className="flex flex-col items-center justify-center gap-16 md:gap-[6.5rem] mx-8 md:mx-[5.25rem] my-16">
                <DirectorInfo />
            </div>
            <Awards />
            <div className='flex flex-col mx-8 md:mx-[5.25rem] my-8 md:my-16 gap-14'>
            {aboutData2.map((item, index) => <AboutusBanner key={index} {...item} reverse={true} />)}
            </div>
            <div className='flex flex-col mx-8 md:mx-[5.25rem] my-8 md:my-16'>
                <FooterBillboard />
            </div>
            <Footer />
        </div>
    )
}

export default About
