'use client';

import React, { ReactNode, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { markNavigatedFromHome } from "../../components/page-container/FadeIn";
import styles from './HomePage.module.css';

const links = [
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/logbook', label: 'Logbook' },
];

// Wraps the home page so clicking a nav link fades everything out before navigating.
// The links are real <a> tags so crawlers can follow them.
const HomeNav = ({ children }: { children: ReactNode }) => {
    const [faded, setFaded] = useState(false);
    const router = useRouter();

    const handleClick = (to: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
        // Let modified clicks (new tab, etc.) behave like normal links.
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
        event.preventDefault();
        setFaded(true);
        setTimeout(() => {
            markNavigatedFromHome();
            router.push(to);
        }, 1000);
    };

    return (
        <div className={"flex flex-col items-center text-white martian-mono md:gap-20 gap-12 pt-24 " + (faded ? 'opacity-0 ' + styles['fade-out'] : '')}>
            {children}
            <nav className='flex md:text-2xl text-xl md:justify-between md:min-w-[800px] items-center md:flex-row flex-col min-w-full gap-6'>
                {links.map(({ href, label }) =>
                    <Link key={href} href={href} className="hover-underline text-4xl jersey-20" onClick={handleClick(href)}>
                        {label}
                    </Link>
                )}
            </nav>
        </div>
    );
}

export default HomeNav;
