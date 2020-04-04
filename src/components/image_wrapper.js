import React from 'react';

class ImageWrapper extends React.Component {
    render() {
        return (
            <div className="container spacer">
                <div className="row">
                    <div className="col-md-12">
                        <img src={this.props.src} className="image-wrapper" alt={this.props.src}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ImageWrapper;