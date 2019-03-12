import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'
import './App.scss';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      item : [
          {id:1, name: 'deja vu'},
          {id:2, name: 'deja vu1'},
          {id:3, name: 'deja vu2'}
      ]
    }
  }

  render() {
    return (
        <ul className="list-group">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Morbi leo risus</li>
          <li className="list-group-item">Porta ac consectetur ac</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
    );
  }
}

export default App;
