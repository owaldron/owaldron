import React, { FC, useEffect, useState } from "react";
import PageContainer from "../../components/page-container/PageContainer";
import Box from "../../components/box/Box";
import { LogSeed, fetchSeeds, hashMessage, uploadSeed } from "./logbook-service";
import { Timestamp } from 'firebase/firestore';
import drawSplat from '../../services/splatter/splatter';
import './Logbook.css';
import Button from "../../components/button/Button";

const Logbook = () => {
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

    return <PageContainer>
        <Box label="Logbook">
            <div className="px-8 py-4">
                <h1 className="text-3xl mb-2">Leave Your Mark</h1>
                <p className="mb-3">
                    Write whatever you'd like. Your message here will be immediately hashed and used as a seed for a randomized mark left on this page.
                    Only you will ever know what you wrote, but anyone who visits will see the mark you left here.
                </p>
                <p className="mb-3">
                    You can write your name, a nice message, a mean message, a love poem, or random letters; the algorithm is indifferent.
                    One day, you will forget what you wrote here, even if it was your own name, but the mark you've left behind will remain.
                </p>
                <textarea className="text-black text-2xl w-full p-1" rows={1} value={message} onChange={event => setMessage(event.target.value)} placeholder="Write a message"/>
                <Button onClick={sendMessage} label="Hash Message Irreversibly"/>
                <div className="w-full flex flex-row-reverse justify-start bg-black flex-wrap-reverse mt-6">
                    {seeds.map(seed => <Mark seed={seed} key={seed.id} /> )}
                </div>
            </div>
        </Box>
    </PageContainer>
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

export default Logbook;
