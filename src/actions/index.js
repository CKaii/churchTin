import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_GROUP,
  DELETE_GROUP,
  FETCH_DETAILS,
  FETCH_DETAIL,
  EDIT_GROUP} from './types'
import history from '../history'
import groups from '../apis/groups'

export const signIn = () => {
  return {
    type: SIGN_IN
  };
}

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
}

export const createGroup = (formValues) => async (dispatch, getState) =>{
  const { userId } = getState().auth;
  const response = await groups.post('/groups', { ...formValues, userId });

  dispatch({
    type: CREATE_GROUP,
    payload: response.data
  })

  history.push('/');
}

export const fetchDetails = () => async dispatch => {
  const response = await groups.get('/groups');

  dispatch({type: FETCH_DETAILS, payload: response.data })
}

export const fetchDetail = (id) => async dispatch => {
  const response = await groups.get(`/groups/${id}`);

  dispatch({ type: FETCH_DETAIL, payload: response.data })
}

export const editGroup = (id, formValues) => async dispatch => {
  const response = await groups.put(`/groups/${id}`);

  dispatch({type: EDIT_GROUP, payload: response.data })
}

export const deleteGroup = (id) => async dispatch => {
  await groups.delete(`/groups/${id}`);

  dispatch({ type: DELETE_GROUP, payload: id})
}
