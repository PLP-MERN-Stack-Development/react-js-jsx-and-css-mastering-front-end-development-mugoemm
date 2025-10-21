import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 mt-8">
      <div className="max-w-5xl mx-auto px-4 py-6 text-center text-sm text-slate-600 dark:text-slate-400">
        © {new Date().getFullYear()} Week3App — Built with React & Tailwind
      </div>
    </footer>
  )
}
