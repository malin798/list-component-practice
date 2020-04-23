import React from 'react'
import { ListItem } from 'Components/ListItem'

export const ListContainer = ({listContent}) => {

  return (
    <div className="list-container">
      {listContent.map((item) => (
        < ListItem listItem={item} key={item.id}/>
      ))
      }
      
    </div>
  )
} 