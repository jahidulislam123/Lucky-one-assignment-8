import logo from './logo.svg';
import './App.css';
import Book from './components/Book/Book';
import Header from './components/Book/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Book></Book>
    </div>
  );
}

export default App;
