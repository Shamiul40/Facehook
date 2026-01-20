import React from 'react'

export default function LoginForm() {
  return (
    <form className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]">
      {/* <!-- email --> */}
      <div className="mb-6">
        <label className="block text-sm lg:text-lg leading-[138%] text-white mb-2" htmlFor="email">Email</label>
        <input
          className="w-full rounded-md border border-gray-400/10  p-3 lg:p-4 text-white focus:outline-none focus:ring-2 "
          name="email"
          type="email"
          id="email"
        />
      </div>
      {/* <!-- password --> */}
      <div className="mb-6">
        <label className="block text-sm lg:text-lg leading-[138%] text-white mb-2" htmlFor="password">Password</label>
        <input
          className="w-full rounded-md border border-gray-400/10 bg-lighterDark p-3 lg:p-4 text-white focus:outline-none focus:ring-2 focus:ring-lwsGreen"
          name="password"
          type="password"
          id="password"
        />
      </div>
      {/* <!-- Submit --> */}
      <button
        className="w-full rounded-md bg-green-400 py-3 lg:py-4 font-bold  transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-lwsGreen"
        type="submit"
      >
        Login
      </button>
    </form>
  )
}
