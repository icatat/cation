import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBRgl941vZtcCqIafszEPmFRFb9xKAOSDA',
  authDomain: 'cation-page.firebaseapp.com',
  databaseURL: 'https://cation-page-default-rtdb.firebaseio.com',
  projectId: 'cation-page',
  storageBucket: 'cation-page.appspot.com',
  messagingSenderId: '17626151667',
  appId: '1:17626151667:web:31559cc3809a0e75a29586',
};

const firebaseApp = initializeApp(firebaseConfig);
const projectStorage = getStorage(firebaseApp);
const projectFirestore = getFirestore(firebaseApp);

export { projectStorage, projectFirestore };
