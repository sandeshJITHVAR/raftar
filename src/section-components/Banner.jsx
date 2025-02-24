import Image from 'next/image'
import React from 'react'

export default function Banner() {
    return (
        <div className='flex justify-center'>
            <Image
                src='/assets/banner/103f61951fbc29bc7558c8eda8f86084.jpg'
                alt='banner'
                className="w-[728px] h-[95px]  object-cover"
                width={200}
                height={100}
                priority />
        </div>
    )
}
