import React, { useState } from "react";
import PropTypes from "prop-types";

import { MdViewList } from "react-icons/md"

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const options = ["Move to...", "currently Reading", "wantToRead", "read"];
const ITEM_HEIGHT = 48;

const Book = ({ book, onUpdate }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const changeBookShelf = e => {
    onUpdate(e.target.value);
  };

  return (
    <>
      <Card className={classes.card}>
        <CardMedia className={classes.media} title={book.title} />

        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MdViewList />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          onChange={changeBookShelf}
          value={book.shelf}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200
            }
          }}
        >
          {options.map(option => (
            <MenuItem
              key={option}
              selected={option === "Pyxis"}
              onClick={handleClose}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
        <Typography variant="body1">{book.title}</Typography>
        <Typography variant="body2">{book.authors}</Typography>
      </Card>
    </>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onUpdate: PropTypes.func.isRequired
};

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 250
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
}));

export default Book;
