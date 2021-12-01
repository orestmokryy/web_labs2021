import { React, useEffect, useState } from 'react';
import ItemsList from '../../components/ItemsList/itemsList';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Container } from 'react-bootstrap';

export default function Catalog() {
  const [input, setInput] = useState('');
  const [booksListDefault, setbooksListDefault] = useState();
  const [booksList, setbooksList] = useState();

  const fetchData = async () => {
    return await fetch('http://127.0.0.1:5000/books')
      .then(response => response.json())
      .then(data => {
        setbooksList(data);
        setbooksListDefault(data);
      });
  };

  const updateInput = async input => {
    const filtered = booksListDefault.filter(book => {
      return book.brand.toLowerCase().includes(input.toLowerCase());
    });
    setInput(input);
    setbooksList(filtered);
  };

  useEffect(async () => {
    await fetchData();
  }, []);

  function less_than_500() {
    const filtered = booksListDefault.filter(book => {
      return book.price < 500;
    });

    setbooksList(filtered);
  }

  function wow_only() {
    const filtered = booksListDefault.filter(book => {
      return book.brand.toLowerCase().includes('wow') && book.price < 500;
    });

    setbooksList(filtered);
  }

  return (
    <div>
      <div style={{ marginTop: 80 + 'px' }}></div>

      <SearchBar input={input} onChange={updateInput} something="brand" />
      <Container>
        <div style={{ marginTop: 20 + 'px' }}></div>
        <input type="checkbox" name="less_than_500" onChange={less_than_500} />
        <label for="less_than_500">less than 500$</label>
        <div style={{ marginLeft: 20 + 'px' }}></div>
        <input type="checkbox" name="wow_only" onChange={wow_only} />
        <label for="wow_only">only wow books</label>
      </Container>

      <ItemsList books={booksList} />
    </div>
  );
}
