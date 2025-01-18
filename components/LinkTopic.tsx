'use client'
import { Topic } from '@/types/Topic'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function LinkTopic({item}:{item:Topic}) {
    const pathname = usePathname()
    const isActive = pathname === `/${item.link}` 
    return (
        <Link href={`/${item.link}`} >
            <div 
                style={{
                    backgroundColor:isActive?"#066ac9":"",
                    color:isActive?"white":"black"
                }}
                className='shadow-2xl rounded-[8px] w-[80px] h-[80px] flex justify-center items-center flex-col'>
                <div className='flex justify-center mb-1'><item.icon className="text-[18px]"/></div>
                <h3>{item.title}</h3>
            </div>
        </Link>
    )
}