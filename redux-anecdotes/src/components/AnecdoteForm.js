import React from 'react'
import { useDispatch } from 'react-redux'
import { create } from '../reducers/anecdoteReducer'
import { removeNotification, setNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const handleCreateAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    const newAnecdote = await anecdoteService.create({content, votes: 0})
    dispatch(create(newAnecdote))
    dispatch(setNotification('Created new anecdote!'))
    setTimeout(() => dispatch(removeNotification()), 5 * 1000)
  }

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={handleCreateAnecdote}>
        <div><input name="anecdote" /></div>
        <button type="submit" >create</button>
      </form>
    </>
  )
}

export default AnecdoteForm