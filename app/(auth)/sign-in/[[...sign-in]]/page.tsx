import React from 'react'
import { SignIn } from '@clerk/nextjs'

const page = () => {
  return (
    <div className='flex items-center justify-center h-screen w-full'>
        <SignIn path='/sign-in'/>
    </div>
  )
}

export default page