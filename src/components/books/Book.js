import React, { useContext, useEffect } from "react";
//import { Link } from "react-router-dom";
import dayjs from "dayjs";

import BookShelfContext from "../../context/bookShelf/bookShelfContext";
import Spinner from "../layout/Spinner";

import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

const Book = ({ match }) => {
  const bookShelfContext = useContext(BookShelfContext);
  const { loading, book, getBook } = bookShelfContext;

  const classes = useStyles();
  const isActive = useMediaQuery("(max-width: 500px)");

  useEffect(() => {
    getBook(match.params.id);

    //eslint-disable-next-line
  }, []);

  const {
    title,
    authors,
    publishedDate,
    description,
    imageLinks,
    pageCount,
    previewLink,
    shelf
  } = book;
  
  const img = { ...imageLinks };

  const shelfState = () => {
    if (shelf === "currentlyReading") {
      return <span>Lendo Atualmente</span>;
    } else if (shelf === "read") {
      return <span>Já Leu</span>;
    } else if (shelf === "wantToRead") {
      return <span>Quer Ler</span>;
    } else {
      return <span>Fora da Estante</span>;
    }
  };

  const selfShelf = shelfState();

  if (loading) return <Spinner />;

  return (
    <>
      {isActive ? (
        <Paper className={classes.rootMediaQuery}>
          <Grid container>
            <img
              className={classes.coverMediaQuery}
              src={img.thumbnail}
              alt={title}
            />
            <div className={classes.typography}>
              <Typography
                className={classes.typographyMediaQuery}
                component="h4"
                variant="h4"
              >
                {title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                <strong>Autor(es):</strong> {authors}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                <strong>Lançamento:</strong>{" "}
                {dayjs(publishedDate).format("YYYY")}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                <strong>Número de Páginas:</strong> {pageCount}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                <strong>Estante:</strong> {selfShelf}
              </Typography>

              <Typography variant="body1" className={classes.description}>
                <strong>Descrição do Livro:</strong> {description}
              </Typography>

              <Button
                className={classes.link}
                variant="contained"
                color="primary"
              >
                <Link
                  underline="none"
                  color="inherit"
                  component="a"
                  href={previewLink}
                >
                  Preview
                </Link>
              </Button>
            </div>
          </Grid>
        </Paper>
      ) : (
        <Paper className={classes.root}>
          <img className={classes.cover} src={img.thumbnail} alt={title} />
          <div className={classes.typography}>
            <Typography component="h4" variant="h4">
              {title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              <strong>Autor(es):</strong> {authors}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              <strong>Lançamento:</strong> {dayjs(publishedDate).format("YYYY")}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              <strong>Número de Páginas:</strong> {pageCount}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              <strong>Estante:</strong> {selfShelf}
            </Typography>

            <Typography variant="body1" className={classes.description}>
              <strong>Descrição do Livro:</strong> {description}
            </Typography>

            <Button
              className={classes.link}
              variant="contained"
              color="primary"
            >
              <Link
                underline="none"
                color="inherit"
                component="a"
                href={previewLink}
              >
                Preview
              </Link>
            </Button>
          </div>
        </Paper>
      )}
    </>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItens: "center",
    padding: theme.spacing(1, 2),
    margin: theme.spacing(5)
  },
  rootMediaQuery: {
    display: "flex",
    paddingLeft: theme.spacing(),
    margin: theme.spacing(1)
  },
  cover: {
    height: 180
  },
  coverMediaQuery: {
    display: "flex",
    padding: theme.spacing(1),
    height: 180,
    marginLeft: "26%"
  },
  typography: {
    padding: theme.spacing(1)
  },
  typographyMediaQuery: {
    padding: theme.spacing(1, 2),
    textAlign: "center"
  },
  link: {
    width: "100%",
    marginTop: theme.spacing(1)
  },
  description: {
    textAlign: "justify"
  }
}));

export default Book;
