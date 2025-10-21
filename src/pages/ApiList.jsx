import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

export default function ApiList() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('')
  const limit = 10

  useEffect(() => {
    let mounted = true
    setLoading(true)
    setError(null)
    fetch(`${API_URL}?_page=${page}&_limit=${limit}`)
      .then(r => {
        if (!r.ok) throw new Error('Network response was not ok')
        return r.json()
      })
      .then(json => { if (mounted) setData(prev => page === 1 ? json : [...prev, ...json]) })
      .catch(e => { if (mounted) setError(e.message) })
      .finally(() => mounted && setLoading(false))
    return () => { mounted = false }
  }, [page])

  const filtered = data.filter(d => d.title.includes(query) || d.body.includes(query))

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">API List (JSONPlaceholder)</h2>
      <Card>
        <div className="flex gap-2 mb-4">
          <input placeholder="Search..." className="flex-1 px-3 py-2 rounded border" value={query} onChange={e => setQuery(e.target.value)} />
          <Button onClick={() => { setPage(1); setData([]); }}>Refresh</Button>
        </div>

        {loading && <div className="p-4">Loading...</div>}
        {error && <div className="p-4 text-red-500">Error: {error}</div>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map(item => (
            <div key={item.id} className="p-3 border rounded bg-white dark:bg-slate-800">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">{item.body.slice(0, 120)}...</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 mt-4">
          <Button variant="secondary" onClick={() => setPage(p => Math.max(1, p - 1))}>Prev</Button>
          <div>Page {page}</div>
          <Button variant="secondary" onClick={() => setPage(p => p + 1)}>Next</Button>
        </div>
      </Card>
    </div>
  )
}
