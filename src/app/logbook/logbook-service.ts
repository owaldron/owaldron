import { collection, getDocs, addDoc, query, orderBy } from 'firebase/firestore';
import { Timestamp } from 'firebase/firestore';
import { db } from '../../services/firebase';

type LogSeed = {
    id?: string;
    seed: string;
    timesent: Timestamp;
}

// Sha-256 function taken from:
// https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest
async function hashMessage(message: string) {
    const msgUint8 = new TextEncoder().encode(message); // encode as (utf-8) Uint8Array
    const hashBuffer = await window.crypto.subtle.digest("SHA-256", msgUint8); // hash the message
    const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, "0"))
      .join(""); // convert bytes to hex string
    return hashHex;
}

const fetchSeeds = async () => {
    const galleryCollection = collection(db, 'logs');
    const search = query(galleryCollection, orderBy('timesent', 'asc'));
    const snapshot = await getDocs(search);
    const logs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    } as LogSeed));
    return logs
};

const uploadSeed = async (newSeed: LogSeed) => {
    const docRef = await addDoc(collection(db, 'logs'), newSeed);
    return docRef.id;
}

export type { LogSeed };
export { fetchSeeds, hashMessage, uploadSeed };
