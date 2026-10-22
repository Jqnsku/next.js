import { getNotes } from "../services/notes"
import NoteList from "./NoteList"

const Notes = async ({
    searchParams,
}: {
    searchParams: Promise<{important?: string }>
}) => {
    const { important } = await searchParams
    const showImportant = important === "true"

    const allNotes = getNotes()
    const notes = showImportant
    ? allNotes.filter((note) => note.important)
    :allNotes

    // const notes = getNotes()
    return (
        <div>
            <h2>Notes</h2>
            <NoteList notes={notes} />
        </div>
    )
}

export default Notes