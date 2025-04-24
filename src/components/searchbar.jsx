import React from 'react'
import '../App.css'

const Searchbar = ({search, setsearch}) => {
  return (
    <div className='search-bar'>
      <input 
      className='search-text'
      type="text" 
      placeholder='Search for movies'
      value={search}
      onChange={(e)=>{setsearch(e.target.value)}}
      />
    </div>
  )
}

export default Searchbar