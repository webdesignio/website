import React from 'react'
import { connect } from 'react-redux'

import { setEditable } from '../lib/webdesignio/actions'

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0
  },

  button: {
    display: 'inline-block',
    cursor: 'pointer',
    border: 'solid 1px black',
    padding: '5px',
    backgroundColor: 'white'
  }
}

function Toolbar ({ isEditable, onClickToggle }) {
  return (
    <div style={styles.root}>
      <div
        style={styles.button}
        onClick={e => onClickToggle(isEditable, e)}
      >
        {isEditable ? 'Anzeigen' : 'Editieren'}
      </div>
      <div
        id='save'
        style={Object.assign({}, styles.button)}
      >
        Speichern
      </div>
    </div>
  )
}

function mapStateToProps ({ isEditable }) {
  return { isEditable }
}

function mapDispatchToProps (dispatch) {
  return {
    onClickToggle (isEditable, e) {
      e.preventDefault()
      dispatch(setEditable(!isEditable))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar)
