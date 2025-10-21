import React, { useState, useMemo } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import Card from '../components/Card'
import Button from '../components/Button'

function TaskItem({ t, onToggle, onDelete }) {
  return (
    <div className="flex items-center justify-between gap-4 p-2 border-b last:border-b-0">
      <label className="flex items-center gap-3">
        <input type="checkbox" checked={t.completed} onChange={() => onToggle(t.id)} />
        <span className={t.completed ? 'line-through text-slate-400' : ''}>{t.text}</span>
      </label>
      <Button variant="danger" onClick={() => onDelete(t.id)}>Delete</Button>
    </div>
  )
}

export default function Tasks() {
  const [tasks, setTasks] = useLocalStorage('tasks', [])
  const [text, setText] = useState('')
  const [filter, setFilter] = useState('all')

  const add = () => {
    if (!text.trim()) return
    setTasks([...tasks, { id: Date.now(), text: text.trim(), completed: false, createdAt: new Date().toISOString() }])
    setText('')
  }

  const toggle = (id) => setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
  const remove = (id) => setTasks(tasks.filter(t => t.id !== id))

  const filtered = useMemo(() => {
    if (filter === 'active') return tasks.filter(t => !t.completed)
    if (filter === 'completed') return tasks.filter(t => t.completed)
    return tasks
  }, [tasks, filter])

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Task Manager</h2>
      <Card>
        <div className="flex gap-2">
          <input value={text} onChange={e => setText(e.target.value)} className="flex-1 px-3 py-2 rounded border" placeholder="Add task..." />
          <Button onClick={add}>Add</Button>
        </div>
        <div className="mt-4">
          <div className="flex gap-2 mb-3">
            <Button variant={filter === 'all' ? 'primary' : 'secondary'} onClick={() => setFilter('all')}>All</Button>
            <Button variant={filter === 'active' ? 'primary' : 'secondary'} onClick={() => setFilter('active')}>Active</Button>
            <Button variant={filter === 'completed' ? 'primary' : 'secondary'} onClick={() => setFilter('completed')}>Completed</Button>
          </div>
          <div className="border rounded divide-y">
            {filtered.length === 0 ? <div className="p-4 text-slate-500">No tasks</div> : filtered.map(t => (
              <TaskItem key={t.id} t={t} onToggle={toggle} onDelete={remove} />
            ))}
          </div>
        </div>
      </Card>
    </div>
  )
}
