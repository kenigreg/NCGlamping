import React, { Component } from 'react';
import { getSingleSite, getLocation } from './Api';
import { Card } from 'react-bootstrap';
import Moment from 'react-moment';

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
              <Card.Text className="text-justify">{site.description}</Card.Text>
              <h4>Availability</h4>
              <Card.Text>
                <Moment format="DD MMM YYYY">{site.bookingsOpen}</Moment> to{' '}
                <Moment format="DD MMM YYYY">{site.bookingsClose}</Moment>
              </Card.Text>
            </Card.Body>
          </Card>
        )}
      </div>
    );
  }
}

export default SingleSite;
