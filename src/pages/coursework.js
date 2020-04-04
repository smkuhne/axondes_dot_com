import React from 'react';
import PageHeader from '../components/page_header';

class Coursework extends React.Component {
    render() {
        return (
            <div>
                <PageHeader image="images/coursework/header.png" header="Coursework">
                    Relevant coursework taken at UC Davis
                </PageHeader>
            </div>
        );
    }
}

export default Coursework;