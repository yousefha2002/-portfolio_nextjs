import React from 'react'

type props = {
    title:string,
    headline:string
}

export default function Header({title,headline}:props) {
    return (
        <div>
            <h3 className='headerTitle'>{title}</h3>
            <h4 className='mb-4'>{headline}</h4>
        </div>
    )
}
