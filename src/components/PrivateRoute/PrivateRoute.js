import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { MyContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
  const [loggedIn] = useContext(MyContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedIn.email ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
};

export default PrivateRoute;