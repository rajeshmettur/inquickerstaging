import React from 'react';
import { connect } from 'react-redux';
import { fetchServiceList } from '../actions';
import {fetchSelectedProviders} from '../actions';

class ServiceList extends React.Component {

    componentDidMount(){
       this.props.fetchServiceList();
    }

    renderList() {
        if(this.props.services.data !== undefined) {
             return this.props.services.data.map(service => {
                return (
                    <li className="list-group-item" key={service.id} onClick={() => this.props.fetchSelectedProviders(service)}>{service.attributes.name}</li>
                );
            });
        }
    }

    render() {
        return (
            <fieldset>
            <legend>
                Control
            </legend>
            <div className="card" style={{width:'18rem'}}>
            <ul className="list-group list-group-flush">
            {this.renderList()}
            </ul>
            </div>
            </fieldset>
        )
    }
}

const mapStateToProps = state => {
    return { services : state.services };
}

export default connect(mapStateToProps, { fetchServiceList, fetchSelectedProviders })(ServiceList);