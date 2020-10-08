import React, { Component } from 'react';
import Axios from 'axios';
import { API_URL } from '../support/backend_url'

// const API_URL = "https://covid19.mathdro.id"
class CountriesDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {  
                confirmed: 0,
                recovered: 0,
                deaths: 0,
                allData: []
        }
    }

    getDetail = () => {
        // Untuk mendapatkan data dari paramater url
        let {params} = this.props.match
        Axios.get(API_URL + `/api/countries/${params.iso}`)
        .then((res) => {
            console.log('Get Detail Success: ', res.data)
            let {confirmed, recovered, deaths} = res.data
            this.getAllDetail(confirmed.detail)
            this.setState({ 
                confirmed: confirmed.value, 
                recovered: recovered.value, 
                deaths: deaths.value,
            })
        })
        .catch((err) => {
            console.log('Get Detail Error: ', err)
        })
    }

    getAllDetail = (url) => {
        Axios.get(url)
        .then((res) => {
            console.log("get AllDetail success: ", res.data)
            this.setState({allData: res.data})
        })
        .catch((err) => {
            console.log("error getAllDetail", err)
        })
    }   

    componentDidMount() {
        this.getDetail()
    }

    renderAllData = () => {
        return this.state.allData.map((item, index) => {
            return(
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.combinedKey}</td>
                    <td>{item.confirmed.toLocaleString()}</td>
                    <td>{item.recovered.toLocaleString()}</td>
                    <td>{item.deaths.toLocaleString()}</td>
                    <td>{item.active.toLocaleString()}</td>
                </tr>
            )
        })
    }

    render() { 
        // Untuk mendapat parameter dari URL lihat this.props.match untuk detailnya
        let { params } = this.props.match
        console.log(this.props.match)
        return ( 
            <div className="container"> 
                <div className="card text-center">
                    <h5 className="card-header">{params.countries}</h5>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <div className="card bg-info text-white">
                                    <div className="card-body">
                                        <h5 className="card-title">Confirmed</h5>
                                        <h2>{this.state.confirmed.toLocaleString()}</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="card bg-success text-white">
                                    <div className="card-body">
                                        <h5 className="card-title">Recovered</h5>
                                        <h2>{this.state.recovered.toLocaleString()}</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="card bg-danger text-white">
                                    <div className="card-body">
                                        <h5 className="card-title">Deaths</h5>
                                        <h2>{this.state.deaths.toLocaleString()}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{height:"60vh", overflow:"auto"}}>
                    <table className="table table-hover my-3" style={{border:"1px solid black"}}>
                        <thead className="thead-dark">
                            <tr>
                                <th>No</th>
                                <th>City</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Deaths</th>
                                <th>Active</th>
                            </tr>
                        </thead>
                        <tbody>
                            <this.renderAllData />
                        </tbody>
                    </table>
                </div>
            </div>
         );
    }
}
 
export default CountriesDetail;