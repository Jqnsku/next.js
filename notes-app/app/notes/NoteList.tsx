"use client"

import Link from "next/link"
import { useState } from "react"

type Note = {
    id: number
    content: string
    important: boolean
}

const NoteList = ({ notes, showImportant }: { notes: Note[], showImportant: boolean }) => {
    // const [showImportant, setShowImportant] = useState(false)

    const notesToShow = showImportant
        ? notes.filter((note) => note.important)
        : notes

    return (
        <div>
            {/* <h2>Notes</h2> */}
            <div>

                {/* <button onClick={() => setShowImportant(!showImportant)}> */}
                <Link href={showImportant ? "/notes" : "/notes?important=true"}>
                    {showImportant ? "Show all" : "Show important only"}
                </Link>
            </div>
            {/* </button> */}
            <ul>
                {notes.map((note) => (
                    <li key={note.id}>
                        <Link href={`/notes/${note.id}`}>{note.content}</Link>
                        {note.important && <strong> (important) </strong>}
                    </li>
                ))}
            </ul>
        </div >
    )
}

export default NoteList