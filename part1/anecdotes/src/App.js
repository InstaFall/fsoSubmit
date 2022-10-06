import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(7).fill(0))

  const rand = (max) => {
    return (Math.floor(Math.random() * max))
  }

  const vote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }
  const getMax = () => {
    for (let i = 0; i < points.length; i++) {
      if (points[i] == Math.max(...points)) return i
    }
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}<br />
      has {points[selected]} votes<br />
      <button onClick={vote}>vote</button>
      <button onClick={() => setSelected(rand(anecdotes.length))}>next anecdote</button>
      <h1>Most upvoted anecdote</h1>
      {anecdotes[getMax()]}<br />
      has {Math.max(...points)}
    </div>
  )
}

export default App