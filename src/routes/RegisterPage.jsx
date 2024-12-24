import React from 'react'
import { SignUp } from '@clerk/clerk-react'

const RegisterPage = () => {
  return (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
       <div className="bg-white p-6 rounded shadow-md">
         <SignUp SignIn='/ogin/'/>
       </div>
     </div>
  )
}

export default RegisterPage
