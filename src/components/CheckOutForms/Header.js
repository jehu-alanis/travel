import React, { useEffect,useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import {  Tooltip, Typography } from '@material-ui/core';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { green } from '@material-ui/core/colors';


function Header() {
    const classes = useStyles();
    const [show, setShow] = useState(true);
    const hideHeader =() =>{
        if (window.scrollY > 100){
          setShow(false)
        } else {
          setShow(true)
        }
      }
  
      useEffect(()=> {
        window.addEventListener("scroll", hideHeader);
        return () => window.removeEventListener("scroll",hideHeader);
      },[])
  

    
    return (
        <div>

    <AppBar position="fixed" elevation={0} className={ `${classes.root} ${show && classes.transparent}`}>
      <Toolbar>
        
      <Tooltip
       title="Mandanos un Whats  2283242637" interactive >
      <IconButton className={classes.whats}>
       <WhatsAppIcon style={{ color: green[700] }} fontSize="large"/>
       </IconButton >
       </Tooltip>     
       <Typography variant="h6" aling="left" className={classes.title}>
            Mandanos un Whats 
          </Typography>
        </Toolbar>
    </AppBar>
         </div>
    )
}



const useStyles = makeStyles((theme) => ({
    root: {
   
      flexGrow: 1,
    
    },
    
    transparent:{
        backgroundColor: '#093B32',
    },
    title: {
     
      "& a":{
        fontSize: "1.4rem",
        fontWeight:"bold",
        marginRight: theme.spacing(4),
       
        
        },
        "& a:hover":{
          cursor: "pointer",
          color: "#564899",
          borderBottom: "3px solid"
          },
      
    },
    whats:{
      display:"flex",
      marginLeft: "70%",
      position: "relative",
      [theme.breakpoints.down("sm")]: {
        marginLeft: "0%",
     
       },
    },
    
    
  }));

export default Header