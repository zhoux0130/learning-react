import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {id: 1, name: 'deja vu'},
                {id: 2, name: 'Cras justo odio'},
                {id: 3, name: 'Morbi leo risus'}
            ]
        }
    }

    move(index, diff) {
        var items = this.state.items;
        var item = items[index];
        items.splice(index, 1);
        items.splice(index + diff, 0, item);
        this.setState({items: items});
    }

    moveUp(index) {
        this.move(index, -1);
    }

    moveDown(index) {
        this.move(index, 1);
    }

    render() {
        return (
            <div className="items-panel">
                <ul className="list-group">
                    {
                        this.state.items.map((item, index) => (
                            <li className="list-group-item">
                                <div className="name">{item.name}</div>
                                <div className="btn-group">
                                    {
                                        index > 0 ?
                                            <button className="btn btn-light" onClick={()=>this.moveUp(index)}>UP</button> : null
                                    }
                                    {
                                        index < this.state.items.length -1  ?
                                            <button className="btn btn-light" onClick={()=>this.moveDown(index)}>DOWN</button> : null
                                    }
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default App;
