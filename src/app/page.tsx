import React from "react";
import Owen from '../assets/images/owen.png';
import HomeNav from "./_home/HomeNav";
import { pageMetadata, siteDescription } from "../content/site";

export const metadata = pageMetadata({
    description: siteDescription + ' Browse his projects, experience, and logbook.',
    path: '/',
    image: Owen.src,
});

export default function HomePage() {
    return (
        <HomeNav>
            <div className='flex flex-col items-center md:mt-8 mt-2 '>
                <img className='md:max-w-96 max-w-32 md:pb-2 pb-1' src={Owen.src} alt='' />
                <h1 className='text-5xl text-white'>Owen Waldron</h1>
            </div>
        </HomeNav>
    );
}
