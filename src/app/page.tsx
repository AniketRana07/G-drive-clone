import React from 'react'
import { UserButton } from "@clerk/nextjs";
import { initUser } from './lib/initUser';

const Home = async() => {
  const user = await initUser()
  console.log(user)

  return (
    <div>
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}

export default Home