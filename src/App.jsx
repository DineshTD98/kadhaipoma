import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router,Route,Routes, BrowserRouter} from 'react-router-dom';
import User from './components/User.jsx';
function App() {
    const [stories,setStories]=useState(false);
    return(
      <Router>
      <Routes>
         <Route path='/' element={
          <>
              <User stories={stories} setStories={setStories} />
          </>
       }/>
      </Routes>
      </Router>
    )
}

export default App
