import React from 'react'

export default function SkillBox({skill}:{skill:string}) {
    return (
        <div className='bg-white px-4 py-2 rounded-full shadow-2xl'>{skill}</div>
    )
}
