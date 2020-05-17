import  { combineReducers } from 'redux';
import ServicesReducers from './serviceReducer';
import ProviderReducers from './providerReducer';

export default combineReducers({
  services : ServicesReducers,
  providers : ProviderReducers
});
