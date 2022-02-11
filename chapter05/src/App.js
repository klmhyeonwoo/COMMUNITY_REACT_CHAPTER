import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import {Event, Input, Mul} from './Event';
import Layout from './Layout'
import jQuery from "jquery";
import $ from "jquery";
window.$ = window.jQuery = jQuery;

function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState('');


  function run() {
    if (text == "") {
      document.getElementsByClassName('message')[0].innerHTML = "곱셈할 값을 먼저 입력해주세요 ;-)";
    }
    else {
    document.getElementsByClassName('message')[0].innerHTML = "'" + text + "' 로 곱셈한 결과예요 ;-)";
    setNumber(text);
    setText('');
    }
  }

    const onChange = (e) => {
      setText(e.target.value);
        };

  function reset() {
      setNumber(0);
      setText('');
      document.getElementsByClassName('message')[0].innerHTML = "초기화 완료!";
  }



  return (
    <Layout>

        <div className="center">
          <Mul className="number" value={number} value_2 = {1}>{number} X 1 = </Mul>
          <Mul className="number" value={number} value_2 = {2}>{number} X 2 = </Mul>
          <Mul className="number" value={number} value_2 = {3}>{number} X 3 = </Mul>
          <Mul className="number" value={number} value_2 = {4}>{number} X 4 = </Mul>
          <Mul className="number" value={number} value_2 = {5}>{number} X 5 = </Mul>
          <Mul className="number" value={number} value_2 = {6}>{number} X 6 = </Mul>
          <Mul className="number" value={number} value_2 = {7}>{number} X 7 = </Mul>
          <Mul className="number" value={number} value_2 = {8}>{number} X 8 = </Mul>
          <Mul className="number" value={number} value_2 = {9}>{number} X 9 = </Mul>

          <input className="input" placeholder="곱셈에 대한 값을 입력해주세요 ;-)" type="number" value={text} onChange={onChange}/>
          <div className="message">곱셈의 결과를 알려드릴게요 ;-)</div>
          <div className="btn_box">
            <Event className="btn" onClick={run}  text="실행"/>
            <Event className="btn" onClick={reset} text="초기화"/>
          </div>
        </div>
    </Layout>
  );
}


export default App;
