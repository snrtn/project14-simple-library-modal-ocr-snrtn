import React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import './Modal.css'

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      aria-labelledby='customized-dialog-title'
      aria-describedby='customized-dialog-description'
    >
      <DialogTitle id='customized-dialog-title'>
        <IconButton
          aria-label='close'
          className='modal-close'
          onClick={onClose}
          size='large'
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <div className='modal-content'>{children}</div>
      </DialogContent>
    </Dialog>
  )
}

export default Modal
