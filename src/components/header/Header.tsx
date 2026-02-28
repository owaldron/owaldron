import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Owen from '../../assets/images/owensmall.png';
import Switch from '@mui/material/Switch';

const Header = () => {
    const [isAltFont, setIsAltFont] = useState(
        localStorage.getItem('theme-font') === 'alt'
    );

    useEffect(() => {
        localStorage.setItem('theme-font', isAltFont ? 'alt' : 'default');

        if (isAltFont) {
            document.body.classList.add('font-alt');
        } else {
            document.body.classList.remove('font-alt');
        }
    }, [isAltFont]);


    return (
        <header className='flex mb-12 bg-header-gray border-b-4 border-header-accent text-white'>
            <div className='center flex justify-between items-end md:pb-4 pb-2 md:pt-0 pt-2'>
                <Link to='/' className='flex flex-col items-center md:mt-6 mt-2 '>
                    <img className='md:max-w-14 max-w-12' src={Owen} alt='' />
                    <h1 className='text-white md:block hidden text-2xl text-[1.75rem]'>
                        Owen Waldron
                    </h1>
                </Link>
                <div className='flex flex-col items-end gap-2'>
                    <div className='flex flex-row items-center'>
                        <h2 className={isAltFont ? "text-2xl jersey-15" : "text-xl lato-regular"} >
                            {isAltFont ? "Cooler font?" : "Easier font?"}
                        </h2>
                        <Switch
                            checked={isAltFont}
                            onChange={() => setIsAltFont(!isAltFont)}
                            aria-label="Trouble reading?"
                            defaultChecked />
                    </div>
                    <div className='flex md:gap-8 gap-4 text-2xl'>
                        <Link className='hover-underline' to={'/projects'} >
                            Projects
                        </Link>
                        <Link className='hover-underline' to={'/about'} >
                            About
                        </Link>
                        <Link className='hover-underline' to={'/logbook'} >
                            Logbook
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;