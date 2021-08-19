import React,{useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography , Paper, Card,CardContent,IconButton, Container} from '@material-ui/core';
import logo from '../images/madrezal.jpg';
import logo2 from '../images/madrezal2.jpg';
import logo3 from '../images/madrezal3.jpg';
import RowingIcon from '@material-ui/icons/Rowing';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import DeckOutlinedIcon from '@material-ui/icons/DeckOutlined';
import  'aos/dist/aos.css';
import Aos from 'aos';


const Madresal = () => {
    const classes = useStyles();
    useEffect(() => {
      Aos.init({ duration: 2000})
    }, [])
    return (
        <Card data-aos="fade-up" className={classes.root}>
        <CardContent>
            <Typography variant="h4"  className={classes.title}>Explora</Typography>
            <Typography variant="h2" className={classes.subtitle} >Madresal</Typography>
            <Typography variant="subtitle1" className={classes.description} > 
            You can find the most beautiful 
            and pleasant 
            places at the best prices with special discounts, 
            you choose the place we will guide you all the way to wait, get your place now.
            </Typography>
         <Paper className={classes.icons}>
           <IconButton>
             <RowingIcon/>
             </IconButton>
             <IconButton>
             <Brightness5Icon/>
             </IconButton>
             <IconButton>
             < DeckOutlinedIcon/>
             </IconButton>
         </Paper>
            <div className={classes.images}>
            <Container maxWidth="sm"> 
            <img src={logo} alt="logo"  className={classes.logo} />
            </Container>

            
            <Container maxWidth="sm"> 
            
            <img src={logo2} alt="logo"  className={classes.logo} />
            </Container>
            
            <Container maxWidth="sm"> 
            <img src={logo3} alt="logo"  className={classes.logo} />
            </Container> 



            </div>
            </CardContent>
            </Card>
         
    )
}
const useStyles = makeStyles((theme) =>({
    root: {
      backgroundColor: '#FFF ',
      marginTop: "1rem",
      display: "flex",
      [theme.breakpoints.down("sm")]: {
        minHeight: '80vh',
       },
    },
    images:{
        display: "flex",
       flexDirection:"row",
        left:"1rem",
        marginTop: "25rem",
        position: "relative",
        overflowY:"hidden",
        overflowX: "scroll",
        
        "&::-webkit-scrollbar":{
          display:"none",
        },
        [theme.breakpoints.down("sm")]: {
          display: "flex",
         flexDirection:"column",
          marginTop: "9rem",
          left:"0rem",
         },
    },
    logo:{
      marginBottom: theme.spacing(1),
      border: "4px solid transparent",
      borderRadius: "16px", 
      maxHeight: "15rem",
      position: "relative",
     // width:"32rem",
        objectFit: "contain",
        marginRight: theme.spacing(2),
        transition: "transform 450ms",
        backgroundSize: "cover",
        "&:hover": {
          transform: "scale(1.15)",
        },
        [theme.breakpoints.down("sm")]: {  
          maxHeight: "6rem",
         // marginRight: theme.spacing(0.2),
          display: "flex",
         },
    },
    title:{
        left:"37rem",
        position: "absolute",
        marginTop: "4rem",
        [theme.breakpoints.down("sm")]: {
         // position: "absolute",
          marginTop: "1rem",
          left:"7.5rem",
         },  
      },
      subtitle:{
        
        left:"33rem",
        position: "absolute",
        marginTop: "8rem",
        [theme.breakpoints.down("sm")]: {
          //position: "relative",
          marginTop: "4rem",
          left:"5rem",
          fontSize:"3rem",
         },
      },
      description:{
        left:"22rem",
        position: "absolute",
        marginTop: "13rem",
        maxWidth: "100vh",
        [theme.breakpoints.down("sm")]: {
          //position: "relative",
          marginTop: "9rem",
          left:"13rem",
          maxWidth: "70vh",
         },
      },

      icons:{
        backgroundColor: '#FFF ',
        position: "absolute",
        marginTop: "19rem",
        maxWidth: "40vh",
        left:"34rem",
        [theme.breakpoints.down("sm")]: {
          //position: "relative",
          marginTop: "30rem",
          left:"6rem",
          maxWidth: "90vh",
         },
      }
    

  }));

export default Madresal
