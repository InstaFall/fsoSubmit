import { useState } from 'react'

// Button component
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

// Header component
const Header = ({ h, text }) => {
  switch (h) {
    case `h1`: return (<h1>{text}</h1>)
    case `h2`: return (<h2>{text}</h2>)
    case `h3`: return (<h3>{text}</h3>)
    case `h4`: return (<h4>{text}</h4>)
    case `h5`: return (<h5>{text}</h5>)
    case `h6`: return (<h6>{text}</h6>)
    default: return (<h1>Title</h1>)
  }
}

const Statistics = ({ good, neutral, bad }) => {
  const sum = good + neutral + bad

  if (sum == 0) return <>No feedback given. Use the buttons to give feedback.</>

  return (
    <>
      good {good}<br />
      neutral {neutral}<br />
      bad {bad}<br />
      average {sum / 3}<br />
      positive {(good / sum) * 100} %
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header h='h1' text='give feedback' />
      <Button onClick={() => setGood(good + 1)} text='good' />
      <Button onClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button onClick={() => setBad(bad + 1)} text='bad' />
      <Header h='h2' text='statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App