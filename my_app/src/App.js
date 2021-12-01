import { React } from 'react';
import Menu from './components/Menu/menu';
import Footer from './components/Footer/footer';
import SingleItemPage from './components/SingleItemPage/SingleItemPage';
import Main from './Pages/Main/Main';
import Cart from './Pages/Cart/Cart';
import Contacts from './Pages/Contacts/Contacts';
import Catalog from './Pages/Catalog/Catalog';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <Menu />
      <Route path="/" component={Main} exact />
      {/* <Route path="/blog" component={Blog} exact /> */}
      <Route path="/catalog" component={Catalog} exact />
      <Route path="/contacts" component={Contacts} exact />
      <Route path="/book/:id" component={SingleItemPage} exact />
      <Route path="/cart" component={Cart} exact />
      <Footer />
    </Router>
  );
}

export default App;
