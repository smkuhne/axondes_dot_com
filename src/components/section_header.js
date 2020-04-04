import React from 'react';
import { Jumbotron } from 'react-bootstrap';

class PageHeader extends React.Component {
    render() {
        return (
            <Jumbotron>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1> {this.props.children} </h1>
                    </div>
                </div>
            </Jumbotron>
        )
    }
}

export default PageHeader;