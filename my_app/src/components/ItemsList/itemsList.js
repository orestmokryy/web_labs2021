import { React, Fragment } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Item from '../Item/item';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function itemsList() {
  return (
    <Fragment>
      <div style={{ marginTop: 60 + 'px' }}></div>
      <Container>
        <Row>
          <Col>
            <Item
              imgUrl="https://pickleseed.com/wp-content/uploads/2016/04/4-5.jpg"
              nameOfBook="The Black Book"
              description="Great read for making enemies"
              price="75"
            />
          </Col>
          <Col>
            <Item
              imgUrl="https://www.darrengygihomecollection.com/wp-content/uploads/2018/08/112-SpellBook.jpg"
              nameOfBook="Spellbook for goofing around"
              description="Arcane magic for dummies"
              price="60"
            />
          </Col>
          <Col>
            <Item
              imgUrl="https://images-na.ssl-images-amazon.com/images/I/71k8q06JWsL.jpg"
              nameOfBook="Necronomicon"
              description="Great book for necromancers"
              price="100"
            />
          </Col>
        </Row>
        <div style={{ marginTop: 60 + 'px' }}></div>

        <Row>
          <Col>
            <Item
              imgUrl="https://images-na.ssl-images-amazon.com/images/I/51LP-yh4CaL._SX331_BO1,204,203,200_.jpg"
              nameOfBook="Wikileaks: Warrior for Truth"
              description="The story behind man who scares CIA the most"
              price="200"
            />
          </Col>
          <Col>
            <Item
              imgUrl="https://images-na.ssl-images-amazon.com/images/I/51KWS1ewp9L._SX359_BO1,204,203,200_.jpg"
              nameOfBook="John McAfee: Un Terroriste Moderne"
              description="Learn what your governments fear"
              price="50"
            />
          </Col>
          <Col>
            <Item
              imgUrl="https://images-na.ssl-images-amazon.com/images/I/81ORZLkIt-L.jpg"
              nameOfBook="book or whatever"
              description="i told you all i know about this one"
              price="80"
            />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
