import * as actionTypes from '../../actions/actionTypes';
import reducer from './auth';

describe('Auth Reducer', () => {
  it('should return initial state', () => {
    expect(reducer({
      error: null,
      accessToken: null,
      loading: false
    }, {})).toEqual({
      error: null,
      accessToken: null,
      loading: false
    })
  });

  it('should return the access token', () => {
    expect(reducer(
      {
        error: null,
        accessToken: null,
        loading: false
      },
      {
        type: actionTypes.AUTH_SUCCESS,
        accessToken: 'Some token'
      }
    )).toEqual({
      error: null,
      accessToken: "Some token",
      loading: false
    });
  });

})
