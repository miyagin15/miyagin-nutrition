import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class App extends React.Component  {
  constructor(props) {
    //必須
    super(props);

  this.state ={weight :"100",percent:"0.5"}
  }
  changeText=(e)=> {
    this.setState({[e.target.name]: e.target.value});
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
        </div>

  );
}
}

export default App;
