import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '../containers/Home'
import About from '../containers/About'
import Topics from '../containers/Topics'
const App = () => (
  <Router>
    <div>
      <ul style={{display: 'inline-block', listStyleType: 'none'}}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
)

export default App