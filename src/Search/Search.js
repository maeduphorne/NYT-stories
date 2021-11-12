import "./Search.css";
import { useState } from 'react'

const Search = ({ filterStories }) => {
  const [searchInput, setSearchInput] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    setSearchInput(e.target.value)
    filterStories(e.target.value)
  }

  const submitSearch = (e) => {
    e.preventDefault();
    filterStories(searchInput)
  }

  const handleClear = () => {
    setSearchInput()
    filterStories()
  }

  return(
    <form action="/" method="get">
        <input
            type="text"
            id="story-search"
            placeholder="Search for news article"
            name="search"
            onChange={(e) => handleSearch(e)} 
        />
        <button 
          type="submit"
          className="search-btn"
          onClick={(e) => submitSearch(e)}
        >
          Search
        </button>
        <button
          className="display-all"
          type="submit"
          onClick={(e) => handleClear(e)}
        >
          Display All
        </button>
    </form>
  )
}


export default Search;