import React, { Component } from 'react'
import connectToField from '@webdesignio/react/connectToField'
import marked from 'marked'
import { createSelector } from 'reselect'

import DocContent from './doc_content.jsx'

class DocContentContainer extends Component {
  constructor ({ isEditable }) {
    super()
    this.html = createSelector(
      (state, { value, params: { entry } }) => value[entry],
      value => {
        const content = value ? (value.content || '') : ''
        return marked(content)
      }
    )
    this.handlers = {
      onChangeTitle: this.onChangeField.bind(this, 'title'),
      onChangeContent: this.onChangeField.bind(this, 'content'),
      onClickAddSection: this.onClickAddSection.bind(this),
      onClickToggleIsEditable: this.onClickToggleIsEditable.bind(this)
    }
    this.state = { isEditable }
  }

  componentWillReceiveProps ({ isEditable }) {
    if (isEditable !== this.props.isEditable) {
      this.setState({ isEditable })
    }
  }

  onChangeField (field, e) {
    const { value, params: { entry } } = this.props
    const entryIndex = Number(entry)
    const v = e.target.value
    this.props.onChange(
      value.map((e, i) =>
        i === entryIndex
          ? Object.assign({}, e, { [field]: v })
          : e
      )
    )
  }

  onClickAddSection (e) {
    e.preventDefault()
    const { value } = this.props
    this.props.onChange(value.concat([{ title: 'New section', content: '' }]))
  }

  onClickToggleIsEditable (e) {
    e.preventDefault()
    this.setState({ isEditable: !this.state.isEditable })
  }

  render () {
    return (
      <DocContent
        {... this.props}
        {... this.state}
        {... this.handlers}
        html={this.html(this.state, this.props)}
      />
    )
  }
}

export default connectToField({ defaultName: 'entries' })(DocContentContainer)
