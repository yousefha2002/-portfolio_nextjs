import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { imageSource } from '@/types/enums';

type props = {
    image: string;
    title: string;
    description: string;
    id: number;
    githubLink: string;
};

export default function WorkBox({ image, title, description, id, githubLink }: props) {
    return (
        <div className="bg-white rounded-b-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
            {/* Project Image */}
            <Image 
                alt={title} 
                src={`${imageSource.works}${image}`} 
                height={200} 
                width={1000} 
                className="w-full h-[160px] object-cover"
            />

            {/* Content */}
            <div className="p-4 flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
                <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
            </div>

            {/* Footer Actions */}
            <div className="px-4 py-3 border-t flex justify-between items-center">
                <Link 
                    href={`/works/${id}`} 
                    className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-1.5 rounded-md transition-colors"
                >
                    View
                </Link>
                <Link href={githubLink} target="_blank" rel="noopener noreferrer">
                    <Image 
                        src={`${imageSource.direct}github.webp`} 
                        alt="GitHub" 
                        width={28} 
                        height={28} 
                        className="hover:scale-110 transition-transform"
                    />
                </Link>
            </div>
        </div>
    );
}