"use client";

import { AuthProvider, useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";

function ShinyCollectionContent() {
  const { user, signOutUser } = useUserAuth();
  const router = useRouter();

  async function handleSignOut() {
    try {
      await signOutUser();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 flex items-center border-b border-b-slate-950 bg-forestGreenMedium h-20 z-10">
      <img
        className="w-auto h-auto ml-5"
        src="https://fontmeme.com/permalink/241120/430f391912b78a5a029fb3bbe6080dd6.png"
        alt="ShinyDex"
      />
      <p className="text-xs mt-6 ml-2 text-orange-300">by: Luka Haasdyk</p>
      <button
        className="ml-auto mr-5 px-4 py-2 border flex gap-2 dark:bg-gray-800 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150"
        onClick={handleSignOut}
      >
        <span> Sign Out </span>
      </button>
    </header>
  );
}

export default function ShinyCollectionPage() {
  return (
    <AuthProvider>
      <ShinyCollectionContent />
    </AuthProvider>
  );
}