import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Stepper, ListItem, ListItemIcon } from '@material-ui/core';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import PaymentIcon from '@material-ui/icons/Payment';

const StepInfo = () => {

  const steps = [
    {
      text: "Escoje la Fecha",
      icon: < EventAvailableIcon fontSize="large" />
    },
    {
      text: "Personaliza tu viaje",
      icon: <SupervisedUserCircleIcon fontSize="large" />
    },
    {
      text: "Pay",
      icon: <PaymentIcon fontSize="large" />
    },
  ];
  const classes = useStyles();
  return (
    <div className={classes.root}>

      <Stepper activeStep={3}>
        {
          steps.map(({ text, icon }, step) => (
            <Step key={step} >
              <StepLabel className={classes.root}>
                <ListItem component="h5" className={classes.root}>
                  <span >
                    <ListItemIcon >
                      {icon}
                    </ListItemIcon>
                  </span>{text}
                </ListItem>
              </StepLabel>
            </Step>
          ))
        }
      </Stepper>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#FFF ',
    maxWidth: '100vw',
    [theme.breakpoints.down("sm")]: {
      width: '100%',
      position: "relative",
      display: 'inline-block',
    },
  },
}));

export default StepInfo
