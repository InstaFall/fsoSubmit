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
<Part text={props.pArray[0].name} ex={props.pArray[0].exercises} />
<Part text={props.pArray[1].name} ex={props.pArray[1].exercises} />
<Part text={props.pArray[2].name} ex={props.pArray[2].exercises} />
</div>
)
}

const Total = (props) => {
return (
  <p>Number of exercises {props.pArray[0].exercises + props.pArray[1].exercises + props.pArray[2].exercises}</p>
)
}
  const App = () => {
    const course = 'Half Stack application development'
    const parts = [{
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header text={course}/>
      <Content pArray={parts}/>
      <Total pArray={parts}/>
    </div>
  )
}

export default App