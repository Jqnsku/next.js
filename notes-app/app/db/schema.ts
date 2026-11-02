import { pgTable, serial, text, boolean, integer } from "drizzle-orm/pg-core"

export const notes = pgTable("notes", {
    id: serial("id").primaryKey(),
    content: text("content").notNull(),
    important: boolean("important").notNull().default(false),
    userId: integer("user_id").references(() => users.id),
})

export const blogs = pgTable("blogs", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    author: text("author").notNull(),
    url: text("url").notNull(),
    likes: integer("likes").notNull(),
})

export const users = pgTable("users", {
    id: serial("id").primaryKey(),
    username: text("username").notNull().unique(),
    name: text("name").notNull(),

})