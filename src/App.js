import React from 'react';
import { Container } from 'react-bootstrap';
import { Router } from '@reach/router';
import NavBar from './Components/NavBar';
import Jumbo from './Components/Jumbo';
import SiteList from './Components/SiteList';
import SingleSite from './Components/SingleSite';

class App extends React.Component {
  state = {
    searchOptions: [
      'camping',
      'yurts',
      'caravans',
      'shepards huts',
      'hobbit holes',
      'elven ruins',
      'communes'
    ]
  };

  render() {
    const { searchOptions } = this.state;

    return (
      <div className="App">
        <NavBar />
        <Jumbo />
        <Container>
          <Router>
            <SiteList path="/" searchOptions={searchOptions} />
            <SingleSite path="/sites/:id" />
          </Router>
        </Container>
      </div>
    );
  }
}

export default App;
