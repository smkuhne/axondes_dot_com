import React from 'react';

class VideoWrapper extends React.Component {
    render() {
        return (
            <div className="container spacer">
                <div className="row">
                    <div className="col-md-12">
                        <div className="video-wrapper">
                            <iframe title={this.props.src} src={this.props.src} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoWrapper;