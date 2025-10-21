import React from 'react'

export default function Card({ title, children, className = '' }) {
  return (
    <div className={`bg-white dark:bg-slate-800 shadow-sm rounded-lg p-4 ${className}`}>
      {title && <h3 className="text-lg font-semibold mb-2 text-slate-800 dark:text-slate-100">{title}</h3>}
      <div className="text-slate-700 dark:text-slate-200">{children}</div>
    </div>
  )
}
