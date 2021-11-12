import "./Search.css";
import { useState } from 'react'

const Search = ({ filterStories }) => {
  
  const handleSearch = (e) => {
    e.preventDefault()
    filterStories(e.target.value)
  }

  return(
    <form action="/" method="get">
        {/* <label htmlFor="story-search">
            <span className="visually-hidden">Search for news article</span>
        </label> */}
        <input
            type="text"
            id="story-search"
            placeholder="Search for news article"
            name="search"
            onChange={(e) => handleSearch(e)} 
        />
        <button type="submit">Search</button>
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