
import { initializeApp } from "firebase/app";
import {getAuth,signInWithPopup,GoogleAuthProvider,createUserWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth';
import{ getFirestore,doc,getDoc,setDoc,collection,writeBatch,query,getDocs} from 'firebase/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyBENAf36Dn4hCo5mY2Am7FMrB6-4i7oCH0",
  authDomain: "simple-shopping-1be13.firebaseapp.com",
  projectId: "simple-shopping-1be13",
  storageBucket: "simple-shopping-1be13.appspot.com",
  messagingSenderId: "199600453171",
  appId: "1:199600453171:web:0e9d40bc096cbfbe675546"
};


export const firebaseApp = initializeApp(firebaseConfig);

const googleProvider=new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt:"select_account"
})

export const auth=getAuth();
export const signInWithGooglePopup=()=>signInWithPopup(auth,googleProvider);


export const db=getFirestore();

export const createUserDocumentFromAuth=async (userAuth,additionalInformation={})=>{
  if(!userAuth) return;
  const userDocRef=doc(db,'users',userAuth.uid);
  const userDocSnapshot=await getDoc(userDocRef);
  
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

export const addCollectionAndDocuments=async(collectionKey,objectsToAdd)=>{
  
  const collectionRef=collection(db,collectionKey);

  const batch=writeBatch(db);

  objectsToAdd.forEach((object)=>{

    const docRef=doc(collectionRef,(object.title).toLowerCase());
    batch.set(docRef,object);
  })
  await batch.commit();
  console.log('done')
}


export const getCategoriesAndDocuments=async()=>{
  const collectionRef=collection(db,'categories');
  const q=query(collectionRef);
  const querySnapShot=await getDocs(q);
  const categoryMap=querySnapShot.docs.reduce((acc,docSnapShot)=>{
    const {title,items}=docSnapShot.data();
    acc[title.toLowerCase()]=items;
    return acc;
  },{});
  return categoryMap;
}



export const createUserAuthWithEmailAndPassword=async(email,password)=>{
  if(!(email||password)) return;
  return await createUserWithEmailAndPassword(auth,email,password);
}

export const signOutUser=async ()=>await signOut(auth);

export const onAuthStateChangedListner=(callback)=>onAuthStateChanged(auth,callback);
