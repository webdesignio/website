import React from 'react'
import { Link } from 'react-router'

const renderAddButton = ({ onClickAddSection }) =>
  <div className='pt-60'>
    <button className='btn btn-primary' onClick={onClickAddSection}>
      <i className='glyphicon glyphicon-plus' />
    </button>
  </div>

const renderToolbar = ({ isEditable, onClickToggleIsEditable }) =>
  <div className='navbar navbar-default'>
    <ul className='nav navbar-nav'>
      <li>
        <a href='#' onClick={onClickToggleIsEditable}>{isEditable ? 'Preview' : 'Edit'}</a>
      </li>
    </ul>
  </div>

const renderEditor = ({ params: { entry }, value, onChangeTitle, onChangeContent }) =>
  <div>
    <div className='form-group'>
      <label className='control-label'>Title</label>
      <input
        type='text'
        className='form-control'
        value={value[entry].title}
        onChange={onChangeTitle}
      />
    </div>
    <div className='form-group'>
      <label className='control-label'>Content (Markdown)</label>
      <textarea
        className='form-control'
        value={value[entry].content}
        rows={20}
        onChange={onChangeContent}
      />
    </div>
  </div>

export default function DocContent ({
  value,
  html,
  params,
  isEditable,
  isPublished,
  onChangeTitle,
  onChangeContent,
  onClickAddSection,
  onClickToggleIsEditable
}) {
  const entryIndex = Number(params.entry)
  return (
    <div className='container'>
      <div className='col-md-4'>
        <ul className='nav nav-pills nav-stacked'>
          {value.map(({ title }, i) =>
            <li className={i === entryIndex ? 'active' : ''} key={title}>
              <Link to={`/${i}`}>{title}</Link>
            </li>
          )}
        </ul>
        {isEditable
          ? renderAddButton({ onClickAddSection })
          : null}
      </div>
      <div className='col-md-8'>
        {!isPublished
          ? renderToolbar({ isEditable, onClickToggleIsEditable })
          : null}
        {isEditable
          ? renderEditor({ params, value, onChangeTitle, onChangeContent })
          : <div dangerouslySetInnerHTML={{ __html: html }} />}
      </div>
    </div>
  )
}
