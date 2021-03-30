import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import React, {useEffect} from 'react'

import { CalendarScreen } from '../components/calendar/CalendarScreen';
import { LoginScreen } from '../components/auth/LoginScreen';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { startChecking } from '../actions/auth';



export const AppRouter = () => {

  const dispatch = useDispatch();
  const { checking, uid } = useSelector( state => state.auth);

  useEffect(() => {
    dispatch( startChecking() );
  }, [dispatch]);

  if ( checking ) {
    return (<h5> Espere... </h5>);
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            exact path="/login"
            component={ LoginScreen }
            isAuthenticated={ !!uid }
          />

          <PrivateRoute
            exact path="/"
            component={ CalendarScreen }
            isAuthenticated={ !!uid }
          />

          <Redirect to="/"/>
        </Switch>
      </div>
    </Router>
  );
}
