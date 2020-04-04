import React from 'react';
import { Jumbotron } from 'react-bootstrap';

class PageHeader extends React.Component {
    render() {
        return (
            <Jumbotron>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={this.props.image} className={`header-image ${this.props.className}`} alt={this.props.header} align="left"/>
                        </div>
                        <div className="col-md-6 align-self-center" align="middle">
                            <h1>{this.props.header}</h1>
                            <p>{this.props.children}</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        )
    }
}

export default PageHeader;