import React,{ Component } from "react";
import styled from 'styled-components';

import {
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Lian from '../../common/Lian/index.jsx';

const DemoBodey = styled.div`
  width: 100%;
  height: 100%;

`;

const DemoHeader = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #ccc;
  box-shadow: 0px 0px 6px 0px #ccc;
  display: flex;
  justify-content: space-around;
`;

const HeaderCen = styled.div`
  // background-color: #ccc;
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  h1{
    font-size: 26px;
    font-weight: 700;
    color: #333;
    padding: 10px 30px;
  }
  nav{
    flex: 1 1 auto;
    padding: 5px 20px;
    height: 100%;
    display: flex;
    align-items: flex-end;
    // background-color: #333;
  }
  .feach{
    width: 300px;
    height: 100%;
    // background-color: #ccc;
    display: flex;
    align-items: center;
    input{
      width: 200px;
      height: 30px;
      margin: 0 20px;
      border-radius: 6px;
      border: 1px solid #ccc;
      outline: none;
      padding: 4px 10px;
    }
    .btn_feach{
      font-size: 16px;
      color: #999;
      cursor: pointer;
    }
  }
`;

const DemoContair = styled.div`
  height: calc( 100% - 60px );
  // overflow-x: hidden;
  // overflow-y: scroll;
  // &::-webkit-scrollbar {
  //   display: none;
  // }
`;

class Demo extends Component{
  state = {
    navId:"",
    carHisUrl:[],
    data: [
      {
        text: "首页",
        min:"home",
        id: "web_000000001",
      },
      {
        text: "web文档",
        min:"document",
        id: "web_000000002",
        lian: [
          {
            webCom: "Html",
            min:"html",
            id: "doc_000000001",
          },
          {
            webCom: "Css",
            min:"css",
            id: "doc_000000002",
          },
          {
            webCom: "Javascript",
            min:"javascript",
            id: "doc_000000003",
          },
        ],
      },
      {
        text: "web框架",
        min:"frame",
        id: "web_000000003",
        lian: [
          {
            webCom: "React.js",
            min:"react",
            id: "fra_000000001",
          },
          {
            webCom: "Vue.js",
            min:"vue",
            id: "fra_000000002",
          },
          {
            webCom: "jQuery.js",
            min:"jquery",
            id: "fra_000000003",
          },
        ],
      },
      {
        text: "常用插件",
        min:"bank",
        id: "web_000000004",
      },
      {
        text: "练习",
        min: "sample",
        id: "web_000000005",
      },
    ],
  }

  componentDidMount(){
    const { data } = this.state
    this.lianClick( data[0].id)
  }

  lianClick = ( lian )=> {
    if(typeof lian == "string"){
      this.setState({
        navId: lian,
      })
      return ;
    }
    this.setState({
      navId: lian.id,
    })
    if( !!!lian.lian ){
      this.props.history.push(`/${lian.min}`)
    }else{
      let { carHisUrl } = this.state;
      carHisUrl = lian.lian.map((item)=>{
        return `/${lian.min}/${item.min}`;
      })
      this.setState({
        carHisUrl
      })
    }
  }
  render(){
    const { data, navId, carHisUrl } = this.state;
    const { routes } = this.props;
    return (
      <DemoBodey>
        <DemoHeader>
          <HeaderCen>
            <h1>WEB·HBook</h1>
            <nav>
              {
                data.map((item , index)=>{
                  return(
                    <Lian
                      key={ item.id }
                      text={ item }
                      data={ item.lian || []}
                      actair={ navId === item.id }
                      onClick={ this.lianClick }
                      carHistory={ carHisUrl }
                      {...this.props}
                    />
                  )
                })
              }
            </nav>
            <div className="feach">
              <input type="text" />
              <div className="btn_feach">搜索</div>
            </div>
          </HeaderCen>
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
            <Redirect to="/home" />
          </Switch>
        </DemoContair>
      </DemoBodey>
    )
  }
}
export default Demo;
