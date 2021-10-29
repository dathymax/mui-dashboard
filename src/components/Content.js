import React from 'react';
import CreateEmployee from './CreateEmployee';
import ListEmployee from './ListEmployee';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Content = () => {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <Switch>
              <Route exact path="/list">
                <ListEmployee/>
              </Route>
              <Route path="/create">
                <CreateEmployee />
              </Route>
            </Switch>
        </div>
    )
}

export default Content
