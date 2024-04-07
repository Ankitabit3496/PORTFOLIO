import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import React from 'react'

type Props = {
    //children: React.ReactNode;
    image: string;
    title: string;
    description: string;
    tags: string[];
    href: string;
}

export default function ItemCard({image, title, description, tags, href}: Props) {
  return (
    <Link className="flex justify-center items-center w-full h-full" href={href}>
        <div className ="flex flex-col justify-center items-center w-full h-full">
            <img src={image} alt={title} className="w-full h-full object-cover rounded-lg"/>
        </div>
        <div className ="flex flex-col justify-center items-center w-full h-full gap-1">
            <p className="flex justify-start items-center">
             <h3 className="text-lg font-semibold">{title}</h3>
             <span>{description}</span>
            </p>
            <div className="flex justify-start items-center">
            <span className="flex justify-center items-center gap-1">
                {tags.map((tag, index)=>(
                    <Badge
                    key={tag+index} 
                    variant="outline"
                    >
                    {tag}
                    </Badge>
                ))}
            </span>
            </div>
        </div>
    </Link>
  )
}