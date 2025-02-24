import SmallNewCards from '@/component/news-cards/SmallNewCards'
import TitleTag from '@/component/titletag'
import Image from 'next/image'
import React from 'react'

export default function NextStories() {
    return (
        <>
            <div>
                <div className="flex justify-between items-center border-b   border-tertiary/50">
                    <TitleTag title="Next Stories" />
                    <div className="pr-3">
                        <button className="font-bold text-base text-primary">Read more</button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2  gap-x-3 gap-y-3 mt-5">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
                        <SmallNewCards
                            key={index} // Keep key here, not inside the component
                            image="/assets/banner/b36149120248eaf2d18f1cdb91815095.png"
                            title="How Online Learning is Changing Rural India"
                            date="17th Feb, 2025"
                            author="Rajesh Sharma"
                        />
                    ))}
                </div>
            </div>
        </>
    )
}
