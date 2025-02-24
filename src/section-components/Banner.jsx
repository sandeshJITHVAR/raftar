import Image from 'next/image'
import React from 'react'

export default function Banner() {
    return (
        <div className='flex justify-center'>
            <Image
                src='/assets/banner/103f61951fbc29bc7558c8eda8f86084.jpg'
                alt='banner'
                className="w-[728px] h-[95px] aspect-w-16 aspect-h-9  object-cover"
                width={728}
                height={95}
                priority />
        </div>
    )
}
