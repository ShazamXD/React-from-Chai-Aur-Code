import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// } 
/* this is not executing in render because the syntax is not right since it is custom made by u, to render it you have to write
your custom render function also as written in customReact.js */

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = "chai aur code"

const reactElement = React.createElement(
  'a', // any tag name here 'a'
  {href: 'https://google.com', target: '_blank'}, // attributes for the tag
  'click me to visit google',
  anotherUser // here variables can be added at the end since this is the syntax
)

createRoot(document.getElementById('root')).render(
  
    // <MyApp /> /* if it was written as MyApp() then it also would have executed the same since it is a function and at the 
    // end React is nothing but javascript */
    reactElement

)
