import { useDispatch, useSelector } from "react-redux"
import { updateVotes } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"

const Anecdote = ({ anecdote, handleClick }) => {
  return(
    <div>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
      </div>
      <button onClick={handleClick}>vote</button>
    </div>
  )
}

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const sortAnecdotes = (anecdotes) => {
    const copy = [...anecdotes]
    return copy.sort(( a, b ) => b.votes - a.votes)
  }

  const anecdotes = useSelector(({ anecdotes, filter }) => {
    if ( filter === 'ALL') {
      return sortAnecdotes(anecdotes)
    }
    return sortAnecdotes(
      anecdotes.filter((anecdote) => anecdote.content.toLowerCase().includes(filter))
    ) 
  })

  const voteAnecdote = (anecdote) => {
    dispatch(updateVotes(anecdote.id, anecdote))
    dispatch(setNotification(`You voted for '${anecdote.content}'`, 5))
  }

  return(
    <ul>
      {anecdotes.map(anecdote =>
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => {
            voteAnecdote(anecdote)
            }
          }
        />
      )}
    </ul>
    
  )
}

export default AnecdoteList