import React from 'react';
import Services from './ServiceList'
import Providers from './Provider';
import 'bootstrap/dist/css/bootstrap.css';
import ProviderList from './ProviderList';
export class App extends React.Component {
    render() {
        return (
             <div className="ui container">
                 <div className ="row row-cols-1 row-cols-md-2">
                    <div className ="col mb-4">
                        <Services/>
                    </div>
                    <div className ="col mb-4">
                        <Providers/>
                    </div>
                 </div> 
                 <ProviderList/>
            </div>
        );
    }
};

