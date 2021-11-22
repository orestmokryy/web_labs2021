import { React } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './itemsTypes.css';

export default function ItemsTypes() {
  return (
    <Container>
      <div style={{ marginTop: 80 + 'px' }}></div>
      <Row>
        <Col>
          <a href="/#" className="item-type">
            <Card className="item-type-card">
              <Card.Img
                className="item-type-img"
                variant="top"
                src="https://ih1.redbubble.net/image.1399578696.7909/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg"
              />
              <Card.Footer className="text-center item-type-footer">Fantasy books</Card.Footer>
            </Card>
          </a>
        </Col>
        <Col>
          <a href="/#" className="item-type">
            <Card className="item-type-card">
              <Card.Img
                className="item-type-img"
                variant="top"
                src="https://pobedarf.ru/wp-content/uploads/2019/06/history-books-1024x768.jpg"
              />
              <Card.Footer className="text-center item-type-footer">History books</Card.Footer>
            </Card>
          </a>
        </Col>
        <Col>
          <a href="#" className="item-type">
            <Card className="item-type-card">
              <Card.Img
                className="item-type-img"
                variant="top"
                src="https://images-na.ssl-images-amazon.com/images/I/91MCGEHYsXL.jpg"
              />
              <Card.Footer className="text-center item-type-footer">Psychology books</Card.Footer>
            </Card>
          </a>
        </Col>
      </Row>
    </Container>
  );
}
