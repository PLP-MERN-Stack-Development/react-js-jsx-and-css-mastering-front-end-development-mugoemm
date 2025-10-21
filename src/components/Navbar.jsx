import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContext'
import Button from './Button'

export default function Navbar() {
  const { toggleTheme } = useContext(ThemeContext)
  const linkCls = ({ isActive }) => `px-3 py-2 rounded ${isActive ? 'bg-slate-200 dark:bg-slate-700' : 'hover:bg-slate-100 dark:hover:bg-slate-700'}`
  return (
    <nav className="w-full border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="font-bold text-lg">Week3App</span>
          <div className="hidden sm:flex items-center gap-2">
            <NavLink to="/" className={linkCls}>Home</NavLink>
            <NavLink to="/tasks" className={linkCls}>Tasks</NavLink>
            <NavLink to="/api" className={linkCls}>API</NavLink>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary" onClick={toggleTheme}>Toggle Theme</Button>
        </div>
      </div>
    </nav>
  )
}
