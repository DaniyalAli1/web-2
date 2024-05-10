import { currentUser } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export default async function Page() {
  const user = await currentUser();

  if (!user) {
    return NextResponse.json({message: "not logged in" })
  }

  return NextResponse.json({name: user.username})
}