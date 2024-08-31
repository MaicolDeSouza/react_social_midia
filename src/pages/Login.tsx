import React from 'react'
import {signInWithPopup} from 'firebase/auth'
import { auth, provider } from '../config/firebase'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()

    const loginWithGoogle = async ()=>{
      const result = await signInWithPopup(auth, provider)
      console.log(result);
      // Apos login redireciona para home
      navigate('/')
    }

  return (
    <div>
        <p>Login with google to continue...</p>
        <button onClick={loginWithGoogle}>Login with google</button>
    </div>
  )
}

export default Login