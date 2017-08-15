import { ENDPOINT_VIOLATIONS } from '../config/endpoints'

export const SET_VIOLATIONS = 'SET_VIOLATIONS'
export const setViolations = payload => ({
  type: SET_VIOLATIONS,
  results: payload
})

export const SELECT_VIOLATION = 'SELECT_VIOLATION'
export const selectViolation = id => ({
  type: SELECT_VIOLATION,
  selectedIndex: id
})

export const REQUEST_VIOLATIONS = 'REQUEST_VIOLATIONS'
export const requestViolations = coords => dispatch => {

  dispatch({
    type: REQUEST_VIOLATIONS,
    coords
  })

  fetch(ENDPOINT_VIOLATIONS, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      data: {
        latitude: coords.latitude,
        longitude: coords.longitude,
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      return dispatch(setViolations(responseJson.results))
    })

}

