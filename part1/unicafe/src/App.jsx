import { useState } from 'react'

const Statistics = ({good, neutral, bad}) => {
  const feedbacks = good +neutral+ bad;

  return (
    feedbacks ? 
    (<>
      <StatisticLine text="good" value={good}/>
      <StatisticLine text="neutral" value={neutral}/>
      <StatisticLine text="bad" value={bad}/>
      <StatisticLine text="average" value={(good - bad) /(good+bad+neutral)}/>
      <StatisticLine text="positive" value={good /(good+bad+neutral)*100 + ' %'}/>
    </>):(<p>no feedback has been given</p>)
  )
}
const StatisticLine = (props) => {
  return (
      <tr>
        <td>{props.text}</td>      
        <td> {props.value}</td>
      </tr>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0);
  
  const handleFeedback = (feedback) => {
    if(feedback == 1) {
      setGood(good+1);
    }
    else if(feedback == 0) {
      setNeutral(neutral+1);
    }
    else {
      setBad(bad+1);
    }
  }

  return (
    <>
      <h2>Give FeedBack</h2>
      <button onClick={() =>handleFeedback(1)}>good</button>
      <button onClick={() =>handleFeedback(0)}>neutral</button>
      <button onClick={() =>handleFeedback(-1)}>bad</button>
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

export default App
