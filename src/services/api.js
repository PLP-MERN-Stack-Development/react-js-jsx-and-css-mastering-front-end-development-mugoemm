const API_URL = 'https://jsonplaceholder.typicode.com'

export async function fetchPosts({ page = 1, limit = 10 } = {}) {
  const res = await fetch(`${API_URL}/posts?_page=${page}&_limit=${limit}`)
  if (!res.ok) throw new Error('Failed to fetch posts')
  const data = await res.json()
  return data
}

export async function fetchPost(id) {
  const res = await fetch(`${API_URL}/posts/${id}`)
  if (!res.ok) throw new Error('Failed to fetch post')
  return res.json()
}
