import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid,  } from '@material-ui/core';
import Hotel from './Hotel';
import  'aos/dist/aos.css';
import Aos from 'aos';
import axios from 'axios';
const Hoteles = ({ title, id }) => {
  const [paque, setPaque] = useState(
    {
         data: [],       
     });
  const classes = useStyles();
  useEffect(() => {
    Aos.init({ duration: 2000});
    getHotels();
  }, [])
  const getHotels = async () => {
    const res = await axios.get(`http://localhost:4000/hotels`);   
    
      if (res) {
          setPaque({
            data: res.data,
          });
        }
    };
  return (
    <div data-aos="fade-up" id={id}>
    <div className={classes.head}> 
          {title}
        
        </div>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="flex-start"
      >

      {
          paque.data.map((hotel,i) =>(
          <Grid key={i} item xs={12} sm={6} md={4} lg={3}>  
   
          <Hotel  key={hotel.id} hotel={hotel}/> 
          </Grid>
          ))
      }

      </Grid>
    </div>
  )
}


const useStyles = makeStyles((theme) => ({
  head:{
    marginTop:"1rem",
    fontSize: "3rem",
   display:"flex",
   marginLeft:"35rem",
   [theme.breakpoints.down("sm")]: {
    marginLeft:"30%",
    
   },
  },  
  
    
    
  }));
export default Hoteles
