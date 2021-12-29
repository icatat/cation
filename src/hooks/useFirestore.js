import { useState, useEffect } from 'react';
import { projectFirestore, projectStorage } from '../firebase/conf';
import { doc, collection, query, where, onSnapshot } from 'firebase/firestore';

const useFirestore = (collectionName) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const q = query(collection(projectFirestore, collectionName));

    const unsub = onSnapshot(q, (querySnapshot) => {
      let documents = [];
      querySnapshot.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setDocs(documents);
    });

    return () => unsub();
  }, [collectionName]);

  return { docs };
};

export default useFirestore;
