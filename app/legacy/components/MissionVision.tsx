import React from 'react'

const MissionVision = ({ icon, title, description }: any) => {
    return (
        <div className='flex flex-col flex-1 gap-1 bg-gray-100 rounded-lg shadow-md px-8 py-10'>
            <div className='flex flex-row justify-start items-center gap-3 '>
                <img
                    src={`/assets/${icon}.svg`}
                    alt={title}
                    className='h-12 w-12' />
                <h1 className='text-40 font-semibold font-figtree'>{title}</h1>
            </div>
            <p className='text-lg mt-2 text-base font-figtree'>{description}</p>
        </div>
    )
}

export default MissionVision