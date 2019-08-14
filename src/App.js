import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import BookShelfState from "./context/bookShelf/BookShelfState";

import Container from "@material-ui/core/Container";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import SearchButton from "./components/layout/SearchButton";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Search from "./components/pages/Search";
import Book from "./components/books/Book";

function App() {
  return (
    <BookShelfState>
      <Router>
        <>
          <Navbar />
          <Container maxWidth="lg" className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/books/:id" component={Book} />
              <Route exact path="/sobre" component={About} />
              <Route exact path="/pesquisar" component={Search} history />
            </Switch>
          </Container>
          <SearchButton />
          <Footer />
        </>
      </Router>
    </BookShelfState>
  );
}

export default App;
