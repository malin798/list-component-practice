import React from 'react'

export const ListItem = ({listItem}) => {
  return (
    <div className="list-item">
      {listItem.avatar &&
       <div 
        style={{backgroundImage: `url('${listItem.avatar}')`}}
        className="list-item-image">
        </div>
      }
      {listItem.icon &&
       <div 
        className="list-item-image">
          <span>{listItem.icon}</span>
        </div>
      }
      <div className="list-item-header">
        {listItem.title && 
          <h2>
            {listItem.title}
          </h2>
        }
        {listItem.subtitle &&
        <p>
          {listItem.subtitle}
          </p>
        }
      </div>
    </div>
  )
}