import Header from '@/components/works/Header'
import LiveLink from '@/components/works/LiveLink'
import Photos from '@/components/works/Photos'
import TechnicalSheets from '@/components/works/TechnicalSheets'
import UseCases from '@/components/works/UseCases'
import porjects from '@/dummy/porjects'
import { Project } from '@/types/Project'
import { notFound } from 'next/navigation'
import React from 'react'

type props = {
    params:Promise<{id:string}>
}

export default async function page({params}:props) {
    const {id} = await params
    const project:Project|undefined = porjects.find(porject=>porject.id.toString()===id.toString())
    if(!project)
    {
        notFound()
    }
    return (
        <div className='my-[55px] flex justify-center'>
            <div className='w-[82%] md:w-[70%] margin-x-auto'>
                <Header title={project.title} headline={project.headline}/>
                {project?.livelink&&<LiveLink link={project.livelink}/>}
                {project.usecases&&<UseCases usecases={project.usecases}/>}
                <TechnicalSheets skills={project.skills}/>
                <Photos images={project.images}/>
            </div>
        </div>
    )
}