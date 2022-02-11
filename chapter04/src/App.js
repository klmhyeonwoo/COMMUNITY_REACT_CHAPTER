import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [number, setNumber] = useState(0);
  var save_number;
  var count = 0;

  function plus() {
    setNumber(number + 1);
    document.getElementsByClassName('message')[0].innerHTML = "증가 되었습니다 ;-)";
  }

  function minus() {
    setNumber(number - 1);
    document.getElementsByClassName('message')[0].innerHTML = "감소가 되었습니다 ;-)";
    if (number == 0){
    document.getElementsByClassName('message')[0].innerHTML = "'0'일 경우에는 감소가 되지않아요 ;-)";
    setNumber(0);
    }
  }

  function reset() {
    setNumber(0);
    save_number = number;
    document.getElementsByClassName('message')[0].innerHTML = "현재 값을 저장시키고 리셋 되었습니다 ;-)";
    document.getElementsByClassName('save')[0].innerHTML = "'" + save_number + "'로 저장이 되었어요 ;-)";
    document.getElementsByClassName('save')[0].style.visibility = "visible";
  }

  return (
    <div className = "center">
        <p class="number">{number}</p>
        <div className="message">상태를 메세지로 알려드릴게요 ;-)</div>
        <button className="btn" onClick={plus}> 증가 </button>
        <button className="btn" onClick={minus}> 감소 </button>
        <button className="btn" onClick={reset}> 초기화 </button>
        <p className="save">저장된 값을 알려주는 영역</p>
    </div>
  );
}

export default App;
