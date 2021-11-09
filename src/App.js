import './App.css';
import apiCalls from './api/apiCalls';
import { useEffect, useState } from 'react';

function App() {
  const [stories, setStories]= useState([])
  const [error, setError]= useState('')

  useEffect(() => {
    apiCalls.fetchStoriesData()
    .then((data => setStories(data)))
    .catch((err) => setError(err))
  })

  return (
    <div className="App">
      Hello World!
    </div>
  );
}

export default App;
