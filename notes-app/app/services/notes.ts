import { eq } from "drizzle-orm"
import { db } from "../db"
import { notes } from "../db/schema"


export const getNotes = async (importantOnly: boolean) => {
    if (importantOnly) {
        return db.query.notes.findMany({
            where: eq(notes.important, true),
        })
    }
    return db.query.notes.findMany()
}

const localNotes = [
    { id: 1, content: "next.js utilizes React Server Components", important: true },
    { id: 2, content: "next.js is built on top of React", important: true },
    {
        id: 3,
        content: "next.js supports both static and dynamic rendering",
        important: false,
    },
]

let nextId = 4

// export const getNotes = () => {
//     return notes
// }

export const getNoteById = async (id: number) => {
    return db.query.notes.findFirst({
        where: eq(notes.id, id)
    })
    const result = await db
        .select()
        .from(notes)
        .where(eq(notes.id, id))
    // return localNotes.find((note) => note.id === id)

    return result[0]
}

export const toggleImportance = async (id: number) => {
    const note = await getNoteById(id)

    // const note = localNotes.find((note) => note.id === id)
    if (note) {
        await db
            .update(notes)
            .set({ important: !note.important })
            .where(eq(notes.id, id))
        // note.important = !note.important
    }
}

export const addNote = async (
    content: string, important: boolean) => {
    await db.insert(notes).values({
        content,
        important
    })
}
// localNotes.push({ id: nextId++, content, important })