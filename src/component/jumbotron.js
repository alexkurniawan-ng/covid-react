import React from 'react';
import { Button, Jumbotron } from 'reactstrap';

const Jumbo = (props) => {
    return(
        <div>
            <Jumbotron>
                <h1 className="display-3">Covid <span className="text-white">Info</span></h1>
                <p className="lead">This is Paragraph 1</p>
                <hr className="my-2" />
                <p>This is Paragraph 2</p>
                <p className="lead">
                    <Button color="primary">Learn More</Button>
                </p>
            </Jumbotron>
        </div>
    )
}

 
export default Jumbo;