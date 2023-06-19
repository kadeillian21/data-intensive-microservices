'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    })
    router.refresh()
  }

  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword({
      email,
      password,
    })
    router.refresh()
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto"
            src="favicon-yellow.svg"
            alt="Your Company"
            width={100}
            height={100}
          />
          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to Data Dive
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action="#" method="POST">
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0a67bd] sm:text-sm sm:leading-6"
              value={email} // Bind the value to the email state
              onChange={(e) => setEmail(e.target.value)} // Update the email state on input change
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            <div className="text-sm">
              <a href="#" className="font-semibold text-[#00509D] hover:text-[#0a67bd]">
                Forgot password?
              </a>
            </div>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#0a67bd] sm:text-sm sm:leading-6"
              value={password} // Bind the value to the password state
              onChange={(e) => setPassword(e.target.value)} // Update the password state on input change
            />
          </div>
        </div>

        <div>
          <button
            type="button" // Change the type to button
            className="flex w-full justify-center rounded-md bg-[#00296B] px-3 py-1.5 text-sm font-semibold leading-6 text-[#FFD500] shadow-sm hover:bg-[#00509D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00296B]"
            onClick={void handleSignIn} // Call handleSignIn on button click
          >
            Sign in
          </button>
        </div>
      </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            <a href="/signup" className="font-semibold leading-6 text-[#00509D] hover:text-[#0a67bd]">
              New to Data Dive?  Sign up here.
            </a>
          </p>
        </div>
      </div>
    </>
  )
}