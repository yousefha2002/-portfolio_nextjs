import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { imageSource } from '@/types/enums'

type props = {
    image:string,
    title:string,
    description:string,
    id:number,
    githubLink:string
}

export default function WorkBox(props:props) {
    const {image,title,description,id,githubLink} = props
    return (
        <div className='drop-shadow-2xl bg-white rounded-md'>
            <Image alt={title} src={`${imageSource.works}${image}`} height={150} width={1000} className='max-w-full h-[150px] rounded-t-md'/>
            <div className='p-4 h-[140px]'>
                <h3 className='text-[20px] font-bold mb-4'>{title}</h3>
                <p className='text-[14px]'>{description}</p>
            </div>
            <div className='p-4 flex justify-between items-center'>
                <Link href={`/works/${id}`} className='bg-PRIMARY rounded-md text-white px-6 py-1'>View</Link>
                <Link href={githubLink} target='blank'>
                    <Image src={`${imageSource.direct}github.webp`} alt="github" width={70} height={100}/>
                </Link>
            </div>
        </div>
    )
}
