import { combineReducers } from 'redux'

// import the ACTION_NAME consts from ../actions
// use these when checking what action is being dispatched

function fn(state = {}, action) {
  // look at the action and return
  // your part of the state
}

const rootReducer = combineReducers({
  // each property is: fn(state, action)
  // that looks at the action and returns
  // the part of the state it's responsible for
})

export default rootReducer
