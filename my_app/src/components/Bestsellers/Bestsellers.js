import { React, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

import ItemsList from '../../components/ItemsList/itemsList';

export default function Bestsellers() {
  const [appState, setAppState] = useState({
    books: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `/bestsellers`;
    fetch(apiUrl)
      .then(res => res.json())
      .then(books => {
        setAppState({ loading: false, books: books });
      });
  }, [setAppState]);
  return (
    <Container>
      <ItemsList books={appState.books} />
    </Container>
  );
}
