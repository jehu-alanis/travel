import React, { useEffect,useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CancelIcon from '@material-ui/icons/Cancel';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-scroll';
import { List, Drawer, Divider, ListItem, ListItemIcon, Tooltip } from '@material-ui/core';
import logo from './images/logo.svg';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { green } from '@material-ui/core/colors';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import HotelIcon from '@material-ui/icons/Hotel';
import InfoIcon from '@material-ui/icons/Info';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import { Link as LinkR } from "react-router-dom";

const links = [
   {
     id: "lugares",
     text: "Destinos",
     icon : <Brightness4Icon fontSize="large"  />
   },
   {
    id: "paquetes",
    text: "Paquetes",
    icon : <CardGiftcardIcon fontSize="large"/>
  },
  {
    id: "hoteles",
    text: "Hoteles",
    icon : <HotelIcon fontSize="large"/>
  },
  {
    id: "about",
    text: "About",
    icon : <InfoIcon fontSize="large"/>
  },
  
 ]




function Header() {
   
    const [show, setShow] = useState(true);
    const classes = useStyles();
    const [open, setOpen] = useState(false);
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
        <LinkR to="/">
      <img src={logo} alt="logo"  className={classes.logo}/>
      </LinkR>
      <Tooltip title="Mandanos un Whats  2283242637" interactive >
      <IconButton className={classes.whats}>
       <WhatsAppIcon style={{ color: green[700] }} fontSize="large"/>
       </IconButton >
       </Tooltip>     
       <List className={classes.menu}>

            {
              links.map(( {id,text}, index) => (
                <Link key={index} 
                to ={id} 
                spy={true} 
                activeClass="active" 
                smooth={true} 
                duration={500} 
                offset={-70}>{text}</Link> 
              ))
            }
          </List>
          <IconButton  edge="end" 
          className={classes.menuicon}
          onClick={()=>setOpen(!open)}>
          <MenuIcon fontSize="large"/>
          </IconButton>
         
        </Toolbar>
    </AppBar>
    <Drawer anchor="right" open={open} onClose={()=>setOpen(false)}>
      <IconButton className={classes.cancel} onClick={()=>setOpen(false)}>
        <CancelIcon fontSize="large"/>
      </IconButton>
      <Divider/>
      {
              links.map(( {id,text,icon}, index) => (
                <Link key={index}
                className={classes.sidebar}
                 to ={id} 
                 spy={true} 
                 activeClass="active" 
                 smooth={true} 
                 duration={500} 
                 offset={-70}>
                 <ListItem component="h5">
                   <span>
                     <ListItemIcon>
                       {icon}
                     </ListItemIcon>
                   </span>{text}
                 </ListItem>
                 </Link> 
              ))
            }
    </Drawer>            
        </div>
    )
}



const useStyles = makeStyles((theme) => ({
    root: {
   
      flexGrow: 1,
    
    },
    
    transparent:{
        backgroundColor: 'transparent',
    },
    menu: {
      [theme.breakpoints.down("sm")]:{
       display:"none"
      },
      "& a":{
        fontSize: "1.4rem",
        fontWeight:"bold",
        marginLeft: theme.spacing(4),
       
        
        },
        "& a:hover":{
          cursor: "pointer",
          color: "#fff",
          borderBottom: "3px solid"
          },
      
    },
    whats:{
      display:"flex",
      marginLeft:"100vh",
      position: "relative",
      [theme.breakpoints.down("sm")]: {
        marginLeft:"20vh",
       }
     
    },
    menuicon:{
      display: "none",
      [theme.breakpoints.down("sm")]: {
        display:"block",
        position: "absolute",
        top:0,
        right:10,
       }
    } ,
    sidebar:{
      width: "40vw",
      [theme.breakpoints.down("sm")]: {
        width: "60vw",
       },
       "& h5":{
         margin: theme.spacing(10,0,0,4),
         fontSize:"1.4rem",
         color: "#564899",
         fontWeight: "bold"
       },
       "& h5:hover":{
        color: "#564899",
        cursor:"pointer"
      }
    },
    cancel:{
      position: "absolute",
      color:"#564899",
      top:"0",
      right:10
    },
     logo:{
      width: "100px",
      cursor: "pointer",
   },
  }));

export default Header
