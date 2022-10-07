import React from 'react'

const Header = ({ course }) => <h1>{course}</h1>

const Part = ({ part }) => <p>{part.name} {part.exercises}</p>

const Content = ({ parts }) => <>{parts.map(el => <Part key={el.id} part={el} />)}</>

const Sum = ({ parts }) => <p><b>Total of {parts.reduce((sum, el) => sum += el.exercises, 0)} exercises</b></p>

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Sum parts={course.parts} />
    </div>

  )
}

export default Course