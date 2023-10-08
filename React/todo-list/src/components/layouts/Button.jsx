import React from 'react'
import './styles/Button.css'

export default function Button({ type, variant, className, id, onClick, children }) {
    return (
        <button
            type={type ? type : 'button'}
            variant={variant}
            className={className ? `btn ${className}` : 'btn'}
            id={id}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
