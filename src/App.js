import React, { createContext, useState } from 'react';
import Destination from './components/Destination/Destination';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Booking from './components/Booking/Booking';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';
export const MyContext = createContext()
const App = () => {
  const [background, setBackground] = useState({
    "id": 1,
    "placeName": "Cox's Bazar",
    "image": "https://i.ibb.co/6Rx1PCZ/Sajek.png",
    "description": "Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.",
  })
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <MyContext.Provider value={[background,setBackground,loggedIn,setLoggedIn]} >
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/destination">
            <Destination />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/booking">
            <Booking/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </MyContext.Provider>

  );
};

export default App;
