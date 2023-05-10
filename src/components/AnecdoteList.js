import { useDispatch, useSelector } from "react-redux"
import { voteAnecdote } from "../reducers/anecdoteReducer"
import { removeNotification, setNotification } from "../reducers/notificationReducer"

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
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    if ( filter === 'ALL') {
      return anecdotes
    }
    return anecdotes.filter((anecdote) => anecdote.content.toLowerCase().includes(filter))
  })

  return(
    <ul>
      {anecdotes.map(anecdote =>
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => {
            dispatch(voteAnecdote(anecdote.id))
            dispatch(setNotification(`You voted for '${anecdote.content}'`))
            setTimeout(() => {
              dispatch(removeNotification())
            }, 5000)
            }
          }
        />
      )}
    </ul>
    
  )
}

export default AnecdoteList