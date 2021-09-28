import React, { Component } from 'react'

export default class ApiGet extends Component {
    constructor(){
        super();
    }
        fetchItems = () => {
        fetch('https://cybertournaments.herokuapp.com/dota/?format=json')
        .then(data => data.json())
        .then(data => this.setState({'items':data}))
      };
      componentDidMount(){
        this.fetchItems();
    };
    

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
