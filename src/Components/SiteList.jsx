import React from 'react';
import { Card, Button, CardDeck } from 'react-bootstrap';
import Moment from 'react-moment';
import { Link } from '@reach/router';

const SiteList = props => {
  const { sites } = props;
  return (
    <div>
      <h1>Camp Sites</h1>
      <div className="row">
        {sites.map(site => {
          return (
            <div key={site.id} className="col-md-3">
              <div>
                <CardDeck>
                  <Card style={{ imageWidth: '18rem' }}>
                    <Card.Img variant="top" src={site.siteImg} />
                    <Card.Body>
                      <Card.Title>{site.area.toUpperCase()}</Card.Title>
                      <h6 className="text-info font-weight-bold">Activities</h6>
                      {site.activities.map(activity => {
                        return (
                          <div key={activity}>
                            <ul class="list-group">
                              <li class="list-group-item">{activity}</li>
                            </ul>
                          </div>
                        );
                      })}
                      <br />
                      <h6>
                        Availability:{' '}
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
    </div>
  );
};

export default SiteList;
