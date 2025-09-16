"use client"

import { useState } from "react"

function useModal() {
    const [isOpen, setIsOpen] = useState(null)
    const OpenModal = (type) => {
     return  setIsOpen(type)
     
    }
    const CloseModal = () => {
        return setIsOpen(null)
    }
    return {isOpen,OpenModal,CloseModal}
}

export default useModal