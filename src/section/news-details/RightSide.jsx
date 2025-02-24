import Advertis from '@/section-components/Advertis'
import Contactwithme from '@/section-components/Contactwithme'
import LatestNews from '@/section-components/LatestNews'
import SocialMediaOften from '@/section-components/SocialMediaOften'


export default function RightSide() {
    return (
        <>
            <div className='flex flex-col gap-8'>
                <LatestNews />
                <Contactwithme />
                <Advertis big={true} />
                <div className=' col-span-12 lg:col-span-3 flex flex-col gap-y-6'>
                    <div className='flex flex-col gap-y-2'>
                        <h1 className='text-xl font-semibold' style={{ fontFamily: 'Merriweather' }}>Do you use social media often?</h1>
                        <hr className=" h-[2px] w-full  bg-secondary " />
                    </div>
                    <SocialMediaOften />
                </div>
            </div>
        </>
    )
}
