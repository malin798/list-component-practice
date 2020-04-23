import React from 'react'
import { ListContainer } from 'Components/Card'

export const App = () => {

  const ListContent = [
    {
      id: "1",
      title: "Title 1",
    },
    {
      id: "2",
      title: "Title 2",
      subtitle: "Subtitle 2", 
    },
    {
      id: "3",
      title: "Title 3",
      subtitle: "Subtitle 3",
      avatar: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-512.png"
    },
    {
      id: "4",
      title: "Title 4",
      subtitle: "Subtitle 4",
      icon: "🧡",
      iconRight: "https://image.flaticon.com/icons/svg/512/512222.svg"
    }
  ]
  
  return (
    <main>
      < ListContainer listContent={ListContent}/>
    </main>
  )
}
