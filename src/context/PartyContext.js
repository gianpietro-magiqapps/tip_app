import voteApi from '../api/voteApi';
import createDataContext from './createDataContext';

const partyReducer = (state, action) => {
  switch (action.type) {
    case 'get_parties':
      return action.payload;
    default:
      return state;
  }
};

const getParties = dispatch => async () => {
  const response = await voteApi.get(`/parties`, {});
  dispatch({type: 'get_parties', payload: response.data});
};

export const {Context, Provider} = createDataContext(
  partyReducer,
  {
    getParties,
  },
  [],
);
