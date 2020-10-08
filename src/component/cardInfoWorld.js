import React, { Component } from 'react';
import Axios from 'axios'
import {  API_URL } from '../support/backend_url'

// const API_URL = "https://covid19.mathdro.id"
class WorldInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            dataWorld: {}
        }
    }

    getData = () => {
        Axios.get(API_URL + '/api')
        .then((res) => {
            // console.log('GET success', res.data)
            this.setState({ dataWorld: res.data })
        })
        .catch((err) => {
            console.log('GET error', err)
        })
    }

    componentDidMount() {
        this.getData()
    }

    render() { 
        let {dataWorld} = this.state
        return ( 
            <div>
                <h2 className="text-center">Covid-19 World Summary</h2>
                <hr className="my-3" />
                <div className="row text-center">
                    <div className="col-12 col-md-4">
                        <div className="card">
                            <div className="card-body bg-danger text-white">
                                <h5 className="card-title">Confirmed</h5>
                                {
                                    dataWorld.confirmed? 
                                    <h2>{dataWorld.confirmed.value.toLocaleString()}</h2>
                                    :
                                    <h3>Fetching Data...</h3>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="card">
                            <div className="card-body bg-success text-white">
                                <h5 className="card-title">Recovered</h5>
                                {
                                    dataWorld.recovered? 
                                    <h2>{dataWorld.recovered.value.toLocaleString()}</h2>
                                    :
                                    <h3>Fetching Data...</h3>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="card">
                            <div className="card-body bg-danger text-white">
                                <h5 className="card-title">Deaths</h5>
                                {
                                    dataWorld.deaths? 
                                    <h2>{dataWorld.deaths.value.toLocaleString()}</h2>
                                    :
                                    <h3>Fetching Data...</h3>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">

                    </div>
                    <div className="col-12 col-md-4">

                    </div>
                </div>
            </div>
         );
    }
}
 
export default WorldInfo;