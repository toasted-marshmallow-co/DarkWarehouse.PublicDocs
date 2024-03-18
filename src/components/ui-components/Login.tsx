import React from "react";
import { SignInButton } from "./SignInButton";
import { CircleUser } from "lucide-react";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen gap-4 min-w-screen bg-stone-900">
      <div className="flex flex-col items-center w-full max-w-md gap-6 p-8 pt-10 rounded-lg ring-1 ring-stone-700">
        <CircleUser className="text-blue-300 size-12" />
        <div className="flex flex-col items-center w-full gap-2">
          <h1 className="text-4xl font-semibold text-center text-stone-200">Sign In</h1>
          <div className="pb-4 text-lg text-center text-stone-400">
            Sign in to access the <span className="font-bold ">Dark Warehouse</span> documentation.
          </div>
          <SignInButton />
        </div>
      </div>
    </div>
  );
}
