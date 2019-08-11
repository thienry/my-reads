import React, { useState } from "react";
import PropTypes from "prop-types";

import { MdArrowDropDown } from "react-icons/md";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

const Book = ({ book }) => {
  const classes = useStyles();
  const ITEM_HEIGHT = 48;

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  function handleClick(e) {
    setAnchorEl(e.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <Grid item xs={6} sm={4} md={2} className={classes.root}>
      <Card className={classes.card}>
        <CardMedia
          component="img"
          className={classes.bookCover}
          image={book.imageLinks.thumbnail}
          alt={book.title}
          title={book.title}
        />
      </Card>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.icon}
      >
        <MdArrowDropDown />
      </IconButton>

      <Menu
        value={book.shelf}
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: 200
          }
        }}
      >
        <MenuItem value="none" disabled>
          Mudar para...
        </MenuItem>
        <MenuItem value="currentlyReading">Lendo Atualmente</MenuItem>
        <MenuItem value="read">Já Leu</MenuItem>
        <MenuItem value="wantToRead">Quer Ler</MenuItem>
      </Menu>
      <Typography className={classes.textTitle} gutterBottom variant="body1">
        {book.title}
      </Typography>
      <Typography className={classes.text} variant="subtitle2">
        {book.authors}
      </Typography>
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

Book.propTypes = {
  book: PropTypes.object
};

const useStyles = makeStyles({
  root: {
    margin: "20px auto"
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
    float: "right",
  }
});

export default Book;
