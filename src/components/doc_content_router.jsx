import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import DocContentContainer from './doc_content_container.jsx'

function bindToProps (props) {
  return Child => p => <Child {... props} {... p} />
}

export default function DocContentRouter (props) {
  if (typeof window === 'undefined') {
    return (
      <DocContentContainer {... props} params={{ entry: '0' }} />
    )
  }
  return (
    <Router history={hashHistory}>
      <Route
        path='/:entry'
        component={bindToProps(props)(DocContentContainer)}
      />
      <Redirect from='/' to='/0' />
    </Router>
  )
}
