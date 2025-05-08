import Container from '@/components/ui/Container'
import WorkBox from '@/components/WorkBox'
import porjects from '@/dummy/porjects'
import React from 'react'

export default function page() {
    return (
        <Container className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-6'>
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
        </Container>
    )
}
