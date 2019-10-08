import React from 'react';
import { Card, Button } from 'react-bootstrap';

const SiteList = props => {
  const { sites } = props;
  return (
    <div>
      {sites.map(site => {
        return (
          <div key={site.id}>
            <Card style={{ imageWidth: '18rem' }}>
              <Card.Img variant="top" src={site.siteImg} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default SiteList;
