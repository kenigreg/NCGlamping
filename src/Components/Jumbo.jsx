import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import img3 from '../assets/img3.jpg';

const Jumbo = props => {
  return (
    <div>
      <Jumbotron
        style={{
          backgroundImage: `url(${img3})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          imageHeight: '400px'
        }}
        fluid
      >
        <Container>
          <h1 className="text-danger">Welcome to Greg's Camping Holiday</h1>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;
