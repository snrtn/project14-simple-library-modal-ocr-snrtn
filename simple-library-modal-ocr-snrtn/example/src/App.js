import React, { useState } from 'react'
import Modal from 'simple-library-modal-ocr-snrtn'

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
      <button onClick={openModal}>모달 열기</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <p>모달 내용입니다. 여기에 원하는 내용을 채워 넣으세요.</p>
      </Modal>
    </div>
  )
}

export default App
