import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import BookShelfState from "./context/bookShelf/BookShelfState";

import Container from "@material-ui/core/Container";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import SearchBooks from "./components/search/SearchBooks";
import SearchButton from "./components/layout/SearchButton";

function App() {
  return (
    <BookShelfState>
      <Router>
        <>
          <Navbar />
          <Container maxWidth="lg" className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/sobre" component={About} />
              <Route
                exact
                path="/pesquisar"
                render={({ history }) => (
                  <SearchBooks
                    onChange={"updateBooksDetails"}
                    myBooks={"books"}
                  />
                )}
              />
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
