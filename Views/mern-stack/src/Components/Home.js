import React, { Component } from 'react'
import Navbar from './partials/Navbar';


class Home extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( <div>
           <Navbar />
        </div> );
    }
}
 
export default Home;