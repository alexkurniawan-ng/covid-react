import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    return(
        <div className="col-12 col-sm-4">
            <Link to={`/countries-detail/${props.data.name}/${props.data.iso3}`}>
                <div className="card my-2">
                    <div className="card-header">
                        {props.data.name}
                    </div>
                </div>
            </Link>
        </div>
    )
}

// const CardCountries = (props) => {
//     return(
//         <div className="col-12 col-sm-4">
//             <Link to={`/countries-detail/${props.data.name}/${props.data.iso3}`}>
//                 <div className="card">
//                     <div className="card-header">
//                         {props.data.name}
//                     </div>
//                 </div>
//             </Link>
//         </div>
//     )
// }

// export default CardCountries;