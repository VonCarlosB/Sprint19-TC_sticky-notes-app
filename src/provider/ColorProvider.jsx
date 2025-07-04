import { useState } from 'react'
import ColorContext from '../context/ColorContext.jsx'

export function ColorProvider({ children }){
    const [color, setColor] = useState('#ffff00')

    const changeColor = (newColor) => {
        setColor(newColor)
    }
    
    return(
        <ColorContext.Provider value={{color, changeColor}}>
            {children}
        </ColorContext.Provider>
    )
}