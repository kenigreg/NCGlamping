import React from 'react';
import { Card, Button, CardDeck } from 'react-bootstrap';
import Moment from 'react-moment';
import { Link } from '@reach/router';
import FilterSite from './FilterSite';
import { getSites, getSearchSite } from './Api';

class SiteList extends React.Component {
  state = {
    sites: [],
    searchTerm: '',
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

  componentDidUpdate(prevProps, prevState) {
    const { searchTerm } = this.state;
    if (searchTerm !== prevState.searchTerm) {
      getSearchSite(searchTerm).then(sites => {
        this.setState({ sites });
      });
    }
  }

  render() {
    const { searchOptions } = this.props;
    const { sites } = this.state;

    return (
      <div>
        <FilterSite
          searchOptions={searchOptions}
          onChange={this.handleChange}
        />
        <h1>Camp Sites</h1>
        {sites && (
          <div className="row">
            {sites.map(site => {
              return (
                <div key={site.id} className="col-md-3">
                  <div>
                    <CardDeck>
                      <Card style={{ imageWidth: '18rem' }}>
                        <Card.Img variant="top" src={site.siteImg} />
                        <Card.Body>
                          <Card.Title className="text-center">
                            {site.area.toUpperCase()}
                          </Card.Title>
                          <h6 className="text-info font-weight-bold">
                            Activities
                          </h6>
                          {site.activities.map(activity => {
                            return (
                              <div key={activity}>
                                <ul className="list-group list-group-flush">
                                  <li className="list-group-item text-dark">
                                    {activity}
                                  </li>
                                </ul>
                              </div>
                            );
                          })}
                          <br />
                          <h6 className="text-info font-weight-bold">
                            Pitches
                          </h6>
                          {site.pitches.map(pitch => {
                            return (
                              <div key={pitch}>
                                <ul className="list-group list-group-flush">
                                  <li className="list-group-item">{pitch}</li>
                                </ul>
                              </div>
                            );
                          })}
                          <br />
                          <h6 className="text-danger text-left">
                            Availability: <br />
                            <Moment format="DD MMM YYYY">
                              {site.bookingsOpen}
                            </Moment>{' '}
                            to{' '}
                            <Moment format="DD MMM YYYY">
                              {site.bookingsClose}
                            </Moment>
                          </h6>
                          <Link to={`/sites/${site.id}`}>
                            <Button variant="primary">Learn more</Button>
                          </Link>
                        </Card.Body>
                      </Card>
                    </CardDeck>
                    <br />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
  handleChange = event => {
    event.preventDefault();
    this.setState({ searchTerm: event.target.value });
  };
}

export default SiteList;
