import SkillBox from '@/components/SkillBox'
import Container from '@/components/ui/Container'
import Skills from '@/dummy/Skills'
import React from 'react'

export default function Page() {
    return (
        <Container className="my-10 max-w-4xl mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-5">
            {Skills.map((item, index) => (
            <SkillBox skill={item} key={index} />
            ))}
        </div>
        </Container>
    )
}