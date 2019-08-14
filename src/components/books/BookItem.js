import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";

import BookShelfcontext from "../../context/bookShelf/bookShelfContext";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

const BookItem = ({ book }) => {
  const bookShelfContext = useContext(BookShelfcontext);
  const { updateBook } = bookShelfContext;

  const classes = useStyles();

  const img = { ...book }

  const onChange = (e) => {
    const val = e.target.value

    updateBook(book, val);
  };

  return (
    <Grid item xs={6} sm={4} md={2} className={classes.root}>
      <Card className={classes.card}>
        <Link component={RouterLink} to={`/books/${book.id}`}>
          <CardMedia
            component="img"
            className={classes.bookCover}
            image={img.imageLinks.thumbnail}
            alt={book.title}
            title={book.title}
          />
        </Link>
      </Card>
      <Typography className={classes.textTitle} gutterBottom variant="body1">
        {book.title}
      </Typography>
      <form className={classes.form} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="shelf">Estante...</InputLabel>
          <Select
            value={book.shelf}
            onChange={onChange}
            inputProps={{
              name: "shelf",
              id: "shelf"
            }}
          >
            <MenuItem value="currentlyReading">Lendo Atualmente</MenuItem>
            <MenuItem value="read">Já Leu</MenuItem>
            <MenuItem value="wantToRead">Quer Ler</MenuItem>
          </Select>
        </FormControl>
      </form>
      <Button className={classes.link} variant="contained" color="primary">
        <Link
          underline="none"
          color="inherit"
          component="a"
          href={book.previewLink}
        >
          Preview
        </Link>
      </Button>
    </Grid>
  );
};

BookItem.propTypes = {
  book: PropTypes.object.isRequired
};

const useStyles = makeStyles({
  root: {
    flex: 1,
    margin: "20px auto",
    flexWrap: "wrap"
  },
  card: {
    marginLeft: 20,
    maxWidth: 128
  },
  bookCover: {
    width: 128,
    height: 180
  },
  text: {
    marginLeft: 20
  },
  textTitle: {
    paddingTop: 15,
    marginLeft: 20
  },
  link: {
    width: "100%"
  },
  icon: {
    position: "relative",
    float: "right"
  },
  form: {
    marginLeft: 20
  }
});

export default BookItem;
