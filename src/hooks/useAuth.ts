import {  setErrors } from 'actions/actionsNotes'
import { auth } from 'config/firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'

import { useDispatch } from 'react-redux'


const useAuth = () => {
  const dispatch = useDispatch()

   const signIn = async (email:string, password:string)=>{
    try {
         await signInWithEmailAndPassword(auth, email, password)
    } catch (error:any) {
      dispatch(setErrors(error.message))
    }
}


  return {signIn}
  
}

export default useAuth