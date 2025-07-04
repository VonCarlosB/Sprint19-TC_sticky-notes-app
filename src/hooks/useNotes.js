import { useContext, useState } from "react"
import ColorContext from "../context/ColorContext"
import { v4 as uuidv4 } from "uuid"

export function useColor(){
    return useContext(ColorContext)
}

export function useNotes() {
    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])

    const addNote = (text, color) => {
        if(text !== '' && notes.length < 10){
            const newNote = {
                id: uuidv4(),
                text,
                color
            }
            setNotes((notes) => [...notes, newNote])
            localStorage.setItem('notes', JSON.stringify([...notes, newNote]))
        }
    }

    const deleteNote = (noteId) => {
        console.log(noteId)
        const notas = JSON.parse(localStorage.getItem('notes'))
        const newNotes = notas.filter(note => 
            note.id !== noteId
        )
        setNotes(newNotes)
        localStorage.setItem('notes', JSON.stringify(newNotes))
    }

    return {notes, addNote, deleteNote}
}