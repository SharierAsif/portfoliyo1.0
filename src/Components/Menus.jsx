import React from 'react'

function Menus() {
    var menus = [
        {
            title : Home
        },
        {
            title : About
        },
        {
            title : Skills
        },
        {
            title : Work
        },
        {
            title : Contact
        }
        
        
        
    ]

  return (
    <div>
        {
            menus.map(menu => (<a title={menu.title}>{title}</a>))
        }
    </div>
  )
}

export default Menus