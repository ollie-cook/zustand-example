'use client'

import { useBgColour } from './BgColourContext'
import { inconsolata }  from '@/app/fonts'

export default function Controls() {
  let obj: { colour: string; setColour: (colour: string) => void; } | undefined;
  obj = useBgColour()?.();
  const colour = obj?.colour;
  const setColour = obj?.setColour;

  //const { colour, setColour } = useColourHook?.()

  const shuffleBackground = () => {
    let color = '#';
    for (let i = 0; i < 6; i++) {
      const random = Math.floor(Math.random() * 16);
      color += random.toString(16);
    }

    setColour?.(color)
  }

  return (
    <div className="relative w-5/6 h-32 bg-teal-500 rounded-md flex flex-col gap-4 justify-center items-center px-2 md:w-48 md:h-96">
      <button 
        className="p-2 bg-teal-800 rounded-md text-white hover:bg-teal-900"
        onClick={shuffleBackground}
      >
        Shuffle Background Colour
      </button>
      <div className="h-8 aspect-square" style={{backgroundColor: colour}}>

      </div>
      <p className={`absolute bottom-1 left-2 ${inconsolata.className}`}>Client Component</p>
    </div>
  )
}