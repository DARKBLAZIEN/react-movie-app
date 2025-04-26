import React from 'react'
import '../App.css'

const Searchbar = ({search, setsearch}) => {
  return (
    <div className='search-bar'>
      <div className="avoid-flex">{/*this div is to make the search icon and input field as flex-row because search-bar is flex-column*/}
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