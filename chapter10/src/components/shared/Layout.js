import styles from './Layout.module.css';
import Header from './Header';
import Menu from './Menu';
import React, { useState } from 'react';


function Layout({ children, activeMenu }) {

  const [state, setState] = useState(true);

//  function changeState() {
//    if (state == true) {
//      setState(false);
//    }
//    else {
//      setState(true);
//    }
//  }

  function changeState() {
    setState((state) => !state);
    console.log(state);
  }
// useState, useEffect는 항상 실행하는 순서가 동일해야하기 때문입니다.
// 조건문이나 반복문을 사용하면 실행순서가 바뀔 수 있어 예상치 못한 오류를 야기하게 됩니다.



  return (
    <div className={styles.container}>
      <Header changeState={changeState} />
      <div className={styles.layout}>
        <Menu activeMenu={activeMenu} statement={state}/>
        <div className={styles.contents}>{children}</div>
      </div>
    </div>
  );
}


export default Layout;
