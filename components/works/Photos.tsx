import { imageSource } from '@/types/enums'
import Image from 'next/image'
import React from 'react'

export default function Photos({ images }: { images: string[] }) {
    return (
        <div className='my-20'>
            <h3 className="headerTitle">Screen Shoots</h3>
            <div className='grid md:grid-cols-2 gap-x-3 mt-8 gap-y-3'>
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