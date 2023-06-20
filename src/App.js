import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <ScrollToTop>
        <Routes>
          <Route path='/Portfolio/' element={<Home />} />
          <Route path='/Portfolio/projets/:slug' element={<Project />} />
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;
