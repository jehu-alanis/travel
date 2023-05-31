import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, Typography, IconButton, CardHeader, CardActions }
  from '@material-ui/core';

import LocalParkingIcon from '@material-ui/icons/LocalParking';
import WifiIcon from '@material-ui/icons/Wifi';
import PoolIcon from '@material-ui/icons/Pool';

const Hotel = ({ hotel: { rated, image, nombreH } }) => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.card}>
        <CardHeader className={classes.title}
          title={<Typography aling="center">{nombreH}</Typography>}
        />

        <CardMedia
          className={classes.media}
          image={image}
        />
        <CardContent>
          <div className={classes.rated}>
            <IconButton size="small">
              {
                Array(parseInt(rated))
                  .fill()
                  .map((_, i) => (
                    <p key={i}>&#11088;</p>
                  ))}
            </IconButton>
          </div>
        </CardContent>
        <CardActions disableSpacing >
          <div className={classes.button}>
            <IconButton size="small">
              <LocalParkingIcon />
              <Typography>Estacionamiento gratis</Typography>
            </IconButton>
            <IconButton size="small">
              <WifiIcon />
              <Typography>Wifi gratis</Typography>
            </IconButton>
            <IconButton size="small">
              <PoolIcon />
              <Typography>Piscina</Typography>
            </IconButton>
          </div>
        </CardActions>
      </Card>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  card: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      marginTop: theme.spacing(2),

    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    maxHeight: "1rem",


  },
  button: {
    display: "flex",
    marginTop: "1rem",
    flexDirection: "column",
    marginLeft: "3rem",
  },
  title: {
    backgroundColor: "#010C30",
    color: "#fff",
  },
  rated: {
    marginLeft: "6rem",
  }


}));

export default Hotel
