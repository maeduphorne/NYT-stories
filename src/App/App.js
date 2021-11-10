import './App.css';
import Header from '../Header/Header';
import StoryCardsArea from '../StoryCardsArea/StoryCardsArea';
import StoryDetails from '../StoryDetails/StoryDetails';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header/>
      <StoryCardsArea />
      <StoryDetails />
    </div>
  );
}

export default App;
