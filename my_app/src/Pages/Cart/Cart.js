import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card, Button, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
    removeFromCart,
    decrement,
    increment,
} from "../../store/itemSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Cart.css";

export default function Cart() {
    const cartItems = useSelector((state) => state.item.items);
    const dispatch = useDispatch();

    var filtered = cartItems.reduce((filtered, item) => {
        if (item.count > 0) {
            filtered.push(item);
        }
        return filtered;
    }, []);

    const totalPrice = filtered
        .map((item) => item.price * item.count)
        .reduce((a, b) => a + b, 0);

    return (
        <div>
            <h3 className="cart-title">SHOPPING CART</h3>
            <div>
                {filtered.map((book) => (
                    <Card className="cart-item">
                        <Card.Img variant="top" src={book.img} className="cart-img" />
                        <Card.Body className="cart-body">
                            <Row>
                                <Col>
                                    <Card.Title className="cart-item-title">
                                        {book.brand}
                                    </Card.Title>
                                </Col>
                                <Col style={{ display: "flex" }}>
                                    <Button
                                        onClick={() => dispatch(decrement(book))}
                                        variant="danger"
                                        className="decr-button"
                                    >
                                        -
                                    </Button>
                                    <Card.Text className="cart-count">{book.count}</Card.Text>
                                    <Button
                                        onClick={() => dispatch(increment(book))}
                                        variant="success"
                                        className="incr-button"
                                    >
                                        +
                                    </Button>
                                </Col>
                                <Col style={{ display: "flex" }}>
                                    <Button
                                        onClick={() => dispatch(removeFromCart(book))}
                                        variant="outline-danger"
                                        className="rmv-button"
                                    >
                                        Remove
                                    </Button>
                                    <Card.Text className="cart-price">{book.price} $</Card.Text>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                ))}
            </div>
            <h3 className="total-price">Total price: {totalPrice} $</h3>
            <div className="bottom-btns">
                <Link to="/catalog">
                    <Button className="bottom-btn" variant="outline-dark">
                        Go Back
                    </Button>
                </Link>

            </div>
        </div>
    );
}