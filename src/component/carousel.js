import React, { Component } from 'react';

class CarouselComp extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            info: ["https://pacitankab.go.id/wp-content/uploads/photo_2020-04-23_10-01-35.jpg", 
                    "https://storage.googleapis.com/pkg-portal-bucket/images/news/2020-03/himbauan-terkait-covid-19/pg_notice-covid-19.png", 
                    "https://www.piyaman-wonosari.desa.id/assets/files/artikel/sedang_1585210248suspect-virus-corona-driver-ojol-sempat-kabur-dari-karantina-diisolasi-usai-antar-prt-wna-positif.jpg"
                    ]
        }
    }

    renderCarousel = () => {
        return this.state.info.map((item, index) => {
            if (index === 0) {
                return(
                    <div key={index} className="carousel-item active">
                        <img className="d-block w-100" src={item} style={{height: 370}} alt={`Slide${index + 1}`} />
                    </div>)
            }

            return(
                <div key={index} className="carousel-item">
                    <img className="d-block w-100" src={item} style={{height:370}} alt={`Slide${index + 1}`} />
                </div>
            )
        })
    }

    render() { 
        return ( 
            <div id="carouselInfo" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    {this.renderCarousel()}
                </div>
                <a className="carousel-control-prev" href="#carouselInfo" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselInfo" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

         );
    }
}
 
export default CarouselComp;