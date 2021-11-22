import { React, Fragment } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import BlogArticle from '../BlogArticle/blogArticle';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function BlogArticlesList() {
  return (
    <Fragment>
      <div style={{ marginTop: 60 + 'px' }}></div>

      <Container>
        <Row>
          <Col>
            <BlogArticle
              imgUrl="https://pickleseed.com/wp-content/uploads/2016/04/4-5.jpg"
              heading="People you shouldnt trust"
              publishedBy="Jeffery Epstein"
              publishedOn="20-11-2020"
            />
          </Col>
          <Col>
            <BlogArticle
              imgUrl="https://anylang.net/sites/default/files/covers/1984.jpg"
              heading="2022 preview"
              publishedBy="George Orwell"
              publishedOn="21-09-2020"
            />
          </Col>
          <Col>
            <BlogArticle
              imgUrl="https://m.media-amazon.com/images/I/51cO0pN6I4L._AC_SY580_.jpg"
              heading="WELCOME,  PILGRIM,  TO  THE  GREAT  JOURNEY  TOWARD  THE  END  OF  ALL  THINGS"
              publishedBy="CIA(probably)"
              publishedOn="06-07-2020"
            />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
