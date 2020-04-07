import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class App extends React.Component  {
  constructor(props) {
    //必須
    super(props);

  this.state ={weight :"100",percent:"0.5",salt_arr:[]}
  }
  changeText=(e)=> {
    this.setState({[e.target.name]: e.target.value});
    const salt　=this.state.weight*this.state.percent;
    var i= 0;
    var array =[];
    console.log(salt)
    if (salt*0.01 >5){
      return;
    }
    for (i=1;i<salt;i++){
      array.push(i)
    }
    this.setState({salt_arr:array})
  }
  render(){
  return (
    <div>
      <progress id="myProgress" value={this.state.percent} max="10">0%</progress>
      <p>全部で何g？</p>
        <input type="text" name="weight" value={this.state.weight} onChange={this.changeText} />g
        <p>塩分%は？</p>
        <input type="text" name="percent" value={this.state.percent} onChange={this.changeText} />%
        <p>塩{this.state.weight*this.state.percent*0.01}g入れる</p>
        <ul>
          {this.state.salt_arr.map((value) => <li>{value}</li>)}
        </ul>
    </div>
  );
}
}

export default App;
