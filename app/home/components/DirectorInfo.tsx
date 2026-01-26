import React from 'react'

const DirectorInfo = () => {
    const directorInfo = [
        {
            title: 'From the Managing Director’s desk',
            image: '/assets/director2.png',
            description: `For over eight decades, Savani Transports has stood on a foundation of trust, discipline, and responsibility. What began as a modest enterprise has grown into a nationwide logistics network, guided by the same principles that shaped our journey from the very beginning.
            The transport industry has evolved significantly over the years, and so have we. Yet, our core belief remains unchanged every consignment entrusted to us carries the confidence of our customers. It is this responsibility that drives us to operate with care, consistency, and integrity in everything we do.
            As we move forward, our focus remains on strengthening relationships, refining operations, and ensuring that Savani continues to be a dependable partner for businesses across India.`
        },
        {
            title: 'From the Director’s Desk',
            image: '/assets/director1.png',
            description: 'At Savani Transport, we pride ourselves on delivering exceptional logistics solutions tailored to our clients\' needs. As the director, I have witnessed our team\'s dedication to innovation and efficiency firsthand. Our fleet is equipped with the latest technology, ensuring timely deliveries and safe handling of goods. We believe in building strong relationships with our partners and customers, which has been the cornerstone of our success. Together, we are not just moving cargo; we are moving businesses forward.'
        },

    ]

    return (

        directorInfo.map((director, index) => {
            const shouldReverse = index % 2 != 0
            // const updatedItemObject = { ...director, reverse: shouldReverse }
            return <section key={index} className={`flex flex-col-reverse lg:flex-row items-center gap-8 md:gap-[9.75rem] mx-auto ${shouldReverse ? "lg:flex-row-reverse" : ""}`}>
            {/* Text Content */}
            <div className='md: max-w-[806px]'>
                <img src="/assets/director-qoute.svg" alt="Quote" className="mb-6 w-20 h-20 md:w-[6.75rem] md:h-[6.75rem]" />
                <h2 className="font-figtree text-3xl md:text-5xl font-semibold primary-text-color mb-6">{director.title}</h2>
                <p className="font-figtree font-regular primary-text-color-70 text-20 tracking-[-0.04em] whitespace-pre-line">
                {director.description}
                </p>
                {/* <p className="font-figtree primary-text-color-70 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                    malesuada arcu ac ligula ullamcorper, venenatis imperdiet lacus
                    interdum. Donec pretium tristique massa. Proin facilisis velit
                    lacus et volutpat ultrices.
                </p>
                <p className="font-figtree primary-text-color-70 mb-4">
                    Curabitur vulputate elit at lorem tristique. Integer malesuada
                    lacus felis eu orci pharetra sodales. Hendrerit malesuada felis
                    eros at nibh pharetra fringilla.
                </p>
                <p className="font-figtree primary-text-color-70">
                    Donec pretium tristique massa. Proin facilisis velit lacus et
                    volutpat ultrices. Curabitur vulputate elit at lorem tristique.
                    Hendrerit malesuada felis eros at nibh pharetra fringilla.
                </p> */}
            </div>

            {/* Image */}
            <div className="flex justify-center">
                <img
                    src={director.image}
                    alt="Director"
                    className="shadow-lg w-full max-w-sm lg:max-w-full rounded-[40px]"
                />
            </div>
        </section>
    }))
   
}

export default DirectorInfo