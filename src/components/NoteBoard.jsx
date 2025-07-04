import Note from '../components/Note'
import { useNotes } from '../hooks/useNotes'
import { useState } from 'react'
import ColorSelector from './ColorSelector'
import { useColor } from '../hooks/useNotes'

export default function NoteBoard(){
    const [texto, setTexto] = useState('')
    const {notes, addNote, deleteNote} = useNotes()
    const {color} = useColor()
    
    return(
        <>
            <h2>Nueva nota</h2>
            <input 
            type="text" 
            value={texto} 
            placeholder="Nota" 
            onChange={(e) => setTexto(e.target.value)}></input>
            <br />
            <ColorSelector />
            <br />
            <button onClick={() => addNote(texto, color)}>Crear nota</button>

            <h2>NoteBoard</h2>
            <ul>
                {notes.length>0 ? notes.map((note) => {
                    return <li key={note.id}><Note id={note.id} text={note.text} color={note.color} deleteNote={deleteNote}/></li>
                }) : <p>No hay notas</p>}
            </ul>
        </>
        
    )
}