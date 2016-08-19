import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

export default class AddDialog extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      contents: ''
    };
  }

  onCancel() {
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  onSubmit() {
    const { name, contents } = this.state;

    if (!name || !contents) return;

    if (this.props.onSubmit) {
      this.props.onSubmit({name, contents});
    }
  }

  render() {
    const actions = [
      <FlatButton
        label="cancel"
        primary={true}
        onTouchTap={ () => this.onCancel() }
      />,
      <FlatButton
        label="submit"
        primary={false}
        onTouchTap={ () => this.onSubmit() }
      />
    ];

    return (
      <Dialog open={this.props.open} actions={actions} >

        <TextField hintText="name" value={this.state.name} onChange={ e => this.setState({ name: e.target.value })}/>
        <TextField hintText="contents" rows={3} value={this.state.contents} onChange={ e => this.setState({ contents: e.target.value })} />

      </Dialog>
    )
  }
}