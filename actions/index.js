import fetch from 'isomorphic-fetch'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

// export functions that, when called, return action objects
// with a type prop and and other data that will be used or
// needed in the reducer function that will handle the action

// also possible for functions to return thunks, (yay!) which will
// be called with (dispath, getState) params

export function fetchPosts(id) {
  return dispatch => {
    dispatch(requestPosts(id))
    return fetch(`https://www.something.com/${id}.json`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(id, json)))
  }
}

