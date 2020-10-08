import React, { Component } from 'react';

class FooterComp extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container-fluid">
                <hr className="my-3" />
                <div className="my-4">
                    ALEX &copy; All rights reserved.
                </div>
            </div>
         );
    }
}
 
export default FooterComp;