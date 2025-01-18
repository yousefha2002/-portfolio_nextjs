'use client'
import mainlinks from '@/dummy/mainlinks'
import React from 'react'
import LinkTopic from './LinkTopic'

export default function TopicLinks() {
    return (
        <div className='flex flex-wrap items-center gap-x-6 gap-y-3 justify-center mb-8'>
            {
                mainlinks.map(item=><LinkTopic key={item.id} item={item}/>)
            }
        </div>
    )
}
