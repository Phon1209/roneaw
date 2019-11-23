import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "../../../css/select-search-style.css";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

const ContainedButtons = props => {
  const classes = useStyles();
  const { isDisable, onClick } = props;
  return (
    <div className={classes.root}>
      <Link to="/form">
        <Button
          variant="contained"
          className="Button"
          onClick={onClick}
          disabled={isDisable}
        >
          Continue
        </Button>
      </Link>
    </div>
  );
};
export default ContainedButtons;
