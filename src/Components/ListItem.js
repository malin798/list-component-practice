import React from 'react'

export const ListItem = ({listItem}) => {
  return (

    <div className="list-item">

      <div className="list-item-header">

        {listItem.avatar &&
          <div 
          style={{backgroundImage: `url('${listItem.avatar}')`}}
          className="list-image-left">
          </div>
        }

        {listItem.icon &&
          <div className="list-image-left">
            <span>{listItem.icon}</span>
          </div>
        }

        <div className="list-item-text">
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

      {listItem.iconRight &&
      <div 
        style={{backgroundImage: `url('${listItem.iconRight}')`}}
        className="list-image-right right-image-size">
      </div>
      }

      {listItem.textRight &&
        <div className="list-image-right">
          {listItem.textRight}
        </div>
      }

    </div>
  )
}