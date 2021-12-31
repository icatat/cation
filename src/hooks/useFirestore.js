import { useState, useEffect } from 'react';
import { projectFirestore, projectStorage } from '../firebase/conf';
import {
  doc,
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
} from 'firebase/firestore';

const useFirestore = (collectionName) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const q = query(
      collection(projectFirestore, collectionName),
      orderBy('year', 'desc')
    );

    const unsub = onSnapshot(q, (querySnapshot) => {
      let documents = {};

      querySnapshot.forEach((doc) => {
        if (documents[doc.data().year]) {
          documents[doc.data().year].push({ ...doc.data(), id: doc.id });
        } else {
          documents[doc.data().year] = [{ ...doc.data(), id: doc.id }];
        }
      });
      setDocs(documents);
    });

    return () => unsub();
  }, [collectionName]);

  return { docs };
};

export default useFirestore;
