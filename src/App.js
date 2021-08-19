//import { useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {makeStyles} from '@material-ui/core';
//import Login from './Pages/Login';
//import Profile from './Pages/Profile';
import Home from './pages/Home';
//import { useDispatch, useSelector } from 'react-redux';
//import { login, logout, selectUser } from './features/UserSlice';
//import Paquetebasic from './Paquetes/Paquetebasic';
import Paquetebasic from "./components/Paquetes/Paquetebasic";
import { Provider } from 'react-redux'; 
import store from './store';
import Checkout from "./components/CheckOutForms/Checkout";


function App() {

  const classes = useStyles();

  return (
    <Provider  store={store}>
    <div className={classes.root}>
      <Router>
            <Switch>
            <Route path='/paqueteone/:paquetesid'>
            <Paquetebasic/>
            </Route>
            <Route path='/checkout'>
            <Checkout/>
            </Route>
            <Route path='/'>
            <Home/>
            </Route>
          </Switch>    
      </Router>
    
      </div>
      </Provider>  
  );
  
}

const useStyles = makeStyles((theme) =>({
  root: {
    backgroundColor: '#093B32',
    minHeight: '100vh',
  },
}));
export default App;
