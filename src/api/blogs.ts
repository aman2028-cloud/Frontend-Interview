export type Blog = {
  id: string
  title: string
  description: string
  category: string[]
  date: string
  coverImage: string
  content: string
}

export async function getBlogs(): Promise<Blog[]> {
  const res = await fetch("http://localhost:3001/blogs")

  if (!res.ok) {
    throw new Error("Failed to fetch blogs")
  }

  return res.json()
}
