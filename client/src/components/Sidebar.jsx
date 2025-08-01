import { Protect, useClerk, useUser } from '@clerk/clerk-react'
import {
  Eraser,
  FileText,
  Hash,
  House,
  Scissors,
  SquarePen,
  Users,
  Image,
  LogOut,
} from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/ai', label: 'Dashboard', Icon: House },
  { to: '/ai/write-article', label: 'Write Article', Icon: SquarePen },
  { to: '/ai/blog-titles', label: 'Blog Titles', Icon: Hash },
  { to: '/ai/generate-images', label: 'Generate Images', Icon: Image },
  { to: '/ai/remove-background', label: 'Remove Background', Icon: Eraser },
  { to: '/ai/remove-object', label: 'Remove Object', Icon: Scissors },
  { to: '/ai/review-resume', label: 'Review-Resume', Icon: FileText },
  { to: '/ai/community', label: 'Community', Icon: Users },
]

const Sidebar = ({ sidebar, setSidebar }) => {
  const { user } = useUser()
  const { signOut, openUserProfile } = useClerk()

  return (
    <div
      className={`w-60 bg-white border-r border-gray-200 flex flex-col justify-between
      items-center max-sm:absolute top-14 bottom-0 left-0 transition-all duration-300 ease-in-out
      ${sidebar ? 'translate-x-0' : 'max-sm:-translate-x-full'}`}
    >
      {/* User Info */}
      <div className='my-7 w-full'>
        <img
          src={user.imageUrl}
          alt='User avatar'
          className='w-14 h-14 rounded-full mx-auto'
        />
        <h1 className='mt-1 text-center font-semibold text-gray-800'>
          {user.fullName}
        </h1>

        {/* Nav Items */}
        <div className='px-6 mt-5 text-sm text-gray-600 font-medium flex flex-col gap-1'>
          {navItems.map(({ to, label, Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/ai'}
              onClick={() => setSidebar(false)}
              className={({ isActive }) =>
                `px-3.5 py-2.5 flex items-center gap-3 rounded transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-[#3C81F6] to-[#9234EA] text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              <Icon className='w-4 h-4' />
              <span>{label}</span>
            </NavLink>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className='w-full border-t border-gray-200 p-4 px-6 flex items-center justify-between'>
        <div
          onClick={openUserProfile}
          className='flex gap-3 items-center cursor-pointer'
        >
          <img
            src={user.imageUrl}
            alt='User thumbnail'
            className='w-10 h-10 rounded-full object-cover'
          />
          <div>
            <h1 className='text-sm font-medium'>{user.fullName}</h1>
            <p className='text-xs text-gray-500'>
              <Protect plan='premium' fallback='Free'>Premium</Protect> Plan
            </p>
          </div>
        </div>
        <LogOut
          onClick={signOut}
          className='w-5 h-5 text-gray-400 hover:text-gray-700 transition cursor-pointer'
        />
      </div>
    </div>
  )
}

export default Sidebar
