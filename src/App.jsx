import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import HomeTwo from './pages/HomeTwo';
import About from './pages/About';
import Career from './pages/Career';
import ClientSuccess from "./pages/ClientSuccess";
import Blog from './pages/Blog';
import BlogDetails from "./pages/BlogDetails";
import Contact from './pages/Contact';

function App() {
  console.log('App rendering');
  
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home-two" element={<HomeTwo />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/ClientSuccess" element={<ClientSuccess />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;