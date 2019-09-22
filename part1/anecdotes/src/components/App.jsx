import React, { useState } from 'react';
import Anecdote from './Anecdote';

const App = ({ anecdotes }) => {
  const defaultArrayData = Array(anecdotes.length).fill(0);
  const [selected, setSelected] = useState(0);
  const [selectedAnecdoteVote, updateVote] = useState(defaultArrayData);
  const [maxVote, setMaxVote] = useState(0);
  const [maxVoteAnecdotes, setMaxVoteAnecdotesIndex] = useState(0);


  const getRandomAnecdote = () => {
    const randomAnecdote = Math.floor(Math.random() * Math.floor(anecdotes.length));
    const selected = randomAnecdote;
    setSelected(selected);
  }

  const setAnecdoteVotes = () => {
    const copy = [...selectedAnecdoteVote];
    copy[selected] += 1;
    updateVote(copy);
    setMaxAnecdote(copy);
  }

  const setMaxAnecdote = (anecdoteVotes) =>{
    const maxVote = Math.max(...anecdoteVotes);
    setMaxVote(maxVote);
    const maxVoteAnecdotes = anecdoteVotes.indexOf(maxVote);
    setMaxVoteAnecdotesIndex(maxVoteAnecdotes)
  }

  return (
    <>
      <h2>Anecdote of the day</h2>
      <Anecdote
        value={anecdotes[selected]}
      />
      <Anecdote
        startText='has'
        value={selectedAnecdoteVote[selected]}
        endText='votes'
      />
      <button onClick={setAnecdoteVotes}>vote</button>
      <button onClick={getRandomAnecdote}>next anecdote</button>
      <h2>Anecdote with most votes</h2>
      <Anecdote
        value={anecdotes[maxVoteAnecdotes]}
      />
      <Anecdote
        startText='has'
        value={maxVote}
        endText='votes'
      />
    </>
  )
}



export default App;


