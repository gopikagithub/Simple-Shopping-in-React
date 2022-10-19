
import { createUserDocumentFromAuth, signInWithGooglePopup } from '../../utils/firebase/firebase.utils';
import './sign-in-form.styles.scss';

const SignInForm=()=>{

    const logGoogleUser=async()=>{
        const {user}=await signInWithGooglePopup();
        const userDocRef=await createUserDocumentFromAuth(user);
       console.log(userDocRef);
        
    }


    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>sign in with Google Popup </button>

        </div>
    )
    
}
export default SignInForm;

