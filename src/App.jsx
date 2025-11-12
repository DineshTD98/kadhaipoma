import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Route,Routes} from 'react-router-dom';
import User from './components/User.jsx';
function App() {
    const [stories,setStories]=useState(false);
    return(
      
      <Routes>
         <Route path='/' element={
        <User stories={stories} setStories={setStories} /> }/>
      </Routes>
     
    )
}

export default App
