import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Puertoarista from './Playas/Puertoarista';
import Tonala from './Playas/Tonala';
import Madresal from './Playas/Madresal';
import Bocadelcielo from './Playas/Bocadelcielo';

const Lugares = ({ title, id }) => {
  const classes = useStyles();
  return (
    <div id={id} className={classes.root}>
      <Tonala />
      <Puertoarista />
      <Madresal />
      <Bocadelcielo />
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#FFF ',
    minHeight: '100vh',
  },
}));

export default Lugares
