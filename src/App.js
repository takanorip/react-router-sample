import React, { Component } from 'react';
import { render } from 'react-dom';
import { IndexRoute, Link, Router, Route, browserHistory } from 'react-router';

import styl from './App.styl';

class App extends Component {
  render() {
    return (
      <div className="main">
        <ul className="navi">
          <li className="navi__bt"><Link to="/">index</Link></li>
          <li className="navi__bt"><Link to="/a">page A</Link></li>
          <li className="navi__bt"><Link to="/b">page B</Link></li>
        </ul>
        <div className="text">
          { this.props.children }
        </div>
      </div>
    );
  }
}

class Index extends Component {
  render() {
    return <div>Index</div>;
  }
}

class PageA extends Component {
  render() {
    return <div>A</div>;
  }
}

class PageB extends Component {
  render() {
    return <div>B</div>;
  }
}

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="/a" component={PageA} />
      <Route path="/b" component={PageB} />
    </Route>
  </Router>
), document.querySelector('#app'));
