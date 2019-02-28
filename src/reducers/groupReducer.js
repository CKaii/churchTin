import {
  GROUP_CREATE,
  FETCH_DETAILS,
  FETCH_DETAIL,
  DELETE_GROUP,
  EDIT_GROUP
} from '../actions/types'
import _ from 'lodash'

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_DETAILS:
      return { ...state, ..._.mapKeys(action.payload, 'id') }
    case FETCH_DETAIL:
      return { ...state, [action.payload.id]: action.payload};
    case GROUP_CREATE:
      return { ...state, [action.payload.id]: action.payload};
    case EDIT_GROUP:
      return { ...state, [action.payload.id]: action.payload};
    case DELETE_GROUP:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}
