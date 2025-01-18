import React from 'react'
import BreakLine from '../ui/BreakLine'
import { useCase } from '@/types/Project'

export default function UseCaseBox({usecase}:{usecase:useCase}) {
    return (
        <div className='my-[40px]'>
            <h3 className='headerTitle'>{usecase.role}</h3>
            <BreakLine/>
            {
                usecase.functions.map((func,index)=><h3 className='RegularTitle' key={index+"u1"}>{func}</h3>)
            }
        </div>
    )
}
