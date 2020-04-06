import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class App extends React.Component  {
  constructor(props) {
    //必須
    super(props);

  this.state ={textValue :"100",percent:"0.5"}
  }
  changeText=(e)=> {
    console.log(e.target.value)
    this.setState({[e.target.name]: e.target.value});
  }
  render(){
  return (
    <div>
      <progress id="myProgress" value="40" max="100">0%</progress>
      <p>全部で何g？</p>
        <input type="text" name="weight" value={this.state.textValue} onChange={this.changeText} />g
        <p>塩分%は？</p>
        <input type="text" name="percent" value={this.state.percent} onChange={this.changeText} />%
        <p>{this.state.textValue*this.state.percent}</p>
        <p>{this.state.percent}</p>
        </div>

  );
}
}

export default App;
