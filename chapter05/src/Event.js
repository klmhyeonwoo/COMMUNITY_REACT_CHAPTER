import styles from './Event.module.css';

/*

function Event(props) { // 약간 모바일 프로그래밍 커스텀 위젯 느낌이다, props라는 객체를 받고, 그 객체의 onClick, text 요소들을 사용할 수 있다.
  return <button className={styles.btn} onClick={props.onClick}>{props.text}</button>
}

*/


function Event({text, onClick}) { // 비 구조화 할당, 기존에 받고 있던 props 라는 객체 안의 값 text와 onClick을 추출해서 각각의 변수 값에 할당 및 사용할 수 있음, 가독성 증가
  return <button className={styles.btn} onClick={onClick}>{text}</button>
}

function Input({text}) {
  return <input type="number" className={styles.input} value={text} placeholder="곱하고 싶은 숫자를 입력해주세요!"></input>
}

function Mul({value, value_2}) {
    return <p className="number">{value} X {value_2} = {value * value_2}</p>
}

export {Event, Input, Mul};
