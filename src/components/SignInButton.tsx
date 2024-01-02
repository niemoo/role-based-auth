'use client';

import { useSession, signOut, signIn } from 'next-auth/react';
import Image from 'next/image';

const SignInButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto items-center">
        <p className="text-sky-600">{session.user.name}</p>
        <Image src={session.user.image ?? ''} alt={session.user.name ?? ''} className=" rounded-full" width={32} height={32} />
        <button onClick={() => signOut()} className="text-red-500">
          Sign Out
        </button>
      </div>
    );
  }

  return <button onClick={() => signIn()}>Sign In</button>;
};

export default SignInButton;
