import voteApi from '../api/voteApi';
import createDataContext from './createDataContext';

const candidateReducer = (state, action) => {
  switch (action.type) {
    case 'get_candidates':
      return action.payload;
    case 'reset_candidates':
      return null;
    default:
      return state;
  }
};

const getCandidates = dispatch => async () => {
  const response = await voteApi.get(`/candidates`, {});
  dispatch({type: 'get_candidates', payload: response.data});
};

const resetCandidates = dispatch => async () => {
  dispatch({type: 'reset_candidates'});
};

export const {Context, Provider} = createDataContext(
  candidateReducer,
  {
    getCandidates,
    resetCandidates,
  },
  [],
);
