'use client'
import { BiUser,BiCategory } from 'react-icons/bi';
import { GiSkills } from 'react-icons/gi';
import { AiOutlineFilePdf } from 'react-icons/ai';
export default [
    {
        id:1,
        title:"About",
        link:"",
        icon:BiUser
    },
    {
        id:2,
        title:"Skills",
        link:"skills",
        icon:BiCategory
    },
    {
        id:3,
        title:"Works",
        link:"works",
        icon:GiSkills
    },
    {
        id:4,
        title:"Resume",
        link:"resume",
        icon:AiOutlineFilePdf
    }
]