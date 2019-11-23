import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const ContainedButtons = (props) =>
{
    const classes = useStyles();
    const {link,isDisable} = props;
    // console.log(isDisable);
    
    return (
        <div className={classes.root}>
            <Button variant="contained" href={link} disabled={isDisable}>
                Continue
            </Button>
        </div>
    );
}
export default ContainedButtons;