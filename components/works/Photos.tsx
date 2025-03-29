import { imageSource } from '@/types/enums'
import Image from 'next/image'
import React from 'react'

export default function Photos({ images }: { images: string[] }) {
    return (
        <div className='my-15'>
            <h3 className="headerTitle">Screen Shoots</h3>
            <div className='grid w-[90%] sx:w-[80%] lg:w-[60%] mx-auto gap-x-3 mt-8 gap-y-3'>
                {
                    images.map(image => (
                        <div key={image} className='relative'>
                            <Image
                                src={`${imageSource.works}${image}`}
                                alt='notfound...'
                                width={300}
                                height={180}
                                layout="responsive"
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}