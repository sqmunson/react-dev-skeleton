import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
// import action creators from ../actions and add to props
// might want to dispatch actions in lifecycle methods

// import components from ../components for rendering

class App extends Component {
  render() {
    // use props and return jsx
    return ()
  }
}

// includes all props, including those created in connect()
App.propTypes = {}

function mapStateToProps(state, ownProps) {
  // return object with properties expected
  // on the container. ownProps are props passed
  // into the container
}

function mapDispatchToProps(dispatch, ownProps) {
  // return object of functions that, when called
  // from components, dispatch actions. If not passed
  // to connect() than dispatch function is added to props
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
