import socials from '@/dummy/socials';
import { data } from '@/types/enums'
import React from 'react'
import SocialAccount from './SocialAccount';
import Image from 'next/image';

export default function PersonalSection() {
    return (
        <div className='mb-6'>
            <div className="flex justify-center">
                <div className="relative w-28 h-28  rounded-full overflow-hidden shadow-lg">
                    <Image
                        src="/images/profile.jpeg"
                        alt="Profile"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </div>
            <h3 className='my-3 font-[600] text-[20px] text-center'>{data.name}</h3>
            <div className='flex gap-2 items-center justify-center'>
                {
                    socials.map(social=><SocialAccount key={social} url={social}/>)
                }
            </div>
        </div>
    )
}
