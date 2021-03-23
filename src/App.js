import React from 'react'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      value: {
        add: 'add',
        del: 'delete'
      }
    }
  }

  handleClick = (e) => {
    console.log(e.target.innerHTML)
    e.target.innerHTML === 'add'?
    this.setState((state) => {
      return state.count += 1;
    }) : 
    this.setState((state) => {
      return state.count -= 1;
    })

    // switch(e.target.innerHTML) {
    //   case 'add':
    //     this.setState((state) => {
    //       return state.count += 1;
    //     }) ;
    //     break;
    //   case 'delete':
    //     this.setState((state) => {
    //       return state.count -= 1;
    //     });
    //     break;
    //   default: 
    // }
  }


  render () {
    return(
    <div>
    <Button value={this.state.value.add} func = {this.handleClick}/>
    <Button value={this.state.value.del} func = {this.handleClick}/>
    <div>{this.state.count}</div>
    </div>)
  }
}

function Button(props) {
  return <button onClick = {props.func}>{props.value}</button>
}


export default App;