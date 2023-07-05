import logo from './logo.svg';
import './App.css';
import { Home } from './component/pages/Home';

function App() {
  return (
    <div className="App">
      <h1 style={{color: 'magenta', fontFamily: "cursive"}}>Welcome to my portfolio.</h1>
      <Home />
    </div>
  );
}

export default App;
