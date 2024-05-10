"use client"

import { Header } from "@/components/Header";
import { useUser } from "@clerk/nextjs";
import React from "react";
import { currentUser } from '@clerk/nextjs/server';


const DashboardLayout = ({ children}: {children: React.ReactNode}) => {
  const {user} = useUser();
  console.log("currentuser", user)

  return(
    <div>
      <Header user={user}/>
      {children}
    </div>
  )
}

export default DashboardLayout