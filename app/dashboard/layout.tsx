"use client"

import { Header } from "@/components/Header";
import { useUser } from "@clerk/nextjs";
import React from "react";
import { currentUser } from '@clerk/nextjs/server';


const DashboardLayout = ({ children}: {children: React.ReactNode}) => {
  const {user} = useUser();

  return(
    <div>
      <Header user={user}/>
      {children}
    </div>
  )
}

async function Page() {
  const user = await currentUser();

  if (!user) return <div>Not signed in</div>;

  return <div>
    console({user?.username}) </div>;
}
export default DashboardLayout