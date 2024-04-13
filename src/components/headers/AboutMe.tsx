import { Folder, Globe, Mail } from 'lucide-react';
import React from 'react'
import { Badge } from '../ui/badge';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {data} from '@/lib/data';
import Link from 'next/link';

type Props = {
    name: string;
    role: string;
    availability: "available" | "open to work" | "unavailable";
    location: string;
    email: string;
    image: string;
    resume: string;
    currentCompany: {name: string; role:string; duration: string};
}

export default function AboutMe({name,role,availability,location,email,image,resume,currentCompany}: Props) {
  return (
        <div className="max-w-lg w-full h-full flex flex-col justify-center items-start gap-4 p-2 px-4 space-y-4 mb-4">
        <div className="w-full flex justify-between items-center">
            {/*role, avail*/}
            <div className="inline-flex gap-1 justify-center items-center text-sm">
                <Globe size={18}/>
                {role}
            </div>
            <div className="inline-flex gap-1 justify-center items-center text-sm">
                <Badge className={cn(availability === "available"? "bg-green-500 text-green-200" : (availability === "open to work"? "bg-yellow-500 text-yellow-200": "bg-red-500 text-red-200")) }></Badge>
                {availability === "available"? "Available": availability === "open to work"}
            </div>
        </div>
        <div className="w-full flex justiy-between items-center gap-11">
            {/* name, location, currentCompany, image */}
            <div className="flex flex-col justify-center items-start">
                <h1 className="text-3xl font-bold"> Hello, I'm {name}</h1>
                <p className="semi-bold">Looking for SWE roles..</p>
                <p>{currentCompany.role} @ {currentCompany.name} for {currentCompany.duration} yrs</p>
            </div>
            <img src={image} alt={name} className="h-24 w-24 object-cover rounded-full"></img>
        </div>
        <div className="flex justify-center items-center gap-2">
            {/* Resume, email */}
            <Link href={`mailto:${email}`}>
                <Button variant="outline" className="flex justify-center items-center gap-2">
                    <Mail size="18"/>
                    Email Me
                </Button>
            </Link>
            <Link href={resume}>
                <Button variant="outline" className="flex justify-center items-center gap-2">
                    {/*Resume Button */}
                    <Folder size="18"/>
                    Resume
                </Button>
            </Link>
        </div>
    </div>
  )
}