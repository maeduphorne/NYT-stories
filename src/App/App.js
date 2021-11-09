import './App.css';
import apiCalls from '../api/apiCalls';
import Header from '../Header/Header';
import { useEffect, useState } from 'react';

function App() {
  const [stories, setStories]= useState([])
  const [error, setError]= useState('')

  // useEffect(() => {
  //   setError('')
  //   apiCalls.fetchStoriesData()
  //   .then((data => setStories(data.results)))
  //   .catch((err) => console.log(err))
  // })

  return (
    <div className="App">
      <Header></Header>
    </div>
  );
}

export default App;
