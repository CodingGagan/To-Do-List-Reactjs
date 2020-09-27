import React, { Component } from 'react';
import './ToDoList.css';
import ListItem from './LIstItem';

import Swal from 'sweetalert2';
class ToDoList extends Component {
    constructor(props) {
        super(props);
        //   Setting intial state of this app
        this.state = {
            items: [],
            currentItems: {
                text: '',
                key: ''
            }
        }

        // bind every function with constructor
        this.handleInput = this.handleInput.bind(this);
        this.additems = this.additems.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    // on change of input tag
    handleInput(e) {
        this.setState({
            currentItems: {
                text: e.target.value,
                key: Date.now()
            }
        })
    }

    // final submission of add button
    additems(e) {
        e.preventDefault();
        const newItem = this.state.currentItems;

        console.log(this.state.items);
        if (newItem.text !== '') {
            const items = [...this.state.items, newItem];
            this.setState({
                items: items,
                currentItems: {
                    text: '',
                    key: ''
                }
            })
            this.refs.taskInput.value = '';
            // fetch('http://127.0.0.1:8000/api/to-do-list', {
            //     method: 'post',
            //     body: JSON.stringify(
            //         this.state.currentItems
            //     ),
            //     headers: {
            //         'Accept': 'application/json',
            //         'Content-Type': 'application/json'
            //     }
            // }).then(function (response) {
            //     response.json().then(function (res) {
            //         // console.log('return response '+res);
            //         if (res === 1) {
            //             Swal.fire('Inserted');

            //         } else {
            //             Swal.fire('Already in Array');
            //         }
            //     })
            // })
        }
    }

    deleteItem(key) {
        const filteredItem = this.state.items.filter(item => item.key !== key);
        this.setState({
            items: filteredItem
        })
    }

    render() {
        return (
            <div className="todolist">
                <h2 className="text-center text-light">Add Your Task Here</h2>
                <form method="post" onSubmit={this.additems}>

                    <div class="input-group">
                        <input ref="taskInput" type="text" placeholder="Enter Your Task" onChange={this.handleInput} />
                        <div class="input-group-append">
                            <button className="btn btn-info">Add</button>
                        </div>
                    </div>
                </form>
                <ListItem items={this.state.items} deleteItem={this.deleteItem} />
            </div>
        );
    }
}

export default ToDoList;