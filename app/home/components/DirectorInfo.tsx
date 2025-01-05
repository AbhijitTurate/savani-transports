import React from 'react'

const DirectorInfo = () => {
    return (

        <section className="flex flex-col-reverse lg:flex-row items-center gap-8 md:gap-[9.75rem] mx-auto">
            {/* Text Content */}
            <div>
                <img src="/assets/director-qoute.svg" alt="Quote" className="mb-4 w-20 h-20 md:w-[6.75rem] md:h-[6.75rem]" />
                <h2 className="font-figtree text-3xl md:text-5xl font-semibold primary-text-color mb-4">The director’s word</h2>
                <p className="font-figtree primary-text-color-70 mb-4">
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
                </p>
            </div>

            {/* Image */}
            <div className="flex justify-center">
                <img
                    src="/assets/director.png"
                    alt="Director"
                    className="rounded-xl shadow-lg w-full max-w-sm lg:max-w-full"
                />
            </div>
        </section>
    );
}

export default DirectorInfo