"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

export const useCartStore = create(persist(
    (set) => ({
        counter: 0,
        addToCart: () => set((state) => ({ counter: state.counter + 1 })),
        resetCart: () => set({ counter: 0 }),
    }),
    {
        name: "cart-storage",
      
    }
))