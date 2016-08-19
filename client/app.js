import React, { Component } from 'react';
import { render } from 'react-dom';

import Router from 'rect-router';

import injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem} from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import Detail from './detail';
import AddDialog from './addDialog';

import Items from './items.json';

import './app.styl';

injectTapEventPlugin();

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedItem: {},
      items: Items,
      openDialog: false
    };
  }

  onClickAdd() {
    this.setState({
      openDialog: true
    });
  }

  renderListItem(item, key) {
    return (
      <ListItem
        key={key}
        primaryText={item.name}
        onTouchTap={() => {
          console.log("changed");
          this.setState({
            selectedItem: item
          });
        }}
        ></ListItem>
    );
  }

  render() {

    return (
      <MuiThemeProvider>
        <div id="page">
          <AppBar title="Material UI Test" ></AppBar>
          <List className="list">
            { this.state.items.map((item, i) => this.renderListItem(item, i) ) }
          </List>

          <Detail {...this.state.selectedItem}></Detail>

          <FloatingActionButton className="actionButton" secondary={true} onTouchTap={ () => this.onClickAdd()}>
            <ContentAdd />
          </FloatingActionButton>

          <AddDialog
            open={this.state.openDialog}
            onClose={() => this.setState({ openDialog: false })}
            onSubmit={(item) => this.setState({ items: [...this.state.items, item], openDialog: false})}
            />

        </div>
      </MuiThemeProvider>
    )
  }
}

render(<App />, document.getElementById('app'));
