import React from 'react';

export default function SkillBox({ skill }: { skill: string }) {
    return (
        <div
        className="
        bg-gray-100 
        text-gray-800 
        px-5 py-2 
        rounded-full 
        shadow-md 
        cursor-default 
        select-none
        transition-transform duration-300 ease-in-out
        hover:scale-105 hover:shadow-lg
        font-semibold
        text-sm sm:text-base
    "
    title={skill}
    >
    {skill}
    </div>
    );
}