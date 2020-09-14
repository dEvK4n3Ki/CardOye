import React from 'react';
import './Home.css';

import Slider from '../Carousel/Carousel';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="home-container">
                <Slider />
            </div>
        )
    }
}

export default Home;