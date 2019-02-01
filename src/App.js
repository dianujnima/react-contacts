import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Provider
import {Provider} from './Context';

//Components
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import Header from './components/partials/Header';
import About from './components/about/About';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Project Manager"/>
            <div className="container">
              <Switch>
                  <Route exact path="/" component={Contacts} />
                  <Route exact path="/add_contact" component={AddContact} />
                  <Route exact path="/about" component={About} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
