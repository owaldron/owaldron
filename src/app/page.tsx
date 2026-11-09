import React from "react";
import Link from "next/link";
import Owen from '../assets/images/owen.png';
import { pageMetadata, siteDescription } from "../content/site";

export const metadata = pageMetadata({
    description: siteDescription + ' Browse his projects, experience, and logbook.',
    path: '/',
    image: Owen.src,
});

const links = [
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/logbook', label: 'Logbook' },
];

export default function HomePage() {
    return (
        <div className="flex flex-col items-center text-white martian-mono md:gap-20 gap-12 pt-24">
            <div className='flex flex-col items-center md:mt-8 mt-2 '>
                <img className='md:max-w-96 max-w-32 md:pb-2 pb-1' src={Owen.src} alt='' />
                <h1 className='text-5xl text-white'>Owen Waldron</h1>
            </div>
            <nav className='flex md:text-2xl text-xl md:justify-between md:min-w-[800px] items-center md:flex-row flex-col min-w-full gap-6'>
                {links.map(({ href, label }) =>
                    <Link key={href} href={href} className="hover-underline text-4xl jersey-20">
                        {label}
                    </Link>
                )}
            </nav>
        </div>
    );
}
