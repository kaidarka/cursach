import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../index";
import firebase from "firebase/compat";

const useFirestore = (collection) => {
    const { firestore } = useContext(Context);
    const [docs, setDocks] = useState([]);

    useEffect(() => {
        const unsub = firestore.collection(collection)
            .orderBy('image', 'desc')
            .onSnapshot((snap) => {
                let documents = [];
                snap.forEach(doc => {
                    documents.push({...doc.data(), id: doc.rooms})
                });
                setDocks(documents);
            });

        return () => unsub();

    }, [collection])

    return { docs };
};

export default useFirestore;