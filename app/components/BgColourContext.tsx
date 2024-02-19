'use client'

import { useState, createContext, useContext } from 'react';
import { create } from 'zustand'

const createStore = (colour: string) => {
  return create<{
    colour: string;
		setColour: (colour: string) => void;
  }>((set) => ({
    colour,
    setColour(newColour: string) {
      set({ colour: newColour })
    } 
  }))
}

export const BgColourContext = createContext<ReturnType<typeof createStore> | null>(null);

export const useBgColour = () => {
  if (!BgColourContext) {
    throw new Error('useBgColour must be used within a BgColourProvider')
  }
  return useContext(BgColourContext)
}

const BgColourProvider = ({ 
  colour,
  children 
}: { 
  colour: string;
  children: React.ReactNode; 
}) => {
  const [store] = useState(() => createStore(colour));

  return (
    <BgColourContext.Provider value={store}>
      {children}
    </BgColourContext.Provider>
  )
}

export default BgColourProvider;