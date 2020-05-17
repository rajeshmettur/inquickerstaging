import inquickerstaging from '../apis/inquickerstaging';

export const fetchServiceList = () => async dispatch => {
    const response = await inquickerstaging.get('/services');
    dispatch({ type : 'FETCH_SERVICES', payload : response.data})
};

export const fetchProviders = () => async dispatch => {
    const response = await inquickerstaging.get('/providers?include=locations%2Cschedules.location&page%5Bnumber%5D=1&page%5Bsize%5D=10');
    dispatch({ type: 'FETCH_PROVIDERS', payload: response.data });
  };

  export const fetchSelectedProviders = Services => async dispatch => {
    // Return an action
    dispatch({ type: 'SERVICE_SELECTED', payload: Services });
  };