import React, { Component } from 'react';
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import CommentsContext from './CommentsContext'
import './App.css';

class App extends Component {
  state = {
    comments: [],
  };

  addComment = (newComment) => {
    //this is the function to add comments, add anything into the array
    this.setState({comments: [...this.state.comments, newComment]})
  }

  render() {
    return (
      <CommentsContext.Provider
        value={{
          comments: this.state.comments,
          addComment: this.addComment
        }}
      >
        <div className="App">
          <main>
            <h1>A posty post that posted via POST</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae labore officiis vitae! Quasi maxime, minima a doloribus soluta earum voluptates aspernatur, alias dicta assumenda esse iste repellat et. Cum, quia.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel aliquid quis minima quo aperiam similique amet dicta? Cumque libero magnam animi tenetur quis deleniti quisquam eveniet ut beatae molestias? Repudiandae?
            </p>
            <section>
              <CommentList />
              <CommentForm />
            </section>
          </main>
        </div>
      </CommentsContext.Provider>
    );
  }
}

export default App;
