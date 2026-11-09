'use client';

import React, { FC, ReactNode, useEffect, useState } from 'react';
import styles from './PageContainer.module.css';

// Replaces react-router's `location.state.from === 'home'`: the home page sets this
// right before navigating, and the next page to mount reads (then clears) it.
let navigatedFromHome = false;

export const markNavigatedFromHome = () => {
    navigatedFromHome = true;
};

const FadeIn: FC<{ children: ReactNode }> = ({ children }) => {
    const [fade] = useState(() => navigatedFromHome);

    useEffect(() => {
        navigatedFromHome = false;
    }, []);

    return <article className={fade ? styles['fade-in'] : ''}>{children}</article>;
};

export default FadeIn;
