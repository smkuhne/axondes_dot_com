import React from 'react';
import { Link } from 'react-router-dom';

class SquareTile extends React.Component {
    render() {
        return (
            <Link className="triple" to={this.props.href}>
                <div className="remove-padding" onClick={this.props.onClick}>
                    <div className="animated-square-tile">
                        <div className="animated-tile">
                            <div className="animated-tile-text">
                                <p className="text-left">&#123;</p>
                                <p>{this.props.children}</p>
                                <p className="text-right">&#125;</p>
                            </div>
                        </div>
                    </div>
                    <img src={this.props.banner} className="animated-image" alt={this.props.children}/>
                </div>
            </Link>
        );
    }
}

export default SquareTile;