import logo from './logo.svg';
import './App.css';
import Book from './components/Book/Book';
import Header from './components/Book/Header';
import Question from './Question/Question';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Book></Book>
      <Question></Question>
    </div>
  );
}

export default App;
