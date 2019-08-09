import React from "react";
import { Link as RouterLink, withRouter } from "react-router-dom";

import { MdSearch } from "react-icons/md";

import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import Link from "@material-ui/core/Link";

const SearchButton = ({ location }) => {
  const classes = useStyles();

  return (
    <>
      {location.pathname !== "/pesquisar" && (
        <Link component={RouterLink} to="/pesquisar" color="inherit">
          <Tooltip title="Buscar Livros" placement="top">
            <Fab color="primary" aria-label="add" className={classes.fab}>
              <MdSearch size="2em" />
            </Fab>
          </Tooltip>
        </Link>
      )}
    </>
  );
};

const useStyles = makeStyles(theme => ({
  fab: {
    position: "fixed",
    right: "30px",
    bottom: "75px",
    margin: theme.spacing(1)
  }
}));

export default withRouter(SearchButton);
