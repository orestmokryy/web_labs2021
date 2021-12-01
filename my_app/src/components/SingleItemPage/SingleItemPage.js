import React, { useEffect, useState, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from "../../store/itemSlice";
import axios from 'axios';

export default function SingleItemPage(props) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [appState, setAppState] = useState({});

  async function getBook() {
    const item = await axios.get(`http://127.0.0.1:5000/book/${id}`);
    setAppState(item.data);
  }

  useEffect(() => getBook(), []);


  return (
    <Fragment>

      <Button onClick={() => dispatch(addToCart(appState))} variant="outline-dark" style={{ marginTop: "20px", marginLeft: "1000px" }}>
        Add to Cart
      </Button>

      <Container>
        <div style={{ marginTop: 80 + 'px' }}></div>

        <Card>
          <Card.Img style={{ height: 200 + 'px' }} variant="top" src={appState.imgUrl} />
          <Card.Body>
            <Card.Title className="text-center">{appState.brand}</Card.Title>
            <Card.Text className="text-center">{appState.description}</Card.Text>
            <div
              style={{ marginTop: 20 + 'px', marginBottom: 20 + 'px', height: 1 + 'px', backgroundColor: 'grey' }}
            ></div>
            <div className="text-center">
              <h1 className="price">Price: {appState.price} $</h1>
            </div>
          </Card.Body>
        </Card>
      </Container>



      <div style={{ marginTop: 80 + 'px' }}></div>
    </Fragment>
  );
}
