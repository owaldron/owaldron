'use client';

import React, { FC, useEffect, useState } from "react";
import { LogSeed, fetchSeeds, hashMessage, uploadSeed } from "./logbook-service";
import { Timestamp } from 'firebase/firestore';
import drawSplat from '../../services/splatter/splatter';
import './Logbook.css';
import Button from "../../components/button/Button";

// The interactive part of the logbook: message input and the marks pulled live from Firestore.
const LogbookForm = () => {
    const [message, setMessage] = useState('');
    const [seeds, setSeeds] = useState<LogSeed[]>([]);

    useEffect(() => {
        fetchSeeds()
          .then(seeds => setSeeds(seeds))
          .catch(error => console.log(error))
    }, [])

    const sendMessage = async () => {
        if (message === '') return;

        const hash = await hashMessage(message);
        setMessage('');
        const newSeed: LogSeed = {
            seed: hash,
            timesent: Timestamp.now()
        }
        newSeed.id = await uploadSeed(newSeed);
        setSeeds([
            ...seeds,
            newSeed
        ])
    }

    return <>
        <textarea className="text-black text-2xl w-full p-1" rows={1} value={message} onChange={event => setMessage(event.target.value)} placeholder="Write a message"/>
        <Button onClick={sendMessage} label="Hash Message Irreversibly"/>
        <div className="w-full flex flex-row-reverse justify-start bg-black flex-wrap-reverse mt-6">
            {seeds.map(seed => <Mark seed={seed} key={seed.id} /> )}
        </div>
    </>
}

type MarkProps = {
    seed: LogSeed;
}

const Mark: FC<MarkProps> = ({seed}) => {
    useEffect(() => {
        drawSplat(seed.id, seed.seed)
    }, [seed.id, seed.seed])

    return <div className="mark-box md:w-1/6 w-1/2 min-h-[128px] flex items-center justify-center">
        <canvas id={seed.id} height={32} width={32} className="absolute bg-black md:w-[128px] md:h-[128px] w-[96px] h-[96px] z-0" style={{imageRendering: 'pixelated'}}/>
        <div className="mark-date flex absolute md:w-[128px] md:h-[128px] w-[96px] h-[96px] z-10 items-center justify-center bg-black bg-opacity-50">
            {seed.timesent.toDate().toLocaleDateString()}
        </div>
    </div>
}

export default LogbookForm;
