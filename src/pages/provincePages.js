import React, { Component } from 'react';
import Axios from 'axios';
import CardProvinsi from '../component/cardProvinsi';
import { API_URL_IDN } from '../support/backend_url'

// const API_URL_IDN = "https://indonesia-covid-19-api.now.sh"
class Province extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            dataProvinsi: []
        }
    }

    getDataProvince = () => {
        Axios.get(API_URL_IDN + '/api/provinsi')
        .then((res) => {
            console.log('GET province success: ', res.data.data)
            this.setState({ dataProvinsi: res.data.data})
        })
        .catch((err) => {
            console.log('getProvince ERR', err)
        })
    }

    componentDidMount() {
        this.getDataProvince()
    }

    renderCard = () => {
        return this.state.dataProvinsi.map((item, index) => {
            return(
                <CardProvinsi data={item} key={index}/>
            )
        })
    }

    render() { 
        return ( 
            <div className="container">
                <div className="row">
                    {this.renderCard()}
                </div>
            </div>
         );
    }
}
 
export default Province;