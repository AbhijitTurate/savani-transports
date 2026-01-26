import { title } from 'process'
import React from 'react'

const AboutFounder = () => {
   
    const imagedata = [
       { 
        imageName: 'aboutfounder.png',
        title : 'Shri K.M. Reddy Chief Justice Bombay High Court honouring Shri M.V. Savani'
       },
       { 
        imageName: 'aboutfounder1.png',
        title: 'Shiromani Award presented to Shri M.V. Savani by Shri Giani Zail Singh - President of India in 1986'
       },
       {
        imageName: 'aboutfounder2.png',
        title: 'Glory of India International Award received on behalf of Shri M.V. Savani presented by Dr.Abid Hussain - Indian Ambassador to USA in 1991 '
       },
       {
        imageName: 'aboutfounder3.png',
        title: 'Excellence Award 1989 presented to Shri M.V. Savani by Mr. Rastogi, The Indian High Commissioner of Great Britain at London'
       }
    ]

    
    const description = `Late Shri Maneklal V. Savani was associated with the Bombay Goods Transports Association from 1950, becoming a member of its Managing Committee in 1958 and serving as its President during 1973–74.
    
    In 1959, he joined the All India Motor Transport Congress, where he became a Managing Committee member in 1960 and later served as President from 1974–76. He was also actively involved with the Maharashtra Truck Owners' Association, the Wadala Truck Terminal Project, and the Indian Merchant Chamber, serving on several of its committees.

    In recognition of his contributions to the transport industry, the Government of Maharashtra appointed him Justice of Peace in 1970 and later Special Executive Magistrate. His achievements were honoured with the Udyog Ratna and the Shiromani Award, presented by the President of India, Shri Gyani Zail Singh, in 1985 and 1986 respectively, followed by the Nehru Centenary Excellence Award in 1989 and the Glory of India International Award in 1991.
    
    Beyond his professional life, he was deeply committed to social and charitable causes, serving as President of Dhanera Arogya Samiti from 1967 to 1980, Palanpur Samaj Kendra, Atmanand Jain Sabha, and Matunga Gujarati Club, and as Vice Chairman of Manav Seva Sangh and M.P. College of Girls (S.N.D.T.) in Mumbai.
    
    In recognition of his lifelong contributions to social, charitable, and trade activities, he was posthumously awarded the Manav Seva Puraskar.`
    return (
        <div className={`flex flex-col-reverse md:flex-row  items-center gap-6 md:gap-12 py-10 bg-gray-100`}>
                <div className='flex flex-col flex-1'>
                    <div className='grid grid-cols-2 gap-4'>
                    {imagedata.map((item, index) => (
                        <div key={index}>
                            <img src={`/assets/${item.imageName}`} alt={item.title} />
                            <p className='text-lg mt-2 md:mt-6 font-figtree font-semibold text-base text-[#0033CC] tracking-[0.04em] whitespace-pre-line'>{item.title}</p>
                        </div>
                    ))}
                    </div>
                </div>
            <div className='flex flex-col flex-1'>
                {/* <h1 className={`text-2xl  md:text-7xl tracking-[-0.04em] font-semibold font-figtree line-height-86`}>About the Founder</h1> */}
                <h1 className={`text-2xl md:text-7xl tracking-[-0.04em] font-figtree`}>About the Founder</h1>

                <p className='text-lg mt-2 md:mt-6 font-figtree text-base text-primary-text-color-70 tracking-[0.04em] whitespace-pre-line'>{description}</p>
            </div>
            {/* <img
                src={`/assets/${imageName}.png`}
                alt={title}
                className='flex-1'
            /> */}
        </div>
    )
}

export default AboutFounder