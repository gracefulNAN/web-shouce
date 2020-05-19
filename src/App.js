import React from 'react';
import styled from 'styled-components';

import {
  BrowserRouter as Router,
  Route,
  Switch,

} from "react-router-dom";
import routers from './routers/index.js'

const AppBodey = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <AppBodey className="App">
      <Router>
        <Switch>
          {
            routers.map((route, index)=>{
              return (
                <Route 
                  key={ index }
                  path={route.path}
                  render={ (props)=>{
                    return <route.component {...props} routes={route.routes} />
                  }}
                />
              )
            })
          }
        </Switch>
      </Router>
    </AppBodey>
  );
}

export default App;
