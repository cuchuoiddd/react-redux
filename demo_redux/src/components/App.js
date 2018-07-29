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
          <Link to="/edit">Sửa</Link>
        </li>
        <li>
          <Link to="/add">Thêm</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/edit" component={About} />
      <Route path="/add" component={Topics} />
    </div>
  </Router>
)

export default App