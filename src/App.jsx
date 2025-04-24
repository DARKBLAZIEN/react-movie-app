import React, { useState } from 'react'
import Searchbar from './components/searchbar'
import './App.css'
const App = () => {

  const[search,setsearch]=useState('')
  return (
    <div className='bg'>
      <img src="../public/hero-img.png" alt="" className='image'/>
      <h1 className='heading'>Search for your <span className='fav-mov'>Favourite Movies</span> stress free</h1>
      <Searchbar search={search} setsearch={setsearch} />
    </div>
  )
}

export default App