import React from 'react'
import { SocialIcon } from 'react-social-icons';

export default function SocialAccount({url}:{url:string}) {
    return (
        <SocialIcon target='blank' url={url} style={{height:25,width:25}}/>
    )
}
