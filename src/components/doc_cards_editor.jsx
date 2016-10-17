import React from 'react'

export default function DocCardsEditor ({ isEditable = true, value = [] }) {
  return (
    <div className='container'>
      <div className='row'>
        {value.map(({ title, href, content }) =>
          <div className='col-md-3' key={title}>
            <div className='panel panel-default'>
              <div className='panel-heading'>
                <h4 className='panel-title'>
                  <a href={href}>{title}</a>
                </h4>
              </div>
              <div className='panel-body'>
                {content.map(str =>
                  <p key={str}>{str}</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
