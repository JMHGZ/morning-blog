import React, { Component } from "react";
import "./App.css";
import Nav from "./Nav";
import Footer from "./Footer";

class App extends Component {
  state = {
    isShowing: true,
    posts: [
      {
        title: "My first confetti blog post",
        content: "I have confetti!! I PUT IT EVERYWHERE!!!",
        user: "jmhgz"
      },
      {
        title: "Popo you pipo",
        content: "you MUST push your pipo, or your popo will have no payload",
        user: "cwill833"
      }
    ]
  };

  handleClick = event => {
    this.setState({
      isShowing: !this.state.isShowing
    });
  };

  // this is our render which handles our view
  render() {
    const title = <h1>Confetti Blog</h1>;
    const composedPosts = this.state.posts.map((item, index) => {
      return (
        <li key={index} className="post">
          <h3 className="postTitles">{item.title}</h3>
          <p>{item.content}</p>
          <h6>{item.user}</h6>
        </li>
      );
    });
    return (
      <div className="App container">
        <Nav />
        {this.state.isShowing ? title : null}
        <ul>{composedPosts}</ul>
        <button onClick={this.handleClick}>click meeeeee</button>
        <Footer />
      </div>
    );
  }
}

export default App;
