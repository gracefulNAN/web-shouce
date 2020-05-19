import React,{ Component } from "react";
import styled from 'styled-components';

const LianCon = styled.div`
  font-size: 18px;
  position: relative;
  .lian_text{
    P{
      border-radius: 6px;
      padding: 6px 20px;
      cursor: pointer;
    }
  }
  .lian_car{
    position: absolute;
    left: 0px;
    bottom: -4px;
    transform: translateY(100%);
    background-color: #FFF;
    min-width: 100%;
    border-radius: 6px;
    padding: 5px;
    box-shadow: 0px 0px 6px 1px #aaa;
    &>ul>li{
      padding: 6px 10px;
      font-size: 16px;
      border-bottom: 1px dotted #ccc;
      box-sizing: border-box;
      &:hover{
        background-color: #ddf2fc;
      }
    }
  }
  .actair{
    background-color: #ddf2fc;
    border-radius: 6px;
    color: #010c13;
    border: 1px solid #09a9f3;
    box-sizing: border-box;
    box-shadow: 0px 0px 4px 1px #09a9f3 inset;
    &::after{
      content: "";
      display: block;
      width: 100%;
      height: 2px;
      // background-color: #bbb;
      position: absolute;
      bottom: -2px;
      left: 0px;
    }
  }
`;

class Lian extends Component{

  state = {
    elements:[],
    carList:[],
    isShowCar: false,
  }

  enterClick = (e, colors)=> {
    const { elements } = this.state;
    e.target.style.background = colors;
    elements.push(e.target);
    this.setState({
      elements,
    })
    if( this.carId ){
      clearInterval( this.carId )
    }
  }
  leaveClick = (e)=> {
    const { elements } = this.state;
    elements.map((item, index)=>{
      return item.style.background = "";
    })
    this.setState({
      elements:[],
    })
    // 定时器
    this.timeOut()
  }

  timeOut = ()=> {
    this.carId = setTimeout(()=>{
      this.showCar( false )
      clearInterval( this.carId )
    },300)
  }

  enterCarClick = (e)=> {
    if( this.carId ){
      clearInterval( this.carId )
    }
  }
  leaveCarClick = (e)=> {
    // 定时器
    this.timeOut()
  }

  actairClick = ( e )=> {
    const { text, onClick } = this.props;
    const { isShowCar } = this.state;
    onClick( text );
    // 点击后，取消移入状态
    // this.leaveClick( e );
    this.showCar( !isShowCar );

  }
  // 是否显示car
  showCar = ( isShow )=> {
    this.setState({
      isShowCar: isShow,
    })
  }

  // car点击事件
  carListClick = (e)=> {
    const { carList } = this.state;
    if( carList.length ){
      carList.map((item)=>{
        item.style.borderBottomColor= "";
        return "";
      })
      this.setState({
        carList,
      })
    }
    e.target.style.borderBottomColor= "#3a07f5";
    carList.push(e.target)
    this.setState({
      carList,
    })

  }

  render(){

    const { text, data, actair, history, carHistory } = this.props;
    const { isShowCar } = this.state;

    return (
      <LianCon>
        <div 
          className={ `lian_text ${ actair ? "actair" : "" }` }
          ref={ (div)=>{ this.textNode = div } }
          onMouseEnter={ (e)=>{ this.enterClick(e, "#ddf2fc") }}
          onMouseLeave={ (e)=>{ this.leaveClick(e,) } }
          onClick={ (e)=>{ this.actairClick( e ) }}
        >
          <p>{ text.text }</p>
        </div>
        <div 
          className="lian_car"
          style={{display: data.length && isShowCar ? "block": "none"}}
          onMouseEnter={ (e)=>{ this.enterCarClick(e,) }}
          onMouseLeave={ (e)=>{ this.leaveCarClick(e,) } }
        >
          <ul
            id="carul"
            onClick={ (e)=>{ this.carListClick(e) }}
          >
            {
              data.map(( item, index)=>{
                return (
                  <li
                    key={ item.id } 
                    onClick={()=>{ history.push( carHistory[index] )}}
                  >{item.webCom}</li>
                )
              })
            }
          </ul>
        </div>
      </LianCon>
    )
  }
}
export default Lian;