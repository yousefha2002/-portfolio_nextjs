import socials from '@/dummy/socials';
import { data } from '@/types/enums'
import React from 'react'
import SocialAccount from './SocialAccount';

export default function PersonalSection() {
    return (
        <div className='mb-6'>
            <h3 className='my-3 font-[600] text-[20px] text-center'>{data.name}</h3>
            <div className='flex gap-2 items-center justify-center'>
                {
                    socials.map(social=><SocialAccount url={social}/>)
                }
            </div>
        </div>
    )
}
