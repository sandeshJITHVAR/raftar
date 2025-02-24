import Image from 'next/image'
import Link from 'next/link'

export default function SmallNewCards({ image, title, date, author, }) {
    return (
        <div className="flex cursor-pointer pb-2 md:pb-3 h-full  border-b border-tertiary/50" >

            <Image
                width={128}
                height={72}
                src={image}
                alt="banner"
                className="w-[128px] md:h-[72px] aspect-w-16 aspect-h-9  object-cover"
            />
            <div className="pl-2">
                <h3 className='text-sm md:text-base font-semibold md:leading-[21.79px] tracking-wide'>
                    <Link href='/newsdetails'>{title}</Link>
                </h3>
                <div className="flex items-center gap-1 mt-1 md:mt-2  text-xs text-gray-500">
                    <div className="h-2 w-2 bg-secondary rotate-45" />
                    <span className='flex gap-1 text-xs font-normal text-tertiary'>
                        {date},
                        <Link href='/autherprofile'>{author}</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}