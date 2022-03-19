import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const setCountCard = () => {
    setCount(count + 1)
  }

  // useEffect(()=>{

  // },[])
  return (
    <div className="App">
      <Header count={count}></Header>
      <Main setCountCard={setCountCard}></Main>
    </div>
  );
}

export default App;
