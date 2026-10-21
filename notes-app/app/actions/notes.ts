"use server"

import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import { addNote } from "../services/notes"
import { toggleImportance } from "../services/notes"

export const toggleNoteImportance = async (formData: FormData) => {
    const id = Number(formData.get("id"))
    toggleImportance(id)
    revalidatePath(`/notes/${id}`)
    revalidatePath("/notes")
}

export const createNote = async (FormData: FormData) => {
    const content = FormData.get("content") as string
    const important = FormData.get("important") === "on"
    addNote(content, important)

    revalidatePath("/notes")
    redirect("/notes")
}