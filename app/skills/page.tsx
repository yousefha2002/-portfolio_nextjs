import SkillBox from '@/components/SkillBox'
import Container from '@/components/ui/Container'
import Skills from '@/dummy/Skills'
import React from 'react'

export default function page() {
    return (
        <Container className='mb-10'>
            <div className='flex gap-x-2 gap-y-4 items-center flex-wrap justify-center'>
                {
                    Skills.map((item,index)=><SkillBox skill={item} key={index}/>)
                }
            </div>
        </Container>
    )
}
