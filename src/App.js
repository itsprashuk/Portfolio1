import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home';
import Projects from './Projects';
import Experience from './Experience';
import Navbar from './Navbar';
import Footer from './Footer';
import ProjectDisplay from './ProjectDisplay';
import Contactus from './Contactus';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/project/:id'element={<ProjectDisplay/>}/>
        <Route path='/experience' element={<Experience/>}/>
        <Route path='/contact' element={<Contactus/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
