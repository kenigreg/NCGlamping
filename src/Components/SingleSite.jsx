import React, { Component } from 'react';
import { getSingleSite, getLocation } from './Api';
import { Card } from 'react-bootstrap';

class SingleSite extends Component {
  state = {
    site: {},
    errSite: null,
    location: ''
  };

  componentDidMount() {
    const { id } = this.props;

    getSingleSite(id)
      .then(site => {
        console.log(site);
        this.setState({ site });
      })
      .catch(errSite => {
        this.setState({ errSite });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    const { site } = this.state;
    const postCode = site.postCode;

    if (site !== prevState.site && site) {
      getLocation(postCode).then(location => {
        this.setState({ location });
      });
    }
  }

  render() {
    const { location, site } = this.state;

    return (
      <div>
        {site && (
          <Card style={{ imageWidth: '18rem' }}>
            <Card.Img variant="top" src={site.siteImg} />
            <Card.Body>
              <Card.Title className="text-info font-weight-bold text-uppercase">
                {site.area}
              </Card.Title>
              <p className="text-danger font-weight-bold">
                Location: {location.admin_district}, {location.admin_county},{' '}
                {site.postCode}
              </p>
              <h2>About the Site</h2>
              <Card.Text>{site.description}</Card.Text>
            </Card.Body>
          </Card>
        )}
      </div>
    );
  }
}

export default SingleSite;
