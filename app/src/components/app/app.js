//Core
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Components
//import Layout from '../layout/layout';
import Dashboard from '../../routes/dashboard/dashboard';

class App extends Component {
  state = {
    currentTheme: ''
  }

  updateTheme = (newTheme) => {
    this.setState({...this.state, currentTheme: newTheme});
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={() => <Dashboard theme={this.state.currentTheme}/>}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
