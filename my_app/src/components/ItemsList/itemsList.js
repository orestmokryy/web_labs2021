import { Container, Card, Col, Row } from 'react-bootstrap';
import Item from '../Item/item';

import React from 'react';
function ItemsList(props) {
  const { books } = props;
  if (!books || books.length === 0) return <p>No books, sorry</p>;
  return (
    <Container>
      <div style={{ marginTop: 80 + 'px' }}></div>

      <Row>
        {books.map(book => {
          return (
            <Col lg={3} key={book.id}>
              <Card key={book.id} className="list">
                <Item brand={book.brand} description={book.description} price={book.price} id={book.id} />
              </Card>
              <div style={{ marginTop: 80 + 'px' }}></div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
export default ItemsList;
