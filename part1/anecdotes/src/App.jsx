import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0);
  
  const arr = Array(anecdotes.length).fill(0);
  const [votes, setVotes] = useState(arr);
  const [selectedMax, setSelectedMax] = useState(0);
  // with array
  const handleNextAnecdote = () => {
    const randIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randIndex);
  }
  const handleVote = (index) => {
    console.log(votes);
    const copy = [...votes];
    copy[index] += 1;
    // we get the index of the anecdote with the most votes
    const max = Math.max(...copy);
    setSelectedMax(copy.indexOf(max));
    console.log( copy.indexOf(max));
    setVotes(copy);
  }

  return (
    <>
    <Anecdote anecdotes={anecdotes} selected={selected} title="Anecdote Of The Day"/>
    <button onClick={handleNextAnecdote}>Next anecdote</button><br />
    <span>{votes[selected]} votes</span><br />
    <button onClick={() => handleVote(selected)}>vote</button>
    <Anecdote anecdotes={anecdotes} selected={selectedMax} title="Anecdote with most votes"/>
    <p>has {votes[selectedMax]} votes</p>
    </>
  )
}
const Anecdote = ({anecdotes, selected, title}) => {
  return (
    <>
    <h1>{title}</h1>
    <div>
      {anecdotes[selected]}
    </div>
    </>

  )
}
export default App