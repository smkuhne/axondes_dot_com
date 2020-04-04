import React from 'react';

class TileRow extends React.Component {
    render() {
        return (
            <div className="flex-container">
                {this.props.children}
            </div>
        )
    }
}

export default TileRow;