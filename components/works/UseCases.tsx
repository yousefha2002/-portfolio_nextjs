import React from 'react'
import UseCaseBox from './UseCaseBox'
import { useCase } from '@/types/Project'

export default function UseCases({usecases}:{usecases:useCase[]}) {
    return (
        <div>
            {
                usecases.map((usecase,index)=>
                {
                    return <UseCaseBox usecase={usecase} key={index+'q1'}/>
                })
            }
        </div>
    )
}
