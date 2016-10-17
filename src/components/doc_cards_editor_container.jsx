import React, { Component } from 'react'
import connectToField from '@webdesignio/react/connectToField'

import DocCardsEditor from './doc_cards_editor.jsx'

class DocCardsEditorContainer extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    return (
      <DocCardsEditor
        {... this.props}
        {... this.state}
        value={this.props.value || []}
      />
    )
  }
}

export default connectToField({ defaultName: 'cards' })(DocCardsEditorContainer)
