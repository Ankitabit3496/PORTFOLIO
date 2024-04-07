import React from 'react'
import { Briefcase, DiamondPlus, Folder, GraduationCap, House, Mail, Sparkles } from 'lucide-react'
import { ModeToggle } from '@/components/ui/ModeToggle'
import { Button } from '../ui/button'
import Link from 'next/link'

type Props = {}

export default function Navbar({}: Props) {
    return (
        <div className="w-full h-full max-w-lg bg-primary flex justify-between items-center px-4 py-2 rounded-xl border m-4">
            <div className = 'flex justify-center items-center gap-4' >
            {/* home */}
            <Link href='#'><Button variant='ghost' size='icon'><House className = "text-primary-foreground" /></Button></Link>
            {/* Projects */}
            <Link href='#'><Button variant='ghost' size='icon'> <Folder className = "text-primary-foreground"/></Button></Link>
            {/* Experience */}
            <Link href='#'><Button variant='ghost' size='icon'><Briefcase className = "text-primary-foreground"/></Button></Link>
            {/* Education Section */}
            <Link href='#'><Button variant='ghost' size='icon'><GraduationCap className = "text-primary-foreground"/></Button></Link>
            {/* Contact us section */}
            <Link href='#'><Button variant='ghost' size='icon'><Mail className = "text-primary-foreground"/></Button></Link>
            </div>

            <div className = "flex justify-center items-center gap-2">
            {/* Toggle Theme*/}
            <ModeToggle />
            {/* Hire Me */}
            <Button className='flex justify-center items-center gap-2' variant='outline'>
            <DiamondPlus className = ''/>
             Hire Me
            </Button>
            </div>
        </div>
    )
}