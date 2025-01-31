const Header = (props) => {
  console.log(props)
  return (
    <h1>{props.course}</h1>
  )
}




const Part1 = (props) => {
  return (
    <p>{props.part1} with {props.numberE1} excercises</p>
  )
}



const Part2 = (props) => {
  return (
    <p>{props.part2} with {props.numberE2} excercises </p>
  )
}


const Part3 = (props) => {
  return (
    <p>{props.part3} with {props.numberE3} excercises </p>
  )
}


const Content = (props) => {
  const part1 = 'Fundamentals of React'
  const excercises1 = 10
  const part2 = "Using props to pass data"
  const excercises2 = 7
  const part3 = "State of a component"
  const excercises3 = 14
  return (
    <>
      <Part1 part1={part1} numberE1={excercises1} />
      <Part2 part2={part2} numberE2={excercises2} />
      <Part3 part3={part3} numberE3={excercises3} />
    </>

  )
}

const Total = (props) => {
  return (
    <p> Total excercises: {props.numberE1 + props.numberE2 + props.numberE3}</p>
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
      <Header course={course} />
      <Content />
      <Total numberE1={part1.exercises} numberE2={part2.exercises} numberE3={part3.exercises} />
    </div>
  )
}

export default App