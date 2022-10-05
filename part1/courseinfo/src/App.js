const Header = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}

const Part = (props) => {
  return(
  <p>{props.text} {props.ex}</p>
  )
}

const Content = (props) => {
return(
<div>
<Part text={props.p1.name} ex={props.p1.exercises} />
<Part text={props.p2.name} ex={props.p2.exercises} />
<Part text={props.p3.name} ex={props.p3.exercises} />
</div>
)
}

const Total = (props) => {
return (
  <p>Number of exercises {props.p1.exercises + props.p2.exercises + props.p3.exercises}</p>
)
}
  const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
      name: 'Fundamentals of React',
      exercises: 10
    }
    const part2 = {
      name: 'Using props to pass data',
      exercises: 7
    }
    const part3 = {
      name: 'State of a component',
      exercises: 14
    }

  return (
    <div>
      <Header text={course}/>
      <Content p1={part1} p2={part2} p3={part3}/>
      <Total p1={part1} p2={part2} p3={part3}/>
    </div>
  )
}

export default App