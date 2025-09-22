"use client"

import { createContext,useState } from "react"

export const ModalContext = createContext()

export default function ModalProvider({children}){
 const [isOpen, setIsOpen] = useState(null);

  const openModal = (type) => setIsOpen(type);
  const closeModal = () => setIsOpen(null);

 return(
    <ModalContext.Provider value={{isOpen,openModal,closeModal}}>
{children}
    </ModalContext.Provider>
 )
}