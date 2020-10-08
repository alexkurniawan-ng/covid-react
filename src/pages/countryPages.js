import React, { Component } from 'react';
import Axios from 'axios';
import CardCountries from '../component/cardCountries';
import { API_URL } from '../support/backend_url'

// const API_URL = "https://covid19.mathdro.id"
class Countries extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            dataCountries: [],
            caseCountries: []
        }
    }


    getDataCountries = () => {
        Axios.get(API_URL + "/api/countries")
        .then((res) => {
            // console.log('GET success countries: ', res.data.countries)
            this.setState({ dataCountries: res.data.countries})
        })
        .catch((err) => {
            console.log('GET error countries: ', err)
        })
    }

    componentDidMount() {
        this.getDataCountries()
    }

    renderCard = () => {
        return this.state.dataCountries.map((item, index) => {
            return(
                <CardCountries data={item} key={index}/>
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
 
export default Countries;