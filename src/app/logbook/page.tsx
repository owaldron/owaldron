import React from "react";
import PageContainer from "../../components/page-container/PageContainer";
import Box from "../../components/box/Box";
import { pageMetadata } from "../../content/site";
import LogbookForm from "./LogbookForm";

export const metadata = pageMetadata({
    title: 'Logbook',
    description: "Leave your mark on Owen Waldron's logbook: write any message and it's irreversibly hashed into a seed "
        + 'for a unique, randomly generated pixel splat that every visitor can see.',
    path: '/logbook',
});

export default function Logbook() {
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
                <LogbookForm />
            </div>
        </Box>
    </PageContainer>
}
