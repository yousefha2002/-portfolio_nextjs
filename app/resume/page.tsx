import { imageSource } from '@/types/enums'
import React from 'react'

export default function page() {
    return (
        <div className='flex justify-center'>
            <a download={true} href={`${imageSource.upload}Yousef.pdf`}>
                <div className='bg-black text-white px-6 py-2 rounded-[100px]'>Download</div>
            </a>
        </div>
    )
}