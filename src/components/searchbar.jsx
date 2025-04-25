import React from 'react'
import '../App.css'

const Searchbar = ({search, setsearch}) => {
  return (
    <div className='search-bar'>
      <div className="avoid-flex">
        <img src="../public/search.svg" alt="" className="icon" />
        <input 
        className='search-text'
        type="text" 
        placeholder='Search for movies'
        value={search}
        onChange={(e)=>{setsearch(e.target.value)}}
        />
      </div>
      
    </div>
  )
}

export default Searchbar