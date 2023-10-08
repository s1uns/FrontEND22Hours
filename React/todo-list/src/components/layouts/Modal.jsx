import React from 'react';
import ReactDom from 'react-dom';
import Button from './Button';
import './styles/Modal.css'

export default function Modal({ open, children, onClose }) {
  if (!open) return null;
  return ReactDom.createPortal(
    <div className="overlay">
      <div className='modal'>
        {children}
        <Button className='close-modal-btn' onClick={onClose}>Close</Button>
      </div>
    </div>
    ,
    document.getElementById('portal')
  )
}
