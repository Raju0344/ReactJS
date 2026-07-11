import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'
import { CloudMoonRain } from 'lucide'


const App = () => {

  const users = [
    {
      img: 'https://plus.unsplash.com/premium_photo-1661593195372-874ca9d29713?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29raW5nJTIwcHJvZmVzc2lvbmFsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D', 
      color: 'green',
      intro: '',
      tag: 'Satisfied'
    }, 
    {
      img: 'https://images.unsplash.com/photo-1736939661350-dec5c2bd5cd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdva2luZyUyMHByb2Zlc3Npb25hbCUyMGJ1c2luZXNzJTIwd29tZW58ZW58MHx8MHx8fDA%3D', 
      color: 'yellow',
      intro: '',
      tag: 'Underserved'
    },
    {
      img: 'https://images.unsplash.com/photo-1582639590011-f5a8416d1101?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZlbWFsZXxlbnwwfHwwfHx8MA%3D%3D', 
      color: 'blue',
      intro: '',
      tag: 'Unsatisfied'
    },
    {
      img: 'https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlfGVufDB8fDB8fHww', 
      color: 'orange',
      intro: '',
      tag: 'Unsatisfied'
    },
    {
      img: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmVtYWxlfGVufDB8fDB8fHww', 
      color: 'black',
      intro: '',
      tag: 'Average'
    }
  ]


  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App