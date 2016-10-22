import React, { Component } from 'react';
import { render } from 'react-dom';
import { IndexRoute, Link, Router, Route, browserHistory } from 'react-router';

import styl from './App.styl';

class App extends Component {
  render() {
    return (
      <div className="main">
        <ul className="navi">
          <li className="navi__bt"><Link to="/">TOP</Link></li>
          <li className="navi__bt"><Link to="/about">ABOUT</Link></li>
          <li className="navi__bt"><Link to="/works">WORKS</Link></li>
        </ul>
        <div className="text">
          { this.props.children }
        </div>
      </div>
    );
  }
}

class Top extends Component {
  render() {
    return <div>Top</div>;
  }
}

class About extends Component {
  render() {
    return <div>About</div>;
  }
}

class Works extends Component {
  render() {
    return <div>Works</div>;
  }
}

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Top} />
      <Route path="/about" component={About} />
      <Route path="/works" component={Works} />
    </Route>
  </Router>
), document.getElementById('app'));
