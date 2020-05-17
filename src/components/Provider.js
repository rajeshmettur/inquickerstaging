import React from 'react';
import { connect } from 'react-redux';
import { fetchProviders } from '../actions';

class Provider extends React.Component{

    componentDidMount(){
        //this.props.fetchProvider(this.props.userId);
        this.props.fetchProviders();
    }

    renderList() {
        if(this.props.providers.data !== undefined) {
             return this.props.providers.data.map(provider => {
                return (
                    <li className="list-group-item" key={provider.id}>{provider.attributes.name}</li>
                );
            });
        }
    }

    render() {
        return (
            <fieldset>
            <legend>
                Result
            </legend>
            <div className ="card" style={{width:'18rem'}}>
            <ul className="list-group list-group-flush">
            {this.renderList()}
            </ul>
            </div>
            </fieldset>
        )
    }
}

const mapStateToProps = (state, ownprops) => {
   // return { user : state.users.find(user => user.id === ownprops.userId) };
   return { providers : state.providers};
}

export default connect(mapStateToProps, {fetchProviders} )(Provider);