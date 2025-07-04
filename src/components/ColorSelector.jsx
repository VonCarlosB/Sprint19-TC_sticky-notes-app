import { useColor } from "../hooks/useNotes"

export default function ColorSelector(){
    const {color, changeColor} = useColor()
    return(
            <input
            type="color" 
            value={color}  
            onChange={(e) => changeColor(e.target.value)}></input>
    )
}