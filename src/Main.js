import React, { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './components/Home'
import Create from './components/Create'
import List from './components/List'
import { MyContext } from './mycontext/Mycontext'
import { blog } from './components/Blog'
function Main() {
    const [value,setvalue]=useState(blog)

  return (

<>
  <MyContext.Provider value={{value,setvalue}}>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/list/:id' element={<List/>}/>
    </Routes>
    </MyContext.Provider>
</>
  )
}

export default Main