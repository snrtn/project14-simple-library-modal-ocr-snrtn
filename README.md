# Simple Modal for React

This library provides a simple and easy-to-use modal component for React applications. It is implemented using MUI (Material UI).

## Installation

To use this component, install it with the following command:

```bash
npm install simple-modal-library --save
```

## Usage

The modal component can be used as follows:

```bash
import React, { useState } from 'react';
import Modal from 'simple-library-modal-ocr-snrtn';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className='App'>
      <button onClick={openModal}>open modal</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
				<p>Employee Created!</p>
			</Modal>
    </div>
  )
}

export default App
```

## API

The Modal component accepts the following props:

`isOpen`: A boolean value determining whether the modal is visible.
`onClose`: A function called when the modal is closed.
`title`: The title of the modal. (Optional)
`children`: The content to be rendered inside the modal.

## Styling

To customize the style of the modal, modify the Modal.css file.

## License

This library uses the MIT license.
