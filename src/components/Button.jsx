import React from 'react'
import PropTypes from 'prop-types'

const VARIANTS = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
  danger: 'bg-red-600 text-white hover:bg-red-700',
}

export default function Button({ variant = 'primary', className = '', children, ...props }) {
  const cls = `px-4 py-2 rounded-md transition-shadow focus:outline-none focus:ring ${VARIANTS[variant] || VARIANTS.primary} ${className}`
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  )
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  className: PropTypes.string,
  children: PropTypes.node,
}
