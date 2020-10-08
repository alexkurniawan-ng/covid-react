import React, { Component } from 'react';
import Axios from 'axios'
import { API_URL_IDN } from '../support/backend_url'

// const API_URL_INA = "https://indonesia-covid-19-api.now.sh"
class IndoInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            dataIndo: {}
        }
    }

    getData = () => {
        Axios.get(API_URL_IDN + '/api')
        .then((res) => {
            // console.log('GET success', res.data)
            this.setState({ dataIndo: res.data })
        })
        .catch((err) => {
            console.log('GET error', err)
        })
    }

    componentDidMount() {
        this.getData()
    }

    render() { 
        let {dataIndo} = this.state
        return ( 
            <div>
                <h2 className="text-center">Covid-19 Indonesia Summary</h2>
                <hr className="my-3" />
                <div className="row text-center">
                    <div className="col-12 col-md-3">
                        <div className="card">
                            <div className="card-body bg-warning text-white">
                                <h5 className="card-title">Confirmed</h5>
                                {
                                    dataIndo.jumlahKasus? 
                                    <h2>{dataIndo.jumlahKasus.toLocaleString()}</h2>
                                    :
                                    <h3>Fetching Data...</h3>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="card">
                            <div className="card-body bg-primary text-white">
                                <h5 className="card-title">Treatment</h5>
                                {
                                    dataIndo.perawatan? 
                                    <h2>{dataIndo.perawatan.toLocaleString()}</h2>
                                    :
                                    <h3>Fetching Data...</h3>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="card">
                            <div className="card-body bg-success text-white">
                                <h5 className="card-title">Recovered</h5>
                                {
                                    dataIndo.sembuh? 
                                    <h2>{dataIndo.sembuh.toLocaleString()}</h2>
                                    :
                                    <h3>Fetching Data...</h3>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="card">
                            <div className="card-body bg-danger text-white">
                                <h5 className="card-title">Deaths</h5>
                                {
                                    dataIndo.meninggal? 
                                    <h2>{dataIndo.meninggal.toLocaleString()}</h2>
                                    :
                                    <h3>Fetching Data...</h3>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default IndoInfo;