import SkillBox from '@/components/SkillBox'
import Skills from '@/dummy/Skills'
import React from 'react'

export default function page() {
    return (
        <div className="w-[70%] m-auto text-center mb-10">
            <div className='flex gap-x-2 gap-y-4 items-center flex-wrap justify-center'>
                {
                    Skills.map((item,index)=><SkillBox skill={item} key={index}/>)
                }
            </div>
        </div>
    )
}
