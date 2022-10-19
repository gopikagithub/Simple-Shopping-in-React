
import { initializeApp } from "firebase/app";
import {getAuth,signInWithPopup,GoogleAuthProvider} from 'firebase/auth';
import{ getFirestore,doc,getDoc,setDoc} from 'firebase/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyBENAf36Dn4hCo5mY2Am7FMrB6-4i7oCH0",
  authDomain: "simple-shopping-1be13.firebaseapp.com",
  projectId: "simple-shopping-1be13",
  storageBucket: "simple-shopping-1be13.appspot.com",
  messagingSenderId: "199600453171",
  appId: "1:199600453171:web:0e9d40bc096cbfbe675546"
};


export const firebaseApp = initializeApp(firebaseConfig);

const provider=new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:"select_account"
})

export const auth=getAuth();
export const signInWithGooglePopup=()=>signInWithPopup(auth,provider);


export const db=getFirestore();
export const createUserDocumentFromAuth=async (userAuth)=>{
  const userDocRef=doc(db,'users',userAuth.uid);
  const userDocSnapshot=await getDoc(userDocRef);
  console.log(userDocSnapshot);
  console.log(userDocSnapshot.exists());

  if(!userDocSnapshot.exists()){

    const {displayName,email}=userAuth;
    const createdAt=new Date();

    try{
      await setDoc(userDocRef,{displayName,email,createdAt});
    }
    catch(error){
      console.log('Error occured while creating user doc in firestore',error.message);
    }
  }

  return userDocRef;

};
