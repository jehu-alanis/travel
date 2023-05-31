import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { CardHeader, Card, CardMedia, CardContent, CardActions, Typography, Button }
  from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import CallMadeOutlinedIcon from '@material-ui/icons/CallMadeOutlined';

const Paquete = ({ paque: { paquetesid, precio, dias, descripcion, hotel, titulo, subtitle, images } }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardHeader className={classes.title}

          title={titulo}
          subheader={<Typography className={classes.subColor}>{subtitle}</Typography>}
        />

        <CardMedia
          className={classes.media}
          image={images}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {descripcion}
          </Typography>
        </CardContent>
        <CardActions disableSpacing >
          <Button className={classes.button}
            variant="contained"
            color="primary"
            endIcon={<CallMadeOutlinedIcon />}
            onClick={() => history.push(`/paqueteone/${paquetesid}`)}
          >
            Más Información
          </Button>

        </CardActions>

      </Card>

    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  head: {

    marginTop: "1rem",
    fontSize: "3rem",
    display: "flex",
    marginLeft: "35rem"
  },

  root: {
    maxWidth: "60vh",

  },
  card: {
    minHeight: "75vh",
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      marginTop: theme.spacing(2),
      minHeight: "20vh",
    },

  },

  title: {
    backgroundColor: "#010C30",
    color: "#fff",

  },
  subColor: {
    color: "#fff",
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    maxHeight: "1rem",
  },
  button: {
    backgroundColor: "#010C30",
    left: "3rem",
    margin: theme.spacing(1),
  },

}));
export default Paquete
