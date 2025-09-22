"use client"

import { ModalContext } from "../context/ModalContext"
import { useContext } from "react"

function useModal() {
   return useContext(ModalContext)
}

export default useModal