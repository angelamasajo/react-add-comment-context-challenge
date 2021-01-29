import React, { Component } from 'react'
import CommentsContext from './CommentsContext'

export default class CommentForm extends Component {
  static contextType = CommentsContext

  handleSubmit = (ev) => {
    ev.preventDefault()
    const { author, comment } = ev.target

    //using the context info in here
    this.context.addComment({
      author: author.value,
      comment: comment.value,
    })


    //clears the form after submission
    author.value = ''
    comment.value = ''
  }

  render() {
    return (
      <div className='CommentForm'>
        <h3>Add a comment</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='author'>Author:</label>
            <input type='text' id='author' />
          </div>
          <div>
            <label htmlFor='comment'>Comment:</label>
            <textarea id='comment' />
          </div>
          <button type='submit'>
            Post comment
          </button>
        </form>
      </div>
    )
  }
}
