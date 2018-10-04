import React from 'react';
import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';

export default class extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div>
                <Header />
                <main>
                    <GuessSection />
                    <StatusSection />
                    {/* <InfoSection /> */}
                </main>
            </div>
        );
    }
}