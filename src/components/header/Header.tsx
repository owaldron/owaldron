import React from 'react';
import Link from 'next/link';
import Owen from '../../assets/images/owensmall.png';
import FontToggle from '../font-toggle/FontToggle';

const Header = () => {
    return (
        <header className='flex mb-12 bg-header-gray border-b-4 border-header-accent text-white'>
            <div className='center flex justify-between items-end md:pb-4 pb-2 md:pt-0 pt-2'>
                <Link href='/' className='flex flex-col items-center md:mt-6 mt-2 '>
                    <img className='md:max-w-14 max-w-12' src={Owen.src} alt='' />
                    <h1 className='text-white md:block hidden text-2xl text-[1.75rem]'>
                        Owen Waldron
                    </h1>
                </Link>
                <div className='flex flex-col items-end gap-2'>
                    <FontToggle />
                    <div className='flex md:gap-8 gap-4 text-2xl'>
                        <Link className='hover-underline' href='/projects' >
                            Projects
                        </Link>
                        <Link className='hover-underline' href='/about' >
                            About
                        </Link>
                        <Link className='hover-underline' href='/logbook' >
                            Logbook
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
