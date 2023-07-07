import logo from './logo.svg';
import './App.css';
import { Home } from './component/pages/Home';
import Header from './component/pages/Header';

function App() {
  return (
    <>
    <Header />
    <div className="App">
      <h1 style={{color: 'magenta', fontFamily: "cursive"}}>Welcome to my portfolio.</h1>
      <Home />
    </div>
    </>
  );
}

export default App;
