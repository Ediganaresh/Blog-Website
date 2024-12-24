import React from 'react'
import { SignIn } from '@clerk/clerk-react'

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md">
        <SignIn signUpUrl='/register/'/>
      </div>
    </div>
  )
}

export default LoginPage
