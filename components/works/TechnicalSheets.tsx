import React from 'react'
import BreakLine from '../ui/BreakLine'

export default function TechnicalSheets({skills}:{skills:string[]}) {
    return (
        <div className='my-[40px]'>
                <h3 className="headerTitle">Technical Sheet</h3>
                <h4 className='text-[16px]'>Code technologies and skills I got involved with while working on this project.</h4>
                <BreakLine/>
                <ul className=' list-[circle] px-4'>
                    {
                        skills.map((skill,index)=><h3 className='RegularTitle' key={index+"s1"}>{skill}</h3>)
                    }
                </ul>
            </div>
    )
}
