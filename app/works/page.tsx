import WorkBox from '@/components/WorkBox'
import porjects from '@/dummy/porjects'
import React from 'react'

export default function page() {
    return (
        <div className='grid sm:grid-cols-2 m-12 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-6'>
        {
            porjects.map(item=>
                {
                    return <WorkBox
                            image={item.images[0]} 
                            id={item.id} 
                            title={item.title} 
                            description={item.description} 
                            key={item.id}
                            githubLink={item.githubLink}
                        />
                })
        }
        </div>
    )
}
