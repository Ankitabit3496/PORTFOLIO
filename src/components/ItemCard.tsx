import { Badge } from '@/components/ui/badge';
import { ChevronRight } from 'lucide-react';
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
    <Link className="flex justify-center items-center w-full h-full flex-1 gap-4 p-2" href={href}>
        <div className ="flex flex-col justify-center items-center h-full">
            <img src={image} width={32} height={32} alt={title} className="w-16 h-16 object-cover rounded-lg"/>
        </div>
        <div className ="flex flex-col justify-center items-start w-full h-full gap-2 flex-1">
            <span className="text-sm">
             <span className="text-base font-semibold">{title}</span>
             {" - "}
             {description}
            </span>
            <span className="flex justify-start items-center gap-1 capacity-60">
                {tags.map((tag, index)=>(
                    <Badge
                    key={tag+index} 
                    className="z-10"
                    >
                    {tag}
                    </Badge>
                ))}
            </span>
        </div>
        <div className ="p-2 pr-4">
           <ChevronRight />
        </div>
    </Link>
  )
}