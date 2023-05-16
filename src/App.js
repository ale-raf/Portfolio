import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projets/:slug' element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
