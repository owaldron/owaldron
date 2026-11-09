'use client';

import React, { useEffect, useState } from 'react';
import Switch from '@mui/material/Switch';

export const FONT_STORAGE_KEY = 'theme-font';
export const ALT_FONT_CLASS = 'font-alt';

// Runs in <head> before first paint (see app/layout.tsx) so returning visitors
// who picked the alternate font don't see a flash of the default one.
export const fontInitScript = `try{if(localStorage.getItem('${FONT_STORAGE_KEY}')==='alt')document.documentElement.classList.add('${ALT_FONT_CLASS}')}catch(e){}`;

const FontToggle = () => {
    // Start false so server and client markup match; sync from the DOM after mount.
    const [isAltFont, setIsAltFont] = useState(false);

    useEffect(() => {
        setIsAltFont(document.documentElement.classList.contains(ALT_FONT_CLASS));
    }, []);

    const toggle = () => {
        const next = !isAltFont;
        setIsAltFont(next);
        document.documentElement.classList.toggle(ALT_FONT_CLASS, next);
        try {
            localStorage.setItem(FONT_STORAGE_KEY, next ? 'alt' : 'default');
        } catch {}
    };

    return (
        <div className='flex flex-row items-center'>
            <h2 className={isAltFont ? "text-2xl jersey-15" : "text-xl lato-regular"} >
                {isAltFont ? "Cooler font?" : "Easier font?"}
            </h2>
            <Switch
                checked={isAltFont}
                onChange={toggle}
                aria-label="Trouble reading?" />
        </div>
    );
};

export default FontToggle;
