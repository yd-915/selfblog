import { Document } from "mongodb"

export type Post = {
  _id: string
  created: Date
  postContent: string
  title: string
  topic: string
  metaDescription: string
  userId: string
  keywords: string,
} & AppProps

export type AppProps = {
  availableTokens: number
  posts: Post[]
  postId?: string | null
}

export type UserDB = {
  availableTokens: number
  auth0Id: string
} & Document