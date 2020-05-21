import React,{ Component } from "react";
import styled from 'styled-components';

import homeDatas from './homeData.js';
import Car from '../../common/Car/index.jsx'

const HomeContair = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
`;
const HomeWapper = styled.div`
  width: 70%;
  height: 100%;
  // background-color: #fff;
  padding: 20px;
`;

const HomeCar = styled.div`
  padding: 20px;
  .car_title{
    background-color: #fff;
    text-indent: 1.5em;
    padding: 8px 0px;
    font-size: 16px;
    position: relative;
    box-shadow: 3px 3px 8px 0px #60616193;
    border: 1px solid #ddd;
    border-radius: 4px;
    &::before{
      content: "";
      display: block;
      width: 2px;
      height: 65%;
      background-color: #0597f893;
      position: absolute;
      left: 0px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .car_contair{
    padding: 25px 10px 0px;
    display: flex;
    flex-wrap: wrap;
  }
`;

class Home extends Component{

  state = {
    homeData:[],
  }

  componentDidMount(){
    
    this.setState({
      homeData:homeDatas
    })
  }


  render(){
    const { homeData } = this.state;

    return (
      <HomeContair>
        <HomeWapper>
          {
            homeData.map(( list, listIndex )=>{
              return (
                <HomeCar key={ list.id }>
                  <div className="car_title">
                    { list.title }
                  </div>
                  <div className="car_contair">
                    {
                      list.data.map(( item, itemIndex )=>{
                        return (
                          <Car
                            width= "264"
                            key={ item.id }
                            data={ item }
                          />
                        )
                      })
                    }
                  </div>
                </HomeCar>
              )
            })
          }
        </HomeWapper>
      </HomeContair>
    )
  }
}
export default Home;