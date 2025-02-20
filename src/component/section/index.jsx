import Image from 'next/image'
import React from 'react'

export default function Section({ children, bgcolor, banner , border }) {
    return (
        <>
            <section className={`${border ? 'border-t border-[#707070D4]/80':''}`} >
                <div style={{ backgroundColor: `${bgcolor}` }}>
                    <div className='max-w-6xl px-4 md:px-6 lg:px-8  mx-auto'>
                        <div className='py-8 ' >
                            {children}
                        </div>
                    </div>
                </div>
                {
                    banner && (
                        <div className='py-3 px-4 md:px-6 lg:px-8 flex justify-center max-w-6xl mx-auto'>
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
               
            </section>
        </>
    )
}
