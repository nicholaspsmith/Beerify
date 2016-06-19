import { SEARCH_TERM } from '../actions/types';

export default function reducerSearchTerm(state = '', action) {
  switch(action.type) {
    case SEARCH_TERM:
      return action.payload
  }
  return state;
}
