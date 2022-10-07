import Course from './components/Course'

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    },
    {
      name: `Angular`,
      id: 3,
      parts: [
        {
          name: 'Introduction',
          exercises: 5,
          id: 1
        },
        {
          name: 'Chapter I',
          exercises: 12,
          id: 2
        },
        {
          name: 'Chapter II',
          exercises: 10,
          id: 3
        }
      ]
    },
    {
      name: 'Lorem ipsum dolor sit amet',
      id: 4,
      parts: [
        {
          name: 'Ultrices tincidunt arcu non sodales',
          exercises: 500,
          id: 1
        },
        {
          name: 'Sagittis id consectetur purus ut faucibus',
          exercises: 654,
          id: 2
        }
      ]
    }
  ]

  return (
    courses.map(el => <Course key={el.id} course={el} />)
  )
}

export default App