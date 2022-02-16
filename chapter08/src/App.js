import React,{useState} from 'react';
import './App.css';
import Layout from './components/shared/Layout';
import Button from './components/Button';
import like from './images/like.png';

function App() {

  const[like_count, set_count] = useState(false);

  function onClick() {
    if (like_count == false) {
      set_count(true);
    }
    else {
      set_count(false);
    }
  }

  return (
    <Layout>
      <p> ssss </p>
      <Button value = {like_count} onClick={onClick}></Button>
    </Layout>
  );
}

export default App;
