import React, { Component } from 'react';
import IndoInfo from '../component/cardInfoIndonesia';
import WorldInfo from '../component/cardInfoWorld';
import CarouselComp from '../component/carousel';
import Jumbo from '../component/jumbotron';
import '../assets/style/jumbotron.css'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <CarouselComp />
                    </div>
                    <div className="col-12 col-md-6">
                        <Jumbo />
                    </div>
                </div>
                <hr className="my-3" />
                <WorldInfo />
                <hr className="my-3" />
                <IndoInfo />
                <hr className="my-3" />
            </div>
         );
    }
}
 
export default Home;