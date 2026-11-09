'use client';

import React, { useEffect, useState } from "react";
import OnButton from '../../../assets/images/radiobutton/buttonon.png';
import OffButton from '../../../assets/images/radiobutton/buttonoff.png';

const ImageCarousel = ({ images }: { images: string[] }) => {
    const [tempIndex, setIndex] = useState(0);
    const [cycling, setCycling] = useState(true);
    const [check, setCheck] = useState(0);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        if (!cycling) return;
        const timer = setTimeout(() => setCounter(counter + 1), 3000);
        return () => clearTimeout(timer);
    }, [cycling, counter])

    const dif = cycling ? counter - check : 0;
    const index = (tempIndex + dif) % images.length;

    return <>
        <img 
         className="w-[42rem] md:h-[26rem] object-cover border-card-border border-4" 
         src={images[index]} alt="" 
         />
        <div className="flex gap-1 mt-2">
            {images.map((_, i) => 
                <img 
                 key={i}
                 style={{imageRendering: 'pixelated'}}
                 className="cursor-pointer h-6"
                 src={index === i ? OnButton.src : OffButton.src} 
                 onClick={() => { setCycling(false); setIndex(i); setCheck(counter) }}
                 alt=""
                 />
            )}
        </div>
    </>;
}

export default ImageCarousel;
