import React, { Component } from 'react';

export default class Detail extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="detail">
        <h1>{ this.props.name }</h1>
        <p>{ this.props.contents }</p>
      </div>
    )
  }
}
