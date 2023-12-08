
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Home  from './pages/Home';
import Header from './component/Header';
import Page404 from './pages/Page404';
import SignUp from './component/pages/SignUp';
import Service from './pages/Service';
import Callback from './component/HooksExample/useCallback/Callback';
import ParentComp from './component/HooksExample/React-Basic-Example/Props-example/ParentComp';

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}/>
        <Route path='/gallery' element={<Gallery />}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/*' element={<Page404/>} />
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/services/' element={<Service/>}>
          <Route path='callback' element={<Callback />} />
          <Route path='props' element={<ParentComp />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
