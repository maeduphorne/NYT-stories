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

//   handleInput = async function (e) {
//     await this.setState({ input: e.target.value });
//     this.props.filterMovies(e.target.value);
//   };

//   handleClear = () => {
//     this.setState({ input: "" });
//   };

//   submitSearch = (e) => {
//     e.preventDefault();
//     this.props.filterMovies(this.state.input);
//   };

//   render() {
//     return (
//       <form action="/" method="get">
//         <input
//           type="text"
//           className="search-bar"
//           placeholder="Start Typing a Movie Title to Search"
//           name="search"
//           value={this.state.input}
//           onChange={(e) => this.handleInput(e)}
//         />
//         <div className="btn-styling">
//           <button
//             className="search-btn"
//             type="submit"
//             onClick={this.submitSearch}
//           >
//             Search
//           </button>
//           <button
//             className="display-all"
//             type="submit"
//             onClick={this.handleClear}
//           >
//             Display All
//           </button>
//         </div>
//       </form>
//     );
//   }
// }