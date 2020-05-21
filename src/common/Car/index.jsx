import React,{ Component } from "react";
import styled from 'styled-components';

const CarContair = styled.div`
  width: 266px;
  background-color: #fff;
  margin: 10px;
  box-shadow: 1px 2px 4px 2px #60616193;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  flex-direction: column;
  .carTitle{
    background-color: #eee;
    height: 60px;
    border-bottom: 1px dotted #49b2f8;
    box-sizing: border-box;
    position: relative;
    .webActar{
      width: 80px;
      height: 80px;
      border: 1px solid #90cef7;
      box-shadow: 1px -4px 30px 1px #90cef7 inset;
      border-radius: 100%;
      position: absolute;
      bottom: 0px;
      left: 50%;
      transform: translate(-50%, 28%);
      z-index: 9;
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      cursor: pointer;
    }
    .dangBan{
      width: 100%;
      height: 100%;
      background-color: #fff;
      position: absolute;
      z-index: 8;
    }
    .yuanQuan{
      background-color: #fff;
      width: 90px;
      height: 90px;
      border: 1px dotted #49b2f8;
      border-radius: 100%;
      position: absolute;
      bottom: 0px;
      left: 50%;
      transform: translate(-50%, 34%);
      z-index: 6;
    }
  }
  .carText{
    margin-top: 30px;
    padding: 10px;
    font-size: 14px;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    .jianJie{
      line-height: 1.5em;
      height: 85px;
      letter-spacing: 1px;
      margin-bottom: 10px;
      p{
        font-size: 12px;
        text-indent: 2em;
      }
    }
    .neiRong{
      flex: 1 1 auto;
      .lieBiao{
        // padding: 10px 5px;
        max-height: 120px;
        font-size: 12px;
        display: flex;
        flex-wrap: wrap;
        overflow-x: hidden;
        overflow-y: scroll;
        &::-webkit-scrollbar {
          display: none;
        }
        li{
          padding: 5px 8px;
          margin: 5px;
          cursor: pointer;
          border: 1px solid #a7d6f5;
          border-radius: 50%;
          box-shadow: 0px 0px 8px 1px #a7d6f5 inset;
        }
      }
    }
  }
`;

class Car extends Component{
  render(){
    const { data } = this.props;
    // 判断是否有该属性
    const webNeiRong = data.web_neiRong || [] ;
    // let webNeiRong;
    // if( typeof data.web_neiRong === "undefined"){
    //   webNeiRong = [];
    // }else{
    //   webNeiRong = data.web_neiRong;
    // }
    
    return (
      <CarContair
        style={{
          width: `${ this.props.width }px`
        }}
      >
        <div className="carTitle">
          <div className="webActar">{ data.web_name }</div>
          <div className="dangBan"></div>
          <div className="yuanQuan"></div>
        </div>
        <div className="carText">
          <div className="jianJie">
            <h2>简介:</h2>
            <p>{ data.web_jiaJie }</p>
          </div>
          <div 
            className="neiRong"
            style={{ display: webNeiRong.length ? "black" : "none"}}
          >
            <h2>内容:</h2>
            <ul className="lieBiao">
              {
                webNeiRong.map((item, index)=>{
                  return (
                    <li
                      key={ item.id }
                    >{ item.nr_name }</li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </CarContair>
    )
  }
}
export default Car;