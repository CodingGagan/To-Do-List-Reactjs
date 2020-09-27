import React, { Component } from 'react';
import Axios from 'axios';
import './Dashboard_Content.css';
// Class Component

// functional component 
class Dashboard_Content extends Component {

    state = {
        card_body: []
    };

    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({ card_body: response.data });
            });
    }

    // function() {
    //     this.card_body.map(res =>
    //         console.log(res.title)
    //     );
    // }

    // card_body = [
    //     {
    //         id: 1,
    //         'image': 'm2',
    //         'body': 'Card First Image with Some Content'
    //     },
    //     {
    //         id: 2,
    //         'image': 'm3',
    //         'body': 'Card Second Image with Some Content'
    //     },
    //     {
    //         id: 3,
    //         'image': 'm4',
    //         'body': 'Card Third Image with Some Content'
    //     },
    //     {
    //         id: 5,
    //         'image': 'm5',
    //         'body': 'My body is my body non of ur body'
    //     }
    // ];

    render() {
        const cards = this.state.card_body.map(card_card => {
            return <div className="col-md-3 m-5">
                <div className="card">
                    <div className="card-body">
                        {/* <img src={`/image/${card.image}.jpg`} alt={card.image} className="card-img-top" /> */}
                        <p className="card-text text-left">   
                            <h4 className="mb-1">{card_card.title}</h4>
                            <p>{card_card.body}</p>
                        </p>
                    </div>
                </div>
            </div>
        })
        return (
            <div className="container-fluid" >
                <div className="row mx-0">
                    {cards}
                </div>
            </div>
        )
    }
}
export default Dashboard_Content;