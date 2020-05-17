import React from 'react';
import { connect } from 'react-redux';
import { fetchProviders } from '../actions';

class ProviderList extends React.Component {
    componentDidMount(){
       this.props.fetchProviders();
    }
   

    renderList() {
        if(this.props.providers.data !== undefined) {
             return this.props.providers.data.map(provider => {
                const imgSrc = provider.attributes;
                return (
                    <div className="card w-75" key={provider.id}>
                        <div>
                          <img src='../../assets/user.png' className="card-img-top" alt="..."></img>
                        </div>
                         <div className ="card-body">
                            <h5 className ="card-title">{provider.attributes.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{provider.attributes.subspecialties}</h6>
                        </div>
                    </div>
                );
            });
        }
    }

    render() {
        return (
            <fieldset>
            <legend>
                Provider Lists
            </legend>
            <div>
            {this.renderList()}
            </div>
            </fieldset>
            
        )
    }
}

const mapStateToProps = state => {
    return { providers : state.providers };
}

export default connect(mapStateToProps, { fetchProviders })(ProviderList);