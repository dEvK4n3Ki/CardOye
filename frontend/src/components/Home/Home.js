import React from 'react';
import './Home.css';

import Carousel from '../Carousel/Carousel';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="home-container">
                Home Page
                <Carousel />
            </div>
        )
    }
}

export default Home;