const Header = (props) => {

  return (
    <h1>{props.course}</h1>
  )
}
const Content = (props) => {
  return (
    <>
      <p>{props.part1} with {props.numberE1} excercises</p>
      <p>{props.part2} with {props.numberE2} excercises </p>
      <p>{props.part3} with {props.numberE3} excercises </p>
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
  const part1 = 'Fundamentals of React'
  const excercises1 = 10
  const part2 = "Using props to pass data"
  const excercises2 = 7
  const part3 = "State of a component"
  const excercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} numberE1={excercises1} part2={part2} numberE2={excercises2} part3={part3} numberE3={excercises3} />
      <Total numberE1={excercises1} numberE2={excercises2} numberE3={excercises3} />
    </div>
  )
}

export default App