import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import About from "./components/pages/About";
import BookList from "./components/books/BookList";
import SearchBooks from "./components/search/SearchBooks";
import SearchButton from "./components/layout/SearchButton";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <BookList books={"books"} onChange={"updateBooksDetails"} />
            )}
          />

          <Route
            exact
            path="/pesquisar"
            render={({ history }) => (
              <SearchBooks onCChange={"updateBooksDetails"} myBooks={"books"} />
            )}
          />

          <Route exact path="/sobre" component={About} />
        </Switch>
        <SearchButton />
        <Footer />
      </>
    </Router>
  );
}

export default App;
