import Banner from '@/section-components/Banner'
import Image from 'next/image'
import React from 'react'

export default function Section({ children, bgcolor, banner , border }) {
    return (
        <>
            <section className={`${border ? 'border-t border-tertiary/50':''}`} >
                <div style={{ backgroundColor: `${bgcolor}` }}>
                    <div className='max-w-[80rem] px-4 md:px-6 lg:px-8 py-8   mx-auto'>
                            {children}
                    </div>
                </div>
                {
                    banner && (
                        <div className='py-3 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto'>
                            <Banner />
                        </div>
                    )
                }
            </section>
        </>
    )
}
