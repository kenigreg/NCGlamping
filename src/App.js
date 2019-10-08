import React from 'react';
import { Container } from 'react-bootstrap';
import NavBar from './Components/NavBar';
import Jumbo from './Components/Jumbo';
import { getSites } from './Components/Api';
import SiteList from './Components/SiteList';

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
    ],
    sites: [],
    errSites: null
  };

  componentDidMount() {
    getSites()
      .then(sites => {
        this.setState({ sites });
      })
      .catch(errSites => {
        this.setState({ errSites });
      });
  }

  render() {
    const { sites } = this.state;

    return (
      <div className="App">
        <NavBar />
        <Jumbo />
        <Container>
          <SiteList sites={sites} />
        </Container>
      </div>
    );
  }
}

export default App;
