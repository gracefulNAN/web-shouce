import React,{ Component } from "react";
import styled from 'styled-components';

import {
  Route,
  Switch,
} from "react-router-dom";

const DemoBodey = styled.div`
  width: 100%;
  height: 100%;

`;

const DemoHeader = styled.div`
  background-color: red;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #ccc;
  box-shadow: 0px 0px 6px 0px #ccc;
`;

const DemoContair = styled.div`
  background-color: blue;
  height: calc( 100% - 60px );
  // overflow-x: hidden;
  // overflow-y: scroll;
  // &::-webkit-scrollbar {
  //   display: none;
  // }
`;

class Demo extends Component{
  render(){
    console.log(this.props)
    const { routes } = this.props;
    return (
      <DemoBodey>
        <DemoHeader>
          header
        </DemoHeader>
        <DemoContair>
          <Switch>
            {
              routes.map(( route, index)=>{
                return(
                  <Route 
                    key={ index }
                    path={ route.path }
                    render={ (props)=>{
                      return <route.component {...props} routes={route.routes} />
                    }}
                  />
                )
              })
            }
          </Switch>
        </DemoContair>
      </DemoBodey>
    )
  }
}
export default Demo;
