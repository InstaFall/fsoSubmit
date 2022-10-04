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
<Part text={props.array[0].name} ex={props.array[0].exercises} />
<Part text={props.array[1].name} ex={props.array[1].exercises} />
<Part text={props.array[2].name} ex={props.array[2].exercises} />
</div>
)
}

const Total = (props) => {
return (
  <p>Number of exercises {props.array[0].exercises + props.array[1].exercises + props.array[2].exercises}</p>
)

}
const App = () => {
  const course = 'Half Stack application development'

  const pArray = [
    { name: 'Fundamentals of React', exercises: 10 },
    { name: 'Using props to pass data', exercises: 7 },
    { name: 'State of a component', exercises: 14 }
  ]

  return (
    <div>
      <Header text={course}/>
      <Content array={pArray}/>
      <Total array={pArray}/>
    </div>
  )
}

export default App